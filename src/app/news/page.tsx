import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { getBreadcrumbStructuredData, getHomePageStructuredData } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Casino News & Blog | Casino.ca',
  description: 'Latest casino news, game reviews, industry insights, and gambling tips for Canadian players. Stay updated with the casino world.',
  keywords: 'casino news, gambling news, online casino updates, game reviews, casino blog, Canadian gambling',
  openGraph: {
    title: 'Latest Casino News & Insights',
    description: 'Stay informed with the latest casino news, game reviews, and industry insights.',
    type: 'website',
  },
};

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: 'News' | 'Reviews' | 'Tips' | 'Industry';
  author: string;
  publishedAt: string;
  readTime: number;
  tags: string[];
  featured: boolean;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Ontario Introduces New Online Casino Regulations for 2025',
    slug: 'ontario-new-casino-regulations-2025',
    excerpt: 'The Ontario government announces comprehensive updates to online casino regulations, focusing on player protection and responsible gambling measures.',
    content: 'Full article content would go here...',
    category: 'News',
    author: 'Sarah Mitchell',
    publishedAt: '2025-01-20',
    readTime: 5,
    tags: ['Ontario', 'Regulation', 'Player Protection'],
    featured: true,
    image: '/images/blog/ontario-regulations.webp'
  },
  {
    id: '2',
    title: 'Top 10 Slot Games to Play in January 2025',
    slug: 'top-10-slot-games-january-2025',
    excerpt: 'Discover the hottest new slot releases and classic favorites that Canadian players are loving this month.',
    content: 'Full article content would go here...',
    category: 'Reviews',
    author: 'Mike Chen',
    publishedAt: '2025-01-18',
    readTime: 8,
    tags: ['Slots', 'Game Reviews', 'NetEnt', 'Microgaming'],
    featured: true,
    image: '/images/blog/top-slots-january.webp'
  },
  {
    id: '3',
    title: 'Responsible Gambling: Setting Limits and Staying Safe',
    slug: 'responsible-gambling-limits-safety',
    excerpt: 'Essential tips for maintaining healthy gambling habits and recognizing when to seek help.',
    content: 'Full article content would go here...',
    category: 'Tips',
    author: 'Emma Thompson',
    publishedAt: '2025-01-15',
    readTime: 6,
    tags: ['Responsible Gambling', 'Safety', 'Player Tips'],
    featured: false,
    image: '/images/blog/responsible-gambling.webp'
  },
  {
    id: '4',
    title: 'Evolution Gaming Launches New Live Casino Studio in Vancouver',
    slug: 'evolution-gaming-vancouver-studio',
    excerpt: 'The live casino giant expands its North American presence with a state-of-the-art studio serving Canadian players.',
    content: 'Full article content would go here...',
    category: 'Industry',
    author: 'David Rodriguez',
    publishedAt: '2025-01-12',
    readTime: 4,
    tags: ['Evolution Gaming', 'Live Casino', 'Canada', 'Expansion'],
    featured: false,
    image: '/images/blog/evolution-vancouver.webp'
  },
  {
    id: '5',
    title: 'Cryptocurrency Casinos: The Future of Online Gambling?',
    slug: 'cryptocurrency-casinos-future-gambling',
    excerpt: 'Exploring the rise of Bitcoin casinos and how cryptocurrency is changing the online gambling landscape.',
    content: 'Full article content would go here...',
    category: 'Industry',
    author: 'Alex Foster',
    publishedAt: '2025-01-10',
    readTime: 7,
    tags: ['Cryptocurrency', 'Bitcoin', 'Blockchain', 'Innovation'],
    featured: false,
    image: '/images/blog/crypto-casinos.webp'
  },
  {
    id: '6',
    title: 'Blackjack Strategy Guide: Basic to Advanced Tips',
    slug: 'blackjack-strategy-guide-tips',
    excerpt: 'Master the art of blackjack with our comprehensive strategy guide covering basic strategy, card counting, and bankroll management.',
    content: 'Full article content would go here...',
    category: 'Tips',
    author: 'Jennifer Walsh',
    publishedAt: '2025-01-08',
    readTime: 12,
    tags: ['Blackjack', 'Strategy', 'Card Games', 'Tips'],
    featured: false,
    image: '/images/blog/blackjack-strategy.webp'
  }
];

const categories = ['All', 'News', 'Reviews', 'Tips', 'Industry'] as const;

const breadcrumbs = [
  { name: 'Home', url: 'https://casino.ca' },
  { name: 'News & Blog', url: 'https://casino.ca/news' }
];

const structuredData = [
  getHomePageStructuredData(),
  getBreadcrumbStructuredData(breadcrumbs)
];

export default function NewsPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Casino News & Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay informed with the latest casino news, game reviews, industry insights, 
              and expert tips for Canadian players.
            </p>
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Featured Stories
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <div key={post.id}>
                    <Card padding="none" hover>
                      <>
                        <div className="relative">
                          <div className="w-full h-48 bg-gradient-to-br from-casino-red to-casino-gold rounded-t-xl flex items-center justify-center">
                            <span className="text-white text-6xl font-bold opacity-20">
                              {post.category.charAt(0)}
                            </span>
                          </div>
                          <div className="absolute top-4 left-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                              post.category === 'News' ? 'bg-red-500' :
                              post.category === 'Reviews' ? 'bg-blue-500' :
                              post.category === 'Tips' ? 'bg-green-500' :
                              'bg-purple-500'
                            }`}>
                              {post.category}
                            </span>
                          </div>
                          <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-2 py-1 rounded text-sm text-gray-600 dark:text-gray-400">
                            {post.readTime} min read
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                  {post.author.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-900 dark:text-white">
                                  {post.author}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  {new Date(post.publishedAt).toLocaleDateString('en-CA', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                  })}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All'
                      ? 'bg-casino-red text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Recent Posts Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Recent Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <div key={post.id}>
                  <Card padding="none" hover>
                    <>
                      <div className="relative">
                        <div className="w-full h-32 bg-gradient-to-br from-gray-400 to-gray-600 rounded-t-xl flex items-center justify-center">
                          <span className="text-white text-4xl font-bold opacity-30">
                            {post.category.charAt(0)}
                          </span>
                        </div>
                        <div className="absolute top-2 left-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium text-white ${
                            post.category === 'News' ? 'bg-red-500' :
                            post.category === 'Reviews' ? 'bg-blue-500' :
                            post.category === 'Tips' ? 'bg-green-500' :
                            'bg-purple-500'
                          }`}>
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                          <span>{post.author}</span>
                          <span>{post.readTime} min</span>
                        </div>
                        <div className="mt-2">
                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 2).map((tag, index) => (
                              <span 
                                key={index}
                                className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mb-12">
            <Card padding="lg">
              <>
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Stay Updated
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                    Subscribe to our newsletter to receive the latest casino news, exclusive bonuses, 
                    and expert tips delivered directly to your inbox.
                  </p>
                  <div className="max-w-md mx-auto flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-casino-red"
                    />
                    <button className="px-6 py-2 bg-casino-red text-white rounded-lg hover:bg-casino-red/90 transition-colors font-medium">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
