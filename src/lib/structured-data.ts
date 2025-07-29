// JSON-LD Structured Data Utilities for Casino.ca
// Phase 7: SEO & Structured Data Implementation

interface BaseStructuredData {
  '@context': 'https://schema.org';
  '@type': string;
}

interface OrganizationData extends BaseStructuredData {
  '@type': 'Organization';
  name: string;
  url: string;
  logo: string;
  description: string;
  contactPoint: {
    '@type': 'ContactPoint';
    telephone: string;
    contactType: 'customer service';
    availableLanguage: string[];
  };
  sameAs: string[];
}

interface WebsiteData extends BaseStructuredData {
  '@type': 'WebSite';
  name: string;
  url: string;
  description: string;
  potentialAction: {
    '@type': 'SearchAction';
    target: string;
    'query-input': string;
  };
}

interface CasinoReviewData extends BaseStructuredData {
  '@type': 'Review';
  itemReviewed: {
    '@type': 'Organization';
    name: string;
    url?: string;
  };
  reviewRating: {
    '@type': 'Rating';
    ratingValue: number;
    bestRating: number;
    worstRating: number;
  };
  author: {
    '@type': 'Organization';
    name: string;
  };
  datePublished: string;
  description: string;
}

interface BreadcrumbData extends BaseStructuredData {
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }>;
}

interface FAQData extends BaseStructuredData {
  '@type': 'FAQPage';
  mainEntity: Array<{
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }>;
}

export class StructuredDataGenerator {
  private baseUrl: string;

  constructor(baseUrl: string = 'https://casino.ca') {
    this.baseUrl = baseUrl;
  }

  generateOrganizationData(): OrganizationData {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Casino.ca',
      url: this.baseUrl,
      logo: `${this.baseUrl}/images/logo.png`,
      description: 'Canada\'s premier online casino review and comparison platform',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-800-CASINO',
        contactType: 'customer service',
        availableLanguage: ['English', 'French']
      },
      sameAs: [
        'https://facebook.com/casino.ca',
        'https://twitter.com/casino_ca',
        'https://instagram.com/casino.ca'
      ]
    };
  }

  generateWebsiteData(): WebsiteData {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Casino.ca',
      url: this.baseUrl,
      description: 'Find the best online casinos in Canada with expert reviews, bonuses, and ratings',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${this.baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };
  }

  generateCasinoReviewData(casino: {
    name: string;
    url?: string;
    rating: number;
    reviewText: string;
    datePublished: string;
  }): CasinoReviewData {
    return {
      '@context': 'https://schema.org',
      '@type': 'Review',
      itemReviewed: {
        '@type': 'Organization',
        name: casino.name,
        url: casino.url
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: casino.rating,
        bestRating: 5,
        worstRating: 1
      },
      author: {
        '@type': 'Organization',
        name: 'Casino.ca'
      },
      datePublished: casino.datePublished,
      description: casino.reviewText
    };
  }

  generateBreadcrumbData(breadcrumbs: Array<{ name: string; url: string }>): BreadcrumbData {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url
      }))
    };
  }

  generateFAQData(faqs: Array<{ question: string; answer: string }>): FAQData {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };
  }

  // Utility method to generate JSON-LD script tag
  generateJSONLDScript(data: BaseStructuredData | BaseStructuredData[]): string {
    const jsonData = Array.isArray(data) ? data : [data];
    return `<script type="application/ld+json">${JSON.stringify(jsonData, null, 2)}</script>`;
  }

  // Method to combine multiple structured data objects
  combineStructuredData(...data: BaseStructuredData[]): BaseStructuredData[] {
    return data;
  }
}

// Default instance for easy import
export const structuredData = new StructuredDataGenerator();

// Common structured data sets
export const getHomePageStructuredData = () => {
  const generator = new StructuredDataGenerator();
  return generator.combineStructuredData(
    generator.generateOrganizationData(),
    generator.generateWebsiteData()
  );
};

export const getCasinoPageStructuredData = (casino: {
  name: string;
  url?: string;
  rating: number;
  reviewText: string;
  datePublished: string;
}) => {
  const generator = new StructuredDataGenerator();
  return generator.combineStructuredData(
    generator.generateOrganizationData(),
    generator.generateCasinoReviewData(casino)
  );
};

export const getBonusPageStructuredData = (bonus: {
  name: string;
  description: string;
  amount: string;
  casino: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: bonus.name,
    description: bonus.description,
    offeredBy: {
      '@type': 'Organization',
      name: bonus.casino
    },
    priceSpecification: {
      '@type': 'PriceSpecification',
      price: bonus.amount.replace(/[^0-9]/g, ''),
      priceCurrency: 'CAD'
    },
    availability: 'https://schema.org/InStock',
    validThrough: '2025-12-31'
  };
};

export const getBreadcrumbStructuredData = (breadcrumbs: Array<{ name: string; url: string }>) => {
  const generator = new StructuredDataGenerator();
  return generator.generateBreadcrumbData(breadcrumbs);
};

export const getCasinoListStructuredData = (casinos: Array<{
  name: string;
  rating: number;
  slug: string;
}>) => {
  // Create an ItemList structured data for the casino listing page
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Online Casinos in Canada',
    description: 'Expert reviews and ratings of the top online casinos for Canadian players',
    numberOfItems: casinos.length,
    itemListElement: casinos.map((casino, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Organization',
        name: casino.name,
        url: `https://casino.ca/casinos/${casino.slug}`,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: casino.rating,
          bestRating: 5,
          worstRating: 1,
          ratingCount: 1
        }
      }
    }))
  };
};

export const getBonusListStructuredData = (bonuses: Array<{
  title: string;
  casino: string;
  amount: string;
  percentage: number;
  description: string;
}>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Casino Bonuses in Canada',
    description: 'Comprehensive list of the best casino bonuses and promotional offers for Canadian players',
    numberOfItems: bonuses.length,
    itemListElement: bonuses.map((bonus, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Offer',
        name: bonus.title,
        description: bonus.description,
        offeredBy: {
          '@type': 'Organization',
          name: bonus.casino
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: bonus.amount.replace('$', ''),
          priceCurrency: 'CAD'
        }
      }
    }))
  };
};

export const getCategoryListStructuredData = (categories: Array<{
  name: string;
  description: string;
  gameCount: number;
  slug: string;
}>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Casino Game Categories',
    description: 'Complete list of casino game categories including slots, table games, live dealer, and more',
    numberOfItems: categories.length,
    itemListElement: categories.map((category, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Thing',
        name: category.name,
        description: category.description,
        url: `https://casino.ca/categories/${category.slug}`,
        additionalProperty: {
          '@type': 'PropertyValue',
          name: 'gameCount',
          value: category.gameCount
        }
      }
    }))
  };
};

export const getReviewListStructuredData = (reviews: Array<{
  casino: string;
  rating: number;
  reviewCount: number;
  headline: string;
  summary: string;
  datePublished: string;
  author: string;
}>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Casino Reviews',
    description: 'Expert casino reviews and ratings from industry professionals',
    numberOfItems: reviews.length,
    itemListElement: reviews.map((review, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Review',
        name: review.headline,
        reviewBody: review.summary,
        itemReviewed: {
          '@type': 'Organization',
          name: review.casino
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: review.rating,
          bestRating: 5,
          worstRating: 1
        },
        author: {
          '@type': 'Person',
          name: review.author
        },
        datePublished: review.datePublished,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: review.rating,
          ratingCount: review.reviewCount
        }
      }
    }))
  };
};
