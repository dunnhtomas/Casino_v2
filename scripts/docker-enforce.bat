@echo off
REM Docker-Only Enforcement Script for Windows
REM This script ensures all npm commands run strictly within Docker containers

REM Check if we're running inside a Docker container
if exist "/.dockerenv" (
    echo ✅ Running inside Docker container
    exit /b 0
)

REM Check if we're in CI environment (allow CI to run directly)
if "%CI%"=="true" (
    echo ⚠️  CI environment detected - allowing direct execution
    exit /b 0
)
if "%GITHUB_ACTIONS%"=="true" (
    echo ⚠️  CI environment detected - allowing direct execution
    exit /b 0
)

REM If we reach here, we're not in Docker and not in CI
echo ❌ DOCKER-ONLY ENFORCEMENT: npm commands must run within Docker containers
echo.
echo Use these Docker commands instead:
echo.
echo   npm run docker:build      → Build the app in Docker
echo   npm run docker:lint       → Run linting in Docker
echo   npm run docker:test       → Run tests in Docker
echo   npm run docker:type-check → Run TypeScript checks in Docker
echo   npm run docker:dev        → Start development server in Docker
echo.
echo For database operations:
echo   npm run docker:migrate    → Run database migrations in Docker
echo   npm run docker:seed       → Seed database in Docker
echo.
echo Or run commands directly:
echo   docker-compose exec app npm run lint
echo   docker-compose exec app npm run build
echo   docker-compose exec app npm run test
echo.
exit /b 1
