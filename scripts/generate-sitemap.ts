// @ts-ignore - Node.js script with different module resolution
import { writeFileSync } from 'fs';
// @ts-ignore - Prisma client types
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

async function generateSitemap() {
  // @ts-ignore - Node.js process object
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://casino.ca';
  const currentDate = new Date().toISOString().split('T')[0];

  const urls: SitemapUrl[] = [
    // Static pages
    {
      loc: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 1.0,
    },
    {
      loc: `${baseUrl}/casinos`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/bonuses`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/reviews`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/categories`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7,
    },
  ];

  try {
    // Fetch dynamic content from database
    const casinos = await prisma.casino.findMany({
      select: { slug: true, updatedAt: true },
    });

    const bonuses = await prisma.bonus.findMany({
      select: { slug: true, updatedAt: true },
    });

    const reviews = await prisma.review.findMany({
      select: { slug: true, updatedAt: true },
      where: { status: 'PUBLISHED' },
    });

    const categories = await prisma.category.findMany({
      select: { slug: true, updatedAt: true },
    });

    // Add casino pages
    casinos.forEach((casino: { slug: string; updatedAt: Date }) => {
      urls.push({
        loc: `${baseUrl}/casinos/${casino.slug}`,
        lastmod: casino.updatedAt.toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.8,
      });
    });

    // Add bonus pages
    bonuses.forEach((bonus: { slug: string; updatedAt: Date }) => {
      urls.push({
        loc: `${baseUrl}/bonuses/${bonus.slug}`,
        lastmod: bonus.updatedAt.toISOString().split('T')[0],
        changefreq: 'daily',
        priority: 0.7,
      });
    });

    // Add review pages
    reviews.forEach((review: { slug: string; updatedAt: Date }) => {
      urls.push({
        loc: `${baseUrl}/reviews/${review.slug}`,
        lastmod: review.updatedAt.toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: 0.6,
      });
    });

    // Add category pages
    categories.forEach((category: { slug: string; updatedAt: Date }) => {
      urls.push({
        loc: `${baseUrl}/categories/${category.slug}`,
        lastmod: category.updatedAt.toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.5,
      });
    });

  } catch (error) {
    console.warn('Database not available, generating basic sitemap:', error);
    // Continue with static pages only
  }

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority ? `<priority>${url.priority}</priority>` : ''}
  </url>`).join('\n')}
</urlset>`;

  // Write sitemap to public directory
  writeFileSync('public/sitemap.xml', sitemap);
  console.log(`✅ Sitemap generated with ${urls.length} URLs`);
  
  await prisma.$disconnect();
}

generateSitemap().catch((error) => {
  console.error('Error generating sitemap:', error);
  // @ts-ignore - Node.js process object
  process.exit(1);
});
