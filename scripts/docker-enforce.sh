#!/bin/bash

# Docker-Only Enforcement Script
# This script ensures all npm commands run strictly within Docker containers

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if we're running inside a Docker container
if [ -f /.dockerenv ]; then
    echo -e "${GREEN}✅ Running inside Docker container${NC}"
    exit 0
fi

# Check if we're in CI environment (allow CI to run directly)
if [ "$CI" = "true" ] || [ "$GITHUB_ACTIONS" = "true" ]; then
    echo -e "${YELLOW}⚠️  CI environment detected - allowing direct execution${NC}"
    exit 0
fi

# If we reach here, we're not in Docker and not in CI
echo -e "${RED}❌ DOCKER-ONLY ENFORCEMENT: npm commands must run within Docker containers${NC}"
echo -e "${YELLOW}Use these Docker commands instead:${NC}"
echo ""
echo -e "  ${GREEN}npm run docker:build${NC}      → Build the app in Docker"
echo -e "  ${GREEN}npm run docker:lint${NC}       → Run linting in Docker"
echo -e "  ${GREEN}npm run docker:test${NC}       → Run tests in Docker"
echo -e "  ${GREEN}npm run docker:type-check${NC} → Run TypeScript checks in Docker"
echo -e "  ${GREEN}npm run docker:dev${NC}        → Start development server in Docker"
echo ""
echo -e "${YELLOW}For database operations:${NC}"
echo -e "  ${GREEN}npm run docker:migrate${NC}    → Run database migrations in Docker"
echo -e "  ${GREEN}npm run docker:seed${NC}       → Seed database in Docker"
echo ""
echo -e "${YELLOW}Or run commands directly:${NC}"
echo -e "  ${GREEN}docker-compose exec app npm run lint${NC}"
echo -e "  ${GREEN}docker-compose exec app npm run build${NC}"
echo -e "  ${GREEN}docker-compose exec app npm run test${NC}"
echo ""
exit 1
