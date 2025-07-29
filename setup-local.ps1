# Local Development Setup Script
# Run this script to prepare the project for local testing

Write-Host "🚀 Setting up Casino.ca Replica v2 for Local Development" -ForegroundColor Green

# Step 1: Install dependencies
Write-Host "`n📦 Installing dependencies..." -ForegroundColor Yellow
npm install

# Step 2: Generate Prisma client
Write-Host "`n🔧 Generating Prisma client..." -ForegroundColor Yellow
npx prisma generate

# Step 3: Start databases (optional - only if Docker is available)
Write-Host "`n🐳 Starting PostgreSQL and Redis (Docker)..." -ForegroundColor Yellow
$dockerAvailable = Get-Command docker -ErrorAction SilentlyContinue
if ($dockerAvailable) {
    docker-compose up -d db redis
    Write-Host "✅ Databases started successfully" -ForegroundColor Green
    
    # Wait for databases to be ready
    Write-Host "⏳ Waiting for databases to be ready..." -ForegroundColor Yellow
    Start-Sleep -Seconds 5
    
    # Run migrations and seed data
    Write-Host "🔄 Running database migrations..." -ForegroundColor Yellow
    $env:DATABASE_URL = "postgresql://user:pass@localhost:5433/casino"
    npx prisma migrate deploy
    
    Write-Host "🌱 Seeding database..." -ForegroundColor Yellow
    npx prisma db seed
} else {
    Write-Host "⚠️  Docker not available. Please ensure PostgreSQL and Redis are running manually." -ForegroundColor Red
    Write-Host "   PostgreSQL: postgresql://user:pass@localhost:5433/casino" -ForegroundColor Cyan
    Write-Host "   Redis: redis://localhost:6380" -ForegroundColor Cyan
}

# Step 4: Instructions
Write-Host "`n🎯 Setup Complete! Ready for local development:" -ForegroundColor Green
Write-Host "   1. Run: npm run dev" -ForegroundColor Cyan
Write-Host "   2. Visit: http://localhost:3000" -ForegroundColor Cyan
Write-Host "   3. Test homepage with 21+ sections" -ForegroundColor Cyan
Write-Host "`n📋 Available commands:" -ForegroundColor Yellow
Write-Host "   - npm run dev          Start development server" -ForegroundColor Cyan
Write-Host "   - npm run build        Build for production" -ForegroundColor Cyan
Write-Host "   - npm run type-check   Check TypeScript types" -ForegroundColor Cyan
Write-Host "   - npm run lint         Run ESLint" -ForegroundColor Cyan
Write-Host "   - npm test             Run tests" -ForegroundColor Cyan

Write-Host "`n🎰 Happy coding! The Casino.ca Replica is ready to go!" -ForegroundColor Green