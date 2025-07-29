import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ServerStructuredData } from '@/components/StructuredData';
import { getBreadcrumbStructuredData } from '@/lib/structured-data';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

// Mock data - In real app, this would come from CMS/database
const categoriesData = {
  'slots': {
    id: 1,
    name: 'Slots',
    slug: 'slots',
    description: 'Discover the best online slot games available at Canadian casinos',
    fullDescription: `Online slots are the most popular casino games, offering endless entertainment with themes ranging from ancient civilizations to modern adventures. Canadian players can enjoy hundreds of slot games with various features including free spins, bonus rounds, progressive jackpots, and multipliers.

Our slot selection includes classic 3-reel games, modern 5-reel video slots, and exciting multi-payline games from top providers like Microgaming, NetEnt, Playtech, and Evolution Gaming. Whether you prefer high volatility games with big win potential or low volatility slots with frequent smaller wins, you'll find the perfect game for your style.

Popular slot categories include:
- Mega jackpot slots with life-changing prizes
- Branded slots featuring popular movies and TV shows  
- Classic fruit machines for traditional gameplay
- Adventure and fantasy themed slots
- Egyptian and mythology slots
- Sports and casino-themed games`,
    gameCount: 850,
    topProviders: ['Microgaming', 'NetEnt', 'Playtech', 'Evolution Gaming', 'Pragmatic Play'],
    popularGames: [
      { name: 'Mega Moolah', provider: 'Microgaming', type: 'Progressive Jackpot' },
      { name: 'Starburst', provider: 'NetEnt', type: 'Classic Video Slot' },
      { name: 'Book of Dead', provider: 'Play\'n GO', type: 'Adventure Slot' },
      { name: 'Gonzo\'s Quest', provider: 'NetEnt', type: 'Adventure Slot' },
      { name: 'Thunderstruck II', provider: 'Microgaming', type: 'Mythology Slot' }
    ],
    features: [
      { name: 'Free Spins', description: 'Bonus rounds with free game spins' },
      { name: 'Wild Symbols', description: 'Symbols that substitute for other symbols' },
      { name: 'Scatter Symbols', description: 'Special symbols that trigger bonus features' },
      { name: 'Progressive Jackpots', description: 'Ever-growing jackpot prizes' },
      { name: 'Bonus Games', description: 'Interactive bonus rounds within slots' },
      { name: 'Multipliers', description: 'Features that multiply your winnings' }
    ],
    tips: [
      'Start with demo versions to learn game mechanics',
      'Check the RTP (Return to Player) percentage before playing',
      'Set a budget and stick to it',
      'Take advantage of casino bonuses and free spins',
      'Play progressive jackpot slots when the prize is high',
      'Understand volatility levels and choose games that match your style'
    ]
  },
  'table-games': {
    id: 2,
    name: 'Table Games',
    slug: 'table-games',
    description: 'Classic casino table games including blackjack, roulette, baccarat, and poker variants',
    fullDescription: `Table games represent the classic casino experience, combining skill, strategy, and excitement. Canadian online casinos offer a comprehensive selection of traditional table games with various betting limits to accommodate all types of players.

Our table games section features all the casino classics you'd find in land-based casinos, plus exciting variants and side bets. Whether you're a beginner learning basic strategy or an experienced player looking for high-stakes action, you'll find the perfect table game.

These games often have some of the best odds in the casino when played with optimal strategy, making them favorites among serious gamblers. Many table games also offer live dealer versions for an authentic casino atmosphere from home.`,
    gameCount: 120,
    topProviders: ['Evolution Gaming', 'Playtech', 'NetEnt', 'Microgaming', 'Pragmatic Play'],
    popularGames: [
      { name: 'Blackjack Classic', provider: 'NetEnt', type: 'Blackjack' },
      { name: 'European Roulette', provider: 'Microgaming', type: 'Roulette' },
      { name: 'Baccarat Pro', provider: 'NetEnt', type: 'Baccarat' },
      { name: 'Casino Hold\'em', provider: 'Evolution Gaming', type: 'Poker' },
      { name: 'Pai Gow Poker', provider: 'Playtech', type: 'Poker' }
    ],
    features: [
      { name: 'Multiple Variants', description: 'Different versions of classic games' },
      { name: 'Side Bets', description: 'Additional betting options for extra excitement' },
      { name: 'Strategy Charts', description: 'Built-in guides for optimal play' },
      { name: 'Auto-Play Options', description: 'Automated gameplay features' },
      { name: 'Betting Limits', description: 'Wide range of minimum and maximum bets' },
      { name: 'Game Statistics', description: 'Detailed game history and statistics' }
    ],
    tips: [
      'Learn basic strategy for blackjack and video poker',
      'Understand the house edge for each game',
      'Practice with free play versions first',
      'Manage your bankroll effectively',
      'Avoid side bets with poor odds',
      'Take advantage of favorable rules when available'
    ]
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categoriesData[slug as keyof typeof categoriesData];
  
  if (!category) {
    return { title: 'Category Not Found' };
  }

  return {
    title: `${category.name} Games - ${category.gameCount}+ Games Available | Casino.ca`,
    description: `${category.description}. Play ${category.gameCount}+ ${category.name.toLowerCase()} games from top providers. Expert reviews and recommendations.`,
    keywords: [
      `${category.name.toLowerCase()} games`,
      'online casino canada',
      'casino games',
      ...category.topProviders.map(p => p.toLowerCase())
    ],
    openGraph: {
      title: `${category.name} Games - ${category.gameCount}+ Options`,
      description: category.description,
      type: 'website',
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = categoriesData[slug as keyof typeof categoriesData];

  if (!category) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://casino.ca' },
    { name: 'Categories', url: 'https://casino.ca/categories' },
    { name: category.name, url: `https://casino.ca/categories/${category.slug}` }
  ];

  const structuredData = [
    getBreadcrumbStructuredData(breadcrumbs),
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: `${category.name} Games`,
      description: category.description,
      url: `https://casino.ca/categories/${category.slug}`,
      mainEntity: {
        '@type': 'ItemList',
        name: `${category.name} Games`,
        numberOfItems: category.gameCount,
        description: category.description
      }
    }
  ];

  return (
    <>
      <ServerStructuredData data={structuredData} />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Breadcrumbs */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Home</Link></li>
                <li><span className="text-gray-400 mx-2">/</span></li>
                <li><Link href="/categories" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Categories</Link></li>
                <li><span className="text-gray-400 mx-2">/</span></li>
                <li><span className="text-gray-900 dark:text-white font-medium">{category.name}</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Category Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{category.name} Games</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
                {category.description}
              </p>
              <div className="flex justify-center items-center gap-8 text-lg">
                <div className="bg-white/10 rounded-lg px-6 py-3">
                  <div className="text-3xl font-bold">{category.gameCount}+</div>
                  <div className="text-blue-200">Available Games</div>
                </div>
                <div className="bg-white/10 rounded-lg px-6 py-3">
                  <div className="text-3xl font-bold">{category.topProviders.length}</div>
                  <div className="text-blue-200">Top Providers</div>
                </div>
                <div className="bg-white/10 rounded-lg px-6 py-3">
                  <div className="text-3xl font-bold">{category.popularGames.length}</div>
                  <div className="text-blue-200">Featured Games</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Category Overview */}
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About {category.name}</h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  {category.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 dark:text-gray-300 mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              {/* Popular Games */}
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Popular {category.name}</h2>
                <div className="grid gap-4">
                  {category.popularGames.map((game, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{game.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{game.provider} • {game.type}</p>
                      </div>
                      <Button size="sm" variant="primary">Play Now</Button>
                    </div>
                  ))}
                </div>
              </section>

              {/* Game Features */}
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Game Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.features.map((feature, index) => (
                    <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{feature.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Playing Tips */}
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Tips for Playing {category.name}</h2>
                <div className="space-y-3">
                  {category.tips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{tip}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card padding="lg">
                <>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Category Stats</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Total Games:</span>
                      <span className="text-gray-900 dark:text-white font-medium">{category.gameCount}+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Providers:</span>
                      <span className="text-gray-900 dark:text-white font-medium">{category.topProviders.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Featured Games:</span>
                      <span className="text-gray-900 dark:text-white font-medium">{category.popularGames.length}</span>
                    </div>
                  </div>
                </>
              </Card>

              {/* Top Providers */}
              <Card padding="lg">
                <>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top Providers</h3>
                  <div className="space-y-2">
                    {category.topProviders.map((provider, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                        <span className="text-gray-700 dark:text-gray-300">{provider}</span>
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    ))}
                  </div>
                </>
              </Card>

              {/* Related Categories */}
              <Card padding="lg">
                <>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Related Categories</h3>
                  <div className="space-y-2">
                    {Object.values(categoriesData)
                      .filter(cat => cat.slug !== category.slug)
                      .map((relatedCategory) => (
                        <Link
                          key={relatedCategory.slug}
                          href={`/categories/${relatedCategory.slug}`}
                          className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                        >
                          <div className="font-medium text-gray-900 dark:text-white">{relatedCategory.name}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{relatedCategory.gameCount}+ games</div>
                        </Link>
                      ))}
                  </div>
                </>
              </Card>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-6 text-white text-center">
                <h3 className="text-lg font-bold mb-2">Start Playing Today</h3>
                <p className="text-sm text-green-100 mb-4">
                  Discover the best {category.name.toLowerCase()} at top-rated Canadian casinos
                </p>
                <Button variant="secondary" fullWidth>
                  View Top Casinos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
