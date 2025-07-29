import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { createClient } from 'redis';

const prisma = new PrismaClient();

// Health check configuration
const HEALTH_CHECK_TIMEOUT = 5000; // 5 seconds
const APP_VERSION = process.env.npm_package_version || '1.0.0';
const NODE_ENV = process.env.NODE_ENV || 'development';

interface HealthCheckResult {
  timestamp: string;
  status: 'ok' | 'degraded' | 'unhealthy';
  version: string;
  environment: string;
  uptime: number;
  services: {
    database: ServiceHealth;
    redis: ServiceHealth;
    strapi: ServiceHealth;
    filesystem: ServiceHealth;
  };
  system: {
    memory: {
      used: number;
      total: number;
      percentage: number;
    };
    nodejs: {
      version: string;
      platform: string;
      arch: string;
    };
  };
}

interface ServiceHealth {
  status: 'healthy' | 'unhealthy' | 'unknown';
  responseTime?: number;
  error?: string;
  lastChecked: string;
}

export async function GET() {
  const startTime = Date.now();
  const checks: HealthCheckResult = {
    timestamp: new Date().toISOString(),
    status: 'ok',
    version: APP_VERSION,
    environment: NODE_ENV,
    uptime: process.uptime(),
    services: {
      database: { status: 'unknown', lastChecked: new Date().toISOString() },
      redis: { status: 'unknown', lastChecked: new Date().toISOString() },
      strapi: { status: 'unknown', lastChecked: new Date().toISOString() },
      filesystem: { status: 'unknown', lastChecked: new Date().toISOString() },
    },
    system: {
      memory: {
        used: process.memoryUsage().heapUsed,
        total: process.memoryUsage().heapTotal,
        percentage: Math.round((process.memoryUsage().heapUsed / process.memoryUsage().heapTotal) * 100),
      },
      nodejs: {
        version: process.version,
        platform: process.platform,
        arch: process.arch,
      },
    },
  };

  // Database health check
  const dbStartTime = Date.now();
  try {
    await Promise.race([
      prisma.$queryRaw`SELECT 1 as health_check`,
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Database timeout')), HEALTH_CHECK_TIMEOUT)
      )
    ]);
    checks.services.database = {
      status: 'healthy',
      responseTime: Date.now() - dbStartTime,
      lastChecked: new Date().toISOString(),
    };
  } catch (error) {
    checks.services.database = {
      status: 'unhealthy',
      responseTime: Date.now() - dbStartTime,
      error: error instanceof Error ? error.message : 'Unknown database error',
      lastChecked: new Date().toISOString(),
    };
  }

  // Redis health check
  const redisStartTime = Date.now();
  try {
    const redis = createClient({
      url: process.env.REDIS_URL || 'redis://redis:6379',
      socket: { connectTimeout: HEALTH_CHECK_TIMEOUT }
    });
    
    await Promise.race([
      (async () => {
        await redis.connect();
        const pong = await redis.ping();
        await redis.disconnect();
        return pong;
      })(),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Redis timeout')), HEALTH_CHECK_TIMEOUT)
      )
    ]);
    
    checks.services.redis = {
      status: 'healthy',
      responseTime: Date.now() - redisStartTime,
      lastChecked: new Date().toISOString(),
    };
  } catch (error) {
    checks.services.redis = {
      status: 'unhealthy',
      responseTime: Date.now() - redisStartTime,
      error: error instanceof Error ? error.message : 'Unknown Redis error',
      lastChecked: new Date().toISOString(),
    };
  }

  // Strapi health check
  const strapiStartTime = Date.now();
  try {
    const strapiUrl = process.env.STRAPI_URL || 'http://cms:1337';
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), HEALTH_CHECK_TIMEOUT);
    
    const response = await fetch(`${strapiUrl}/health`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
    
    if (response.ok) {
      checks.services.strapi = {
        status: 'healthy',
        responseTime: Date.now() - strapiStartTime,
        lastChecked: new Date().toISOString(),
      };
    } else {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    checks.services.strapi = {
      status: 'unhealthy',
      responseTime: Date.now() - strapiStartTime,
      error: error instanceof Error ? error.message : 'Unknown Strapi error',
      lastChecked: new Date().toISOString(),
    };
  }

  // Filesystem health check
  const fsStartTime = Date.now();
  try {
    const fs = await import('fs/promises');
    const testFile = '/tmp/health-check.txt';
    const testData = Date.now().toString();
    
    await fs.writeFile(testFile, testData);
    const readData = await fs.readFile(testFile, 'utf8');
    await fs.unlink(testFile);
    
    if (readData === testData) {
      checks.services.filesystem = {
        status: 'healthy',
        responseTime: Date.now() - fsStartTime,
        lastChecked: new Date().toISOString(),
      };
    } else {
      throw new Error('Filesystem read/write mismatch');
    }
  } catch (error) {
    checks.services.filesystem = {
      status: 'unhealthy',
      responseTime: Date.now() - fsStartTime,
      error: error instanceof Error ? error.message : 'Unknown filesystem error',
      lastChecked: new Date().toISOString(),
    };
  }

  // Determine overall status
  const serviceStatuses = Object.values(checks.services);
  const unhealthyCount = serviceStatuses.filter(s => s.status === 'unhealthy').length;
  const totalServices = serviceStatuses.length;

  if (unhealthyCount === 0) {
    checks.status = 'ok';
  } else if (unhealthyCount < totalServices / 2) {
    checks.status = 'degraded';
  } else {
    checks.status = 'unhealthy';
  }

  // Set appropriate HTTP status code
  const statusCode = checks.status === 'unhealthy' ? 503 : 200;

  // Add response headers for monitoring
  const response = NextResponse.json(checks, { status: statusCode });
  response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  response.headers.set('X-Health-Check-Duration', `${Date.now() - startTime}ms`);
  response.headers.set('X-Health-Status', checks.status);

  return response;
}
