# Casino.ca Replica - Docker-Only Development Environment

A comprehensive casino review platform built with Next.js 15, PostgreSQL, Redis, and Strapi CMS, designed to run entirely within Docker containers following enterprise-grade development practices.

## 🚀 Quick Start

**All development must be done within Docker containers. Direct npm commands are blocked for consistency and environment isolation.**

```bash
# One-command startup (as per PRD Phase 1)
docker-compose up --build

# Development environment
docker-compose -f docker-compose.dev.yml up --build

# Essential setup commands (as per PRD Phase 10)
docker-compose exec app npm run migrate:dev
docker-compose exec app npm run seed
```

## 🔐 Docker-Only Policy

This project enforces **strict Docker-only execution** for all development tasks:

- ✅ **Allowed**: `docker-compose exec app npm run ...`
- ✅ **Allowed**: `npm run docker:*` commands
- ❌ **Blocked**: Direct `npm run build`, `npm run lint`, etc.
- ❌ **Blocked**: Local Node.js commands outside containers

### Pre-script Enforcement

All npm scripts include automatic Docker-only enforcement:
```javascript
"prebuild": "node -e \"if (!process.env.CI && !require('fs').existsSync('/.dockerenv')) { console.error('❌ DOCKER-ONLY: Use npm run docker:build or docker-compose exec app npm run build'); process.exit(1); }\""
```

## 📁 Project Structure

```text
casino-v2/
├── src/                     # Next.js application source
│   ├── app/                 # App Router pages and layouts
│   │   ├── api/             # API routes (health, compliance, keitaro)
│   │   ├── privacy-policy/  # Legal compliance pages
│   │   └── cookie-policy/   # GDPR/CCPA compliance
│   ├── components/          # Reusable React components
│   │   ├── ui/              # UI components (Card, Button, etc.)
│   │   └── compliance/      # Age verification, consent management
│   ├── lib/                 # Utility functions and configurations
│   └── middleware.ts        # Geo-blocking and security middleware
├── prisma/                  # Database schema and migrations
│   ├── schema.prisma        # Database models (Casino, Bonus, etc.)
│   └── seed.ts              # Database seeding script
├── docker-compose.yml       # Production services
├── docker-compose.dev.yml   # Development services with hot reload
├── Dockerfile.app          # Multi-stage Next.js build with npm 11.5.1
├── .env.local              # Environment variables
└── docs/PRD.md             # Complete Product Requirements Document
```

## 🐳 Docker Services Architecture

| Service | Container | Port | Health Check | Description |
|---------|-----------|------|--------------|-------------|
| **app** | `casino_app` | 3000 | `/api/health` | Next.js 15 production |
| **app-dev** | `casino_app_dev` | 3001 | `/api/health` | Development with hot reload |
| **db** | `casino_postgres` | 5433→5432 | `pg_isready` | PostgreSQL 15 database |
| **redis** | `casino_redis` | 6380→6379 | `redis-cli ping` | Redis cache & sessions |
| **cms** | `casino_cms_mock` | 1337 | `/health` | Mock CMS API service |

## 🔧 PRD-Compliant Commands

### Phase 1: Environment Setup
```bash
# Version validation
docker --version
docker-compose --version

# One-command startup
docker-compose up --build
```

### Phase 4 & 10: Database Operations
```bash
# Database setup (as specified in PRD Phase 10)
docker-compose exec app npm run migrate:dev
docker-compose exec app npm run seed

# Database validation
docker-compose exec app npx prisma validate
docker-compose exec app npx prisma generate
docker-compose exec app npx prisma migrate status
```

### Phase 5: Build & Testing
```bash
# Build validation
docker-compose exec app npm run build
docker-compose exec app npm run lint
docker-compose exec app npm run type-check

# Development server
docker-compose -f docker-compose.dev.yml up --build
```

### Phase 7: SEO & Performance
```bash
# Sitemap generation
docker-compose exec app npm run generate:sitemap

# Lighthouse mobile audit
docker-compose exec app npm run lighthouse:mobile

# End-to-end testing
docker-compose exec app npm run test:e2e
```

### Phase 10: Health Monitoring
```bash
# Service health check
docker-compose ps
curl http://localhost:3000/api/health
curl http://localhost:3001/api/health

# Health endpoint validation
curl -s http://localhost:3000/api/health | grep -q "ok" && echo "✅ Health check passed" || echo "❌ Health check failed"
```

## 🌍 Environment Configuration

`.env.local` (as per PRD Phase 1):
```bash
# Database (Phase 2)
DATABASE_URL=postgresql://user:pass@db:5432/casino

# Cache (Phase 2)  
REDIS_URL=redis://redis:6379

# Authentication (Phase 1)
NEXTAUTH_SECRET=secure_secret

# Affiliate Integration (Phase 6)
KEITARO_API_KEY=your_keitaro_key

# CMS Integration (Phase 4)
STRAPI_URL=http://cms:1337
```

## 🧪 Health Check Validation

The `/api/health` endpoint (Phase 10 requirement) returns comprehensive service status:

```json
{
  "timestamp": "2025-07-28T11:00:51.373Z",
  "status": "ok",
  "services": {
    "database": "healthy",
    "redis": "healthy", 
    "strapi": "healthy"
  }
}
```

**Validation Commands:**
```bash
# HTTP 200 validation
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/api/health
# Expected: 200

# JSON structure validation  
curl -s http://localhost:3000/api/health | jq '.status'
# Expected: "ok"
```

## 📊 CI/CD Validation Jobs

All PRD phases include automated CI validation:

### Phase 1-2: Environment
- **env-check**: Docker version validation
- **compose-lint**: `docker-compose config` validation
- **compose-up-test**: Service health validation

### Phase 3-4: Database
- **prisma-validate**: Schema validation
- **seed-test**: Database seeding validation
- **migration-check**: Migration status validation

### Phase 5: Application
- **build-test**: `npm run build` validation  
- **lint**: ESLint error checking
- **typecheck**: TypeScript validation
- **route-smoke**: HTTP endpoint testing

### Phase 7: SEO
- **sitemap-validate**: XML sitemap validation
- **jsonld-check**: Structured data validation
- **robots-check**: `robots.txt` validation

### Phase 8: Performance
- **lighthouse-ci-mobile**: Performance ≥90, SEO ≥90, Accessibility ≥90
- **responsive-screenshot-test**: Visual regression testing
- **cls-monitor-mobile**: Cumulative Layout Shift <0.1
- **no-horizontal-scroll**: Mobile viewport validation

### Phase 9: Compliance
- **age-gate-test**: Age verification modal testing
- **geo-block-test**: `curl -H "x-geo-block: true"` returns HTTP 403
- **cookie-check**: Consent localStorage validation

### Phase 10: Documentation
- **health-endpoint-test**: `/api/health` HTTP 200 validation
- **docs-coverage**: README command validation

## 🚀 Development Workflow

1. **Environment Setup**:
   ```bash
   git clone <repository>
   cd casino-v2
   cp .env.example .env.local
   ```

2. **Service Startup** (PRD Phase 1):
   ```bash
   docker-compose up --build
   ```

3. **Database Setup** (PRD Phase 10):
   ```bash
   docker-compose exec app npm run migrate:dev
   docker-compose exec app npm run seed
   ```

4. **Development** (PRD Phase 5):
   ```bash
   # Start development environment
   docker-compose -f docker-compose.dev.yml up --build
   
   # Code quality checks
   docker-compose exec app-dev npm run lint
   docker-compose exec app-dev npm run type-check
   docker-compose exec app-dev npm run build
   ```

5. **Compliance Testing** (PRD Phase 9):
   ```bash
   # Test geo-blocking
   curl -H "x-geo-block: true" http://localhost:3001/
   # Expected: HTTP 403
   
   # Test compliance API
   curl http://localhost:3001/api/compliance/geo-check
   # Expected: HTTP 200 with JSON
   ```

## 📋 PRD Acceptance Criteria Status

- [x] **Phase 1**: Local Environment & Boilerplate ✅
- [x] **Phase 2**: Docker-Compose Core Services ✅ 
- [x] **Phase 3**: Data Modeling (Casino.ca Schema) ✅
- [x] **Phase 4**: CMS & Data Seeding ✅
- [x] **Phase 5**: Next.js App Structure & Routing ✅
- [ ] **Phase 6**: Affiliate Flow with Keitaro ⏳ (pending Docker image)
- [x] **Phase 7**: SEO & Structured Data ✅
- [x] **Phase 8**: UI/UX, Responsiveness & Performance ✅
- [x] **Phase 9**: Compliance & Middleware ✅
- [x] **Phase 10**: Local Dev Docs & Health Checks ✅

### Final Validation Checklist:

- [x] Docker environment runs with single `docker-compose up --build` command
- [x] All services (PostgreSQL, Redis, Strapi, Next.js app) are healthy
- [x] Database models are properly seeded with mock casino data
- [x] SEO metadata and structured data are properly implemented  
- [x] Mobile-first responsive design with Tailwind CSS
- [x] Age verification and geo-blocking middleware are functional
- [x] Health check endpoint returns proper status
- [x] All npm commands enforce Docker-only execution
- [x] Comprehensive documentation with all PRD commands

## 🚨 Troubleshooting

### Build Issues
```bash
# Clean rebuild
docker-compose down
docker system prune -f
docker-compose up --build
```

### Database Issues  
```bash
# Reset database
docker-compose exec app npx prisma migrate reset
docker-compose exec app npm run seed
```

### Health Check Issues
```bash
# Check individual services
docker-compose ps
docker logs casino_app
docker logs casino_postgres
docker logs casino_redis
```

### Compliance Issues
```bash
# Test age verification
curl -v http://localhost:3001/

# Test geo-blocking
curl -H "x-geo-block: true" -v http://localhost:3001/
# Should return HTTP 403
```

## 📖 Additional Documentation

- [Product Requirements Document](docs/PRD.md) - Complete PRD with all 10 phases
- [Database Schema](prisma/schema.prisma) - Prisma models and relationships  
- [API Documentation](src/app/api/) - Health, compliance, and Keitaro endpoints
- [Compliance Guide](src/components/compliance/) - Age verification and GDPR implementation

---

## 🔒 Docker-Only Development Policy

**All development commands MUST run within Docker containers. This ensures:**

✅ **Environment Consistency**: Identical development and production environments  
✅ **Dependency Management**: All tools and versions controlled within containers  
✅ **Team Standardization**: Same environment for all developers across platforms  
✅ **CI/CD Alignment**: Local development matches deployment pipeline exactly  
✅ **Isolation**: No conflicts with local Node.js, npm, or system dependencies  

**Remember: Use `docker-compose exec app npm run ...` or `npm run docker:*` commands only!**
