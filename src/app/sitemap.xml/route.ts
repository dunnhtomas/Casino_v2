import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://casino.ca';
    const currentDate = new Date().toISOString().split('T')[0];

    const urls = [
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
      const [casinos, bonuses, reviews, categories] = await Promise.all([
        prisma.casino.findMany({
          select: { slug: true, updatedAt: true },
        }),
        prisma.bonus.findMany({
          select: { slug: true, updatedAt: true },
        }),
        prisma.review.findMany({
          select: { slug: true, updatedAt: true },
          where: { status: 'PUBLISHED' },
        }),
        prisma.category.findMany({
          select: { slug: true, updatedAt: true },
        }),
      ]);

      // Add dynamic pages
      casinos.forEach((casino: { slug: string; updatedAt: Date }) => {
        urls.push({
          loc: `${baseUrl}/casinos/${casino.slug}`,
          lastmod: casino.updatedAt.toISOString().split('T')[0],
          changefreq: 'weekly',
          priority: 0.8,
        });
      });

      bonuses.forEach((bonus: { slug: string; updatedAt: Date }) => {
        urls.push({
          loc: `${baseUrl}/bonuses/${bonus.slug}`,
          lastmod: bonus.updatedAt.toISOString().split('T')[0],
          changefreq: 'daily',
          priority: 0.7,
        });
      });

      reviews.forEach((review: { slug: string; updatedAt: Date }) => {
        urls.push({
          loc: `${baseUrl}/reviews/${review.slug}`,
          lastmod: review.updatedAt.toISOString().split('T')[0],
          changefreq: 'monthly',
          priority: 0.6,
        });
      });

      categories.forEach((category: { slug: string; updatedAt: Date }) => {
        urls.push({
          loc: `${baseUrl}/categories/${category.slug}`,
          lastmod: category.updatedAt.toISOString().split('T')[0],
          changefreq: 'weekly',
          priority: 0.5,
        });
      });

    } catch (dbError) {
      console.warn('Database not available for sitemap generation:', dbError);
      // Continue with static pages only
    }

    // Generate XML sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return new NextResponse(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });

  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new NextResponse('Error generating sitemap', { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
