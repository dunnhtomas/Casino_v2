import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { seoManager } from '@/lib/seo';
import { Card } from '@/components/ui/Card';

// Mock data - In real app, this would come from database/CMS
const mockNews = [
  {
    slug: 'ontario-casino-revenue-growth-2025',
    title: 'Ontario Online Casino Revenue Reaches Record High in 2025',
    category: 'Industry News',
    author: 'Jennifer Adams',
    publishDate: '2025-01-15',
    readTime: '6 minutes',
    featured: true,
    excerpt: 'Ontario&apos;s regulated online casino market has achieved unprecedented growth, with revenue increasing by 45% year-over-year in the first quarter of 2025.',
    content: [
      {
        type: 'paragraph',
        text: 'The Ontario online casino market has experienced remarkable growth since the launch of the regulated framework in April 2022. Recent data from the Alcohol and Gaming Commission of Ontario (AGCO) shows that Q1 2025 revenue has reached $1.2 billion, representing a 45% increase compared to the same period in 2024.'
      },
      {
        type: 'heading',
        text: 'Key Market Drivers'
      },
      {
        type: 'paragraph',
        text: 'Several factors have contributed to this exceptional growth, including increased player adoption, expanded game offerings from licensed operators, and enhanced marketing efforts targeting Ontario residents.'
      },
      {
        type: 'list',
        items: [
          'Growing player base with over 2.3 million registered accounts',
          'Introduction of live dealer games and game shows',
          'Improved mobile gaming experiences',
          'Competitive bonus offers and promotions',
          'Enhanced player protection measures'
        ]
      }
    ],
    tags: ['Ontario', 'revenue', 'growth', 'regulation', 'AGCO'],
    relatedArticles: [
      { slug: 'new-casino-bonuses-january-2025', title: 'Best New Casino Bonuses for January 2025' },
      { slug: 'mobile-casino-trends-2025', title: 'Mobile Casino Gaming Trends to Watch in 2025' }
    ]
  },
  {
    slug: 'evolution-gaming-new-studio-toronto',
    title: 'Evolution Gaming Opens New Live Dealer Studio in Toronto',
    category: 'Company News',
    author: 'Michael Chen',
    publishDate: '2025-01-12',
    readTime: '4 minutes',
    featured: false,
    excerpt: 'Leading live casino provider Evolution Gaming has announced the opening of its newest studio facility in Toronto, serving the growing Ontario market.',
    content: [
      {
        type: 'paragraph',
        text: 'Evolution Gaming, the world&apos;s leading provider of live dealer casino games, has officially opened its state-of-the-art studio in Toronto, marking a significant investment in the Canadian market.'
      }
    ],
    tags: ['Evolution Gaming', 'Toronto', 'live dealer', 'studio'],
    relatedArticles: []
  }
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = mockNews.find(n => n.slug === slug);
  
  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested news article could not be found.'
    };
  }

  return seoManager.generateMetadata({
    title: `${article.title} - Casino.ca News`,
    description: article.excerpt,
    keywords: article.tags,
    publishedTime: article.publishDate + 'T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
    author: article.author
  });
}

export function generateStaticParams() {
  return mockNews.map((article) => ({
    slug: article.slug,
  }));
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = mockNews.find(n => n.slug === slug);

  if (!article) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://casino.ca"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "News",
        "item": "https://casino.ca/news"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": `https://casino.ca/news/${article.slug}`
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "description": article.excerpt,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "datePublished": article.publishDate + 'T00:00:00.000Z',
    "dateModified": new Date().toISOString(),
    "publisher": {
      "@type": "Organization",
      "name": "Casino.ca",
      "logo": {
        "@type": "ImageObject",
        "url": "https://casino.ca/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://casino.ca/news/${article.slug}`
    },
    "articleSection": article.category
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-casino-red">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/news" className="hover:text-casino-red">News</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{article.title}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Article Header */}
            <Card className="mb-8">
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-casino-red text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    {article.featured && (
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {article.title}
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span>By {article.author}</span>
                    <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                    <span>{article.readTime} read</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Article Content */}
            <Card className="mb-8">
              <div className="p-6">
                <div className="prose prose-lg max-w-none">
                  {article.content.map((section, index) => {
                    switch (section.type) {
                      case 'heading':
                        return (
                          <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4 first:mt-0">
                            {section.text}
                          </h2>
                        );
                      case 'paragraph':
                        return (
                          <p key={index} className="text-gray-700 leading-relaxed mb-6">
                            {section.text}
                          </p>
                        );
                      case 'list':
                        return (
                          <ul key={index} className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                            {section.items?.map((item, itemIndex) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>
                        );
                      default:
                        return null;
                    }
                  })}

                  {/* Additional content for demonstration */}
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Market Impact</h2>
                    <p className="text-gray-700 leading-relaxed">
                      The continued growth of Ontario&apos;s regulated online casino market demonstrates 
                      the success of the province&apos;s approach to online gambling regulation. Industry 
                      experts predict this trend will continue throughout 2025, with potential for 
                      further expansion as more operators enter the market.
                    </p>
                    
                    <h2 className="text-2xl font-bold text-gray-900">Looking Ahead</h2>
                    <p className="text-gray-700 leading-relaxed">
                      As the market matures, operators are expected to focus on innovation, player 
                      experience, and responsible gambling initiatives. The AGCO continues to monitor 
                      the market closely, ensuring compliance with regulatory standards while fostering 
                      healthy competition.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Tags */}
            <Card className="mb-8">
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>

            {/* Related Articles */}
            {article.relatedArticles.length > 0 && (
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Related Articles</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {article.relatedArticles.map((relatedArticle, index) => (
                      <Link key={index} href={`/news/${relatedArticle.slug}`} className="block">
                        <div className="border border-gray-200 rounded-lg p-4 hover:border-casino-red transition-colors">
                          <h4 className="font-semibold text-gray-900 mb-2">{relatedArticle.title}</h4>
                          <span className="text-sm text-casino-red font-medium">Read Article →</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Author Info */}
            <Card className="mb-6">
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">About the Author</h3>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">
                      {article.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{article.author}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Senior Casino Industry Analyst with over 8 years of experience covering 
                      the Canadian gambling market.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Latest News */}
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Latest News</h3>
                <div className="space-y-4">
                  {mockNews
                    .filter(n => n.slug !== article.slug)
                    .slice(0, 3)
                    .map((newsItem, index) => (
                      <Link key={index} href={`/news/${newsItem.slug}`} className="block">
                        <div className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0 hover:text-casino-red transition-colors">
                          <h4 className="font-medium text-sm leading-tight mb-2">
                            {newsItem.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>{newsItem.category}</span>
                            <span>•</span>
                            <span>{new Date(newsItem.publishDate).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
