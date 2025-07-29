import { NextRequest, NextResponse } from 'next/server';

// List of blocked countries/regions (ISO 3166-1 alpha-2 codes)
const BLOCKED_COUNTRIES = [
  'US', // United States
  'FR', // France  
  'AU', // Australia
  'IT', // Italy
  'ES', // Spain
  'DE', // Germany
  'NL', // Netherlands
  'BE', // Belgium
  'DK', // Denmark
  'SE', // Sweden
  'NO', // Norway
];

// Test header for blocking (for CI testing)
const GEO_BLOCK_TEST_HEADER = 'x-geo-block';

export async function GET(request: NextRequest) {
  try {
    // Check for test header first (for CI testing)
    const testBlock = request.headers.get(GEO_BLOCK_TEST_HEADER);
    if (testBlock === 'true') {
      return NextResponse.json({
        blocked: true,
        reason: 'Test geo-block header detected',
        country: 'TEST',
      });
    }

    // In a real implementation, you would use a geo-IP service
    // For now, we'll use request headers to determine country
    const country = request.headers.get('cf-ipcountry') || // Cloudflare
                   request.headers.get('x-vercel-ip-country') || // Vercel
                   request.headers.get('x-country-code') || // Generic
                   null;

    // Check if country is blocked
    const isBlocked = country && BLOCKED_COUNTRIES.includes(country.toUpperCase());

    return NextResponse.json({
      blocked: isBlocked,
      country: country,
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    console.error('Geo-check error:', error);
    
    // On error, allow access (fail open)
    return NextResponse.json({
      blocked: false,
      error: 'Geo-check service unavailable',
      timestamp: new Date().toISOString(),
    });
  }
}
