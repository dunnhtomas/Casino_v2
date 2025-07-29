import { NextRequest } from 'next/server';

/**
 * Dynamic robots.txt generation
 * Generates environment-specific robots.txt with proper crawl rules
 */
export async function GET(request: NextRequest) {
  const { origin } = new URL(request.url);
  const isProduction = process.env.NODE_ENV === 'production';
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  // Environment-specific crawl rules
  const robotsContent = `
# Casino.ca - Robots.txt
# Environment: ${process.env.NODE_ENV}
# Generated: ${new Date().toISOString()}

# Main crawlers
User-agent: *
${isProduction ? 'Allow: /' : 'Disallow: /'}
${isProduction ? '' : '# Development environment - blocking all crawlers'}

# Specific bot configurations
User-agent: Googlebot
${isProduction ? 'Allow: /' : 'Disallow: /'}
Crawl-delay: 1

User-agent: Bingbot
${isProduction ? 'Allow: /' : 'Disallow: /'}
Crawl-delay: 2

# Block aggressive crawlers
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

# Block admin and API endpoints
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /private/

# Block affiliate tracking
Disallow: /go/
Disallow: /track/
Disallow: /affiliate/

# Block temporary/test pages
Disallow: /test/
Disallow: /dev/
Disallow: /staging/

# Block search and filter pages with parameters
Disallow: /*?sort=*
Disallow: /*?filter=*
Disallow: /*?page=*
Disallow: /*?search=*

# Allow specific valuable pages
Allow: /casinos/
Allow: /games/
Allow: /bonuses/
Allow: /reviews/
Allow: /guides/
Allow: /news/
Allow: /providers/
Allow: /categories/

# Sitemap references
${isProduction ? `Sitemap: ${origin}/sitemap.xml` : '# Sitemap disabled in development'}
${isProduction ? `Sitemap: ${origin}/sitemap-casinos.xml` : ''}
${isProduction ? `Sitemap: ${origin}/sitemap-games.xml` : ''}
${isProduction ? `Sitemap: ${origin}/sitemap-bonuses.xml` : ''}
${isProduction ? `Sitemap: ${origin}/sitemap-guides.xml` : ''}
${isProduction ? `Sitemap: ${origin}/sitemap-news.xml` : ''}

# Crawl rate limiting
${isProduction ? 'Request-rate: 1/1s' : '# Request rate limiting disabled in development'}
${isProduction ? 'Visit-time: 0600-2300' : '# Visit time restrictions disabled in development'}

# Cache control
# Recommended: Check robots.txt once per day
`.trim();

  return new Response(robotsContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': isProduction 
        ? 'public, max-age=86400, s-maxage=86400' // 24 hours in production
        : 'public, max-age=60, s-maxage=60', // 1 minute in development
      'X-Robots-Tag': isProduction ? 'all' : 'noindex, nofollow',
    },
  });
}

/**
 * Robots.txt Configuration Notes:
 * 
 * 1. Environment Detection:
 *    - Production: Allow crawling with optimized rules
 *    - Development: Block all crawlers to prevent indexing
 * 
 * 2. Crawl Optimization:
 *    - Rate limiting to prevent server overload
 *    - Time-based restrictions for better performance
 *    - Bot-specific crawl delays
 * 
 * 3. SEO Strategy:
 *    - Allow valuable content pages (casinos, games, bonuses)
 *    - Block admin, API, and tracking endpoints
 *    - Block parameterized URLs to prevent duplicate content
 * 
 * 4. Sitemap Integration:
 *    - Multiple specialized sitemaps for different content types
 *    - Only enabled in production environment
 * 
 * 5. Security:
 *    - Block access to sensitive endpoints
 *    - Prevent crawling of affiliate tracking URLs
 *    - Hide development and test pages
 */
