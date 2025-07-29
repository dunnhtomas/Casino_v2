// SEO Utilities for Casino.ca
// Phase 7: Advanced SEO and Meta Tag Management

import { Metadata } from 'next';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  image?: string;
  imageAlt?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export class SEOManager {
  private baseUrl: string;
  private siteName: string;
  private defaultImage: string;

  constructor(
    baseUrl = 'https://casino.ca',
    siteName = 'Casino.ca',
    defaultImage = '/og-image.jpg'
  ) {
    this.baseUrl = baseUrl;
    this.siteName = siteName;
    this.defaultImage = defaultImage;
  }

  generateMetadata(config: SEOConfig): Metadata {
    const {
      title,
      description,
      keywords = [],
      canonical,
      noindex = false,
      nofollow = false,
      image = this.defaultImage,
      imageAlt = title,
      publishedTime,
      modifiedTime,
      author,
      section,
      tags = [],
    } = config;

    const metadata: Metadata = {
      title: {
        default: title,
        template: `%s | ${this.siteName}`,
      },
      description,
      keywords: keywords.length > 0 ? keywords : undefined,
      authors: author ? [{ name: author }] : undefined,
      creator: this.siteName,
      publisher: this.siteName,
      formatDetection: {
        email: false,
        address: false,
        telephone: false,
      },
      robots: {
        index: !noindex,
        follow: !nofollow,
        googleBot: {
          index: !noindex,
          follow: !nofollow,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      openGraph: {
        type: section === 'article' ? 'article' : 'website',
        locale: 'en_CA',
        url: canonical || this.baseUrl,
        title,
        description,
        siteName: this.siteName,
        images: [
          {
            url: image.startsWith('http') ? image : `${this.baseUrl}${image}`,
            width: 1200,
            height: 630,
            alt: imageAlt,
          },
        ],
        publishedTime,
        modifiedTime,
        authors: author ? [author] : undefined,
        section,
        tags,
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [image.startsWith('http') ? image : `${this.baseUrl}${image}`],
      },
      alternates: canonical
        ? {
            canonical: canonical.startsWith('http') ? canonical : `${this.baseUrl}${canonical}`,
          }
        : undefined,
    };

    return metadata;
  }

  generateCasinoMetadata(casino: {
    name: string;
    description?: string;
    slug: string;
    rating: number;
    reviewCount: number;
    logoUrl?: string;
    metaTitle?: string;
    metaDescription?: string;
  }): Metadata {
    const title = casino.metaTitle || `${casino.name} Review - Rating ${casino.rating}/5 | ${this.siteName}`;
    const description = casino.metaDescription || 
      `Expert review of ${casino.name} casino. Rating: ${casino.rating}/5 based on ${casino.reviewCount} reviews. ${casino.description || 'Comprehensive analysis of games, bonuses, and safety.'}`;

    return this.generateMetadata({
      title,
      description,
      keywords: [
        casino.name.toLowerCase(),
        'casino review',
        'online casino',
        'canada casino',
        `${casino.name.toLowerCase()} bonus`,
        `${casino.name.toLowerCase()} games`,
      ],
      canonical: `/casinos/${casino.slug}`,
      image: casino.logoUrl || this.defaultImage,
      imageAlt: `${casino.name} Casino Logo and Review`,
      section: 'casino',
      tags: ['casino', 'review', 'gambling', 'canada'],
    });
  }

  generateBonusMetadata(bonus: {
    title: string;
    description?: string;
    slug: string;
    bonusType: string;
    amount: string;
    casino?: { name: string };
    metaTitle?: string;
    metaDescription?: string;
  }): Metadata {
    const casinoName = bonus.casino?.name || 'Casino';
    const title = bonus.metaTitle || `${bonus.title} - ${bonus.amount} ${bonus.bonusType} Bonus | ${this.siteName}`;
    const description = bonus.metaDescription || 
      `${bonus.title} at ${casinoName}. Get ${bonus.amount} ${bonus.bonusType.toLowerCase()} bonus. ${bonus.description || 'Terms and conditions apply.'}`;

    return this.generateMetadata({
      title,
      description,
      keywords: [
        `${bonus.bonusType.toLowerCase()} bonus`,
        'casino bonus',
        'canada bonus',
        casinoName.toLowerCase(),
        'free spins',
        'welcome bonus',
      ],
      canonical: `/bonuses/${bonus.slug}`,
      section: 'bonus',
      tags: ['bonus', 'casino', 'promotion', bonus.bonusType.toLowerCase()],
    });
  }

  generateReviewMetadata(review: {
    title: string;
    content: string;
    slug: string;
    rating: number;
    author: string;
    casino?: { name: string };
    publishedAt?: Date;
    updatedAt?: Date;
    metaTitle?: string;
    metaDescription?: string;
  }): Metadata {
    const casinoName = review.casino?.name || 'Casino';
    const title = review.metaTitle || `${review.title} | ${this.siteName}`;
    const description = review.metaDescription || 
      `${review.content.substring(0, 150)}... Expert review by ${review.author}. Rating: ${review.rating}/5.`;

    return this.generateMetadata({
      title,
      description,
      keywords: [
        `${casinoName.toLowerCase()} review`,
        'casino review',
        'expert review',
        'canada casino',
        review.author.toLowerCase(),
      ],
      canonical: `/reviews/${review.slug}`,
      author: review.author,
      publishedTime: review.publishedAt?.toISOString(),
      modifiedTime: review.updatedAt?.toISOString(),
      section: 'article',
      tags: ['review', casinoName.toLowerCase(), 'casino', 'gambling'],
    });
  }

  generateCategoryMetadata(category: {
    name: string;
    description?: string;
    slug: string;
    metaTitle?: string;
    metaDescription?: string;
  }): Metadata {
    const title = category.metaTitle || `${category.name} Casinos in Canada | ${this.siteName}`;
    const description = category.metaDescription || 
      `Best ${category.name.toLowerCase()} casinos in Canada. ${category.description || `Expert reviews and ratings for ${category.name.toLowerCase()} gaming sites.`}`;

    return this.generateMetadata({
      title,
      description,
      keywords: [
        `${category.name.toLowerCase()} casinos`,
        'canada casino',
        `${category.name.toLowerCase()} games`,
        'online casino',
        'casino category',
      ],
      canonical: `/categories/${category.slug}`,
      section: 'category',
      tags: ['category', category.name.toLowerCase(), 'casino', 'games'],
    });
  }

  generateBreadcrumbList(breadcrumbs: BreadcrumbItem[]): string {
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url.startsWith('http') ? crumb.url : `${this.baseUrl}${crumb.url}`,
      })),
    });
  }

  // Generate meta tags for voice search optimization
  generateVoiceSearchTags(entity: { voiceSearchTags?: string[] }): string[] {
    const baseTags = [
      'what is the best casino in canada',
      'how to choose online casino',
      'safe casino sites canada',
      'casino bonus canada',
    ];

    return [...baseTags, ...(entity.voiceSearchTags || [])];
  }

  // Generate hreflang tags for internationalization
  generateHreflangTags(path: string): Record<string, string> {
    return {
      'en-CA': `${this.baseUrl}${path}`,
      'fr-CA': `${this.baseUrl}/fr${path}`,
      'x-default': `${this.baseUrl}${path}`,
    };
  }
}

// Default SEO manager instance
export const seoManager = new SEOManager();
