# PRD: Casino.ca Replica on Local Docker (2025 Edition)

This PRD ensures that the development team implements and validates every step via automated CI checks. Each phase includes tasks for implementation and corresponding CI jobs to **enforce zero errors** before merging.

---

## Phase 1: Local Environment & Boilerplate

**Implementation Tasks:**

1. Clone & branch the `casino-replica` repository.
2. Install Docker Desktop (v4.x+) with Docker Compose V2.
3. Create `.env.local` with the following variables:

   ```dotenv
   DATABASE_URL=postgresql://user:pass@db:5432/casino
   REDIS_URL=redis://redis:6379
   NEXTAUTH_SECRET=secure_secret
   KEITARO_API_KEY=your_keitaro_key
   ```

4. Update `README.md` with a one-command startup:

   ```bash
   docker-compose up --build
   ```

**CI Validation Jobs (GitHub Actions):**

* **env-check:** Run `docker --version` and `docker-compose --version` via a CI step; fail if versions are missing or error out.
* **env-file-lint:** Validate `.env.local` keys against a schema file; fail on missing or extra keys.
* **readme-test:** Execute the README startup command in a clean runner; fail on any error.

---

## Phase 2: Docker-Compose Core Services

**Implementation Tasks:**

1. Define `docker-compose.yml` services for:

   * **db**: `postgres:15-alpine` (volume: `db_data`)
   * **redis**: `redis:7-alpine` (volume: `redis_data`)
   * **cms**: `strapi/strapi:5-alpine` (volume: `cms_data`)
   * **keitaro**: `postaffiliate/keitaro:latest`
   * **app**: Build from `Dockerfile.app`
2. Configure a single Docker network and named volumes.
3. Optimize with multi-stage builds and pinned image digests.

**CI Validation Jobs:**

* **compose-lint:** Run `docker-compose config` and fail on YAML errors.
* **compose-up-test:** Bring up services (`docker-compose up -d`) in CI, wait for healthchecks, then `docker-compose ps`; fail if any service is unhealthy or restarts.

---

## Phase 3: Data Modeling (Casino.ca Schema)

**Implementation Tasks:**

1. In Strapi v5, define content types:

   * Casino, Bonus, Category, Review, FAQ (include voice-search metadata fields).
2. Mirror these models in `prisma/schema.prisma`, including an `AffiliateClick` model.

**CI Validation Jobs:**

* **strapi-model-tests:** Use Strapi's test runner (or a lightweight script) to create & retrieve each content type via REST or GraphQL; fail on any error.
* **prisma-validate:** Run `prisma validate` and `prisma generate`; fail on schema violations or generation errors.

---

## Phase 4: CMS & Data Seeding

**Implementation Tasks:**

1. Mount the `/cms` directory into the Strapi service.
2. Create a seeding script (`seed.ts`) that uses Strapi CLI or its REST API to import top-10 mock casino entries and categories.
3. In the `app` container, run `npx prisma migrate dev --name init` and execute `npx prisma db seed`.

**CI Validation Jobs:**

* **seed-test:** Run the seeding script against a fresh DB; then query Postgres via Prisma or psql to confirm expected rows; fail on mismatch.
* **migration-check:** After migrations, run `prisma migrate status` and fail if drift or unapplied migrations exist.

---

## Phase 5: Next.js App Structure & Routing

**Implementation Tasks:**

1. Use Next.js 15.2 App Router:

   * Create routes: `/casinos/[slug]/page.tsx`, `/bonuses/[slug]/page.tsx`, `/categories/[slug]/page.tsx`, `/reviews/[slug]/page.tsx`.
2. Implement Route Handlers for API endpoints: `/api/keitaro/redirect.ts`, `/api/health.ts`.
3. Configure ISR for review and bonus pages to revalidate every hour.

**CI Validation Jobs:**

* **build-test:** Run `next build`; fail on any build error.
* **lint:** Execute `npm run lint`; fail on lint errors.
* **typecheck:** Run `npm run type-check`; fail on any TypeScript errors.
* **route-smoke:** Use a lightweight HTTP client in CI to GET each route and assert HTTP 200 and a non-empty HTML body.

---

## Phase 6: Affiliate Flow with Keitaro

**Implementation Tasks:**

1. Configure the Keitaro service with DB and Redis connection.
2. Define campaigns via Keitaro dashboard or provisioning API.
3. Add a Next.js middleware (`middleware.ts`) to rewrite `/go/:campaignId` URLs to the Keitaro redirect endpoint.

**CI Validation Jobs:**

* **keitaro-api-test:** In CI, simulate a click by invoking `/go/testCampaign`; assert a 302 redirect to `https://your-keitaro-domain/click/testCampaign`.
* **postback-test:** Mock a postback to a test endpoint; verify the affiliate-click record is created via Prisma query; fail on missing record.

---

## Phase 7: SEO & Structured Data

**Implementation Tasks:**

1. Use Next.js Metadata API to inject dynamic `<title>`, `<meta>` and Open Graph tags.
2. Embed JSON-LD for Casino, Bonus, BreadcrumbList and FAQ within page templates.
3. Add a `generate:sitemap` script in `package.json` to emit `public/sitemap.xml`.
4. Include a static `public/robots.txt` reflecting casino.ca's crawler rules.

**CI Validation Jobs:**

* **sitemap-validate:** Run `npm run generate:sitemap`, then validate `public/sitemap.xml` with an XML linter; fail on errors.
* **jsonld-check:** Scan built HTML in CI for `<script type="application/ld+json">` blocks and run a JSON validator; fail on invalid JSON.
* **robots-check:** GET `/robots.txt` and assert content matches expected patterns; fail on mismatch.

---

## Phase 8: UI/UX, Responsiveness & Performance

**Implementation Tasks:**

1. **Mobile‑First Tailwind Configuration**: Set up Tailwind CSS with a mobile‑first approach, defining breakpoints (sm, md, lg, xl) that mirror casino.ca's responsive design.
2. **Fluid Container Queries**: Leverage Tailwind's container and `@media` queries to enable fluid layouts across devices.
3. **Responsive Components**: Build core UI components (`Card`, `RatingStars`, `ComparisonTable`, `FAQAccordion`) with flexible layouts, ensuring:

   * Single‑column stacks on small screens
   * Multi‑column grids on larger viewports
4. **CSS Grid & Flexbox**: Use CSS Grid for page layouts and Flexbox for component-level alignment to adapt dynamically to viewport changes.
5. **Image Optimization**: Continue using `next/image` for AVIF/WebP support, with `sizes` and `priority` attributes tuned for mobile performance.
6. **Accessibility & Usability**: Ensure ARIA roles, keyboard navigation, and sufficient color contrast for mobile screens (WCAG AA).

**CI Validation Jobs:**

* **lighthouse-ci-mobile**: Run Lighthouse CI in mobile emulation mode with thresholds: Performance ≥ 90, SEO ≥ 90, Accessibility ≥ 90; fail if below.
* **responsive-screenshot-test**: Use Playwright or Percy to capture screenshots at key viewports (320×568, 375×812, 768×1024, 1024×1366); detect visual regressions; fail on any discrepancy.
* **cls-monitor-mobile**: Measure Cumulative Layout Shift on mobile viewports using Lighthouse Audit API; fail if CLS > 0.1.
* **no-horizontal-scroll**: In CI, verify via Playwright that no page at mobile viewport causes horizontal overflow (CSS overflow-x hidden); fail on any scrollbar.

---

## Phase 9: Compliance & Middleware

**Implementation Tasks:**

1. Build an age-verification modal that blocks access until consent and sets a cookie.
2. Implement `geoBlockMiddleware` in Next.js to return HTTP 403 based on a request header or IP lookup.
3. Add a GDPR/CCPA consent banner that stores consent in `localStorage`.

**CI Validation Jobs:**

* **age-gate-test:** With Playwright, attempt to access a content page without consent; assert modal appears; simulate consent and assert content loads.
* **geo-block-test:** Send a request with header `x-geo-block: true` and assert HTTP 403; test without header returns 200.
* **cookie-check:** Verify the consent cookie/localStorage key exists after consent flow; fail on absence.

---

## Phase 10: Local Dev Docs & Health Checks

**Implementation Tasks:**

1. Update `README.md` with:

   ```bash
   docker-compose up --build
   docker-compose exec app npm run migrate:dev
   docker-compose exec app npm run seed
   ```

2. Implement a health-check endpoint at `/api/health.ts` returning `{ status: 'ok' }`.

**CI Validation Jobs:**

* **health-endpoint-test:** Use `curl` or HTTP client in CI to GET `/api/health` and assert HTTP 200 with valid JSON.
* **docs-coverage:** Validate that all commands in `README.md` exist in `package.json` scripts; fail if a mismatch is detected.

---

## Acceptance Criteria

* [ ] All 10 phases completed with passing CI validation jobs
* [ ] Docker environment runs with single `docker-compose up --build` command
* [ ] All services (PostgreSQL, Redis, Strapi, Keitaro, Next.js app) are healthy
* [ ] Database models are properly seeded with mock casino data
* [ ] Affiliate tracking through Keitaro is functional
* [ ] SEO metadata and structured data are properly implemented
* [ ] Mobile-first responsive design passes Lighthouse audits (≥90 scores)
* [ ] Age verification and geo-blocking middleware are functional
* [ ] Health check endpoint returns proper status
* [ ] All CI jobs pass before any merge to `main`

## Test Commands

```bash
# Environment setup validation
docker --version
docker-compose --version

# Service health check
docker-compose up -d
docker-compose ps
curl http://localhost:3000/api/health

# Build and test validation
npm ci
npm run lint
npm run type-check
npm run build
npm test

# Database operations
npx prisma validate
npx prisma generate
npx prisma migrate status
npx prisma db seed

# Performance and accessibility
npm run lighthouse:mobile
npm run test:e2e
npm run generate:sitemap
```

---

**Execution:** Merges to `main` are gated by these CI jobs; no phase can be merged until all its validation jobs pass, ensuring the dev team truly implements and verifies every requirement before moving forward.
