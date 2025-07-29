import { Metadata } from 'next';
import { ServerStructuredData } from '@/components/StructuredData';
import { getCategoryListStructuredData, getBreadcrumbStructuredData } from '@/lib/structured-data';
import { CategoryCard } from '@/components/category/CategoryCard';

export const metadata: Metadata = {
  title: 'Casino Game Categories - Slots, Table Games, Live Dealer & More',
  description: 'Explore casino game categories including slots, table games, live dealer, progressive jackpots, and specialty games from top Canadian casinos.',
  keywords: [
    'casino game categories',
    'slots games',
    'table games',
    'live dealer',
    'progressive jackpots',
    'casino games canada'
  ],
  openGraph: {
    title: 'Casino Game Categories - Find Your Perfect Game',
    description: 'Discover thousands of casino games organized by category. Find slots, blackjack, roulette, and more.',
    type: 'website',
  },
};

// Mock data - In real app, this would come from CMS/database
const categoriesData = [
  {
    id: 1,
    name: 'Slots',
    slug: 'slots',
    description: 'The most popular casino games with thousands of themes, features, and progressive jackpots.',
    gameCount: 2847,
    subcategories: ['Video Slots', 'Classic Slots', 'Progressive Jackpots', 'Megaways', '3D Slots'],
    topGames: ['Book of Dead', 'Starburst', 'Gonzo\'s Quest', 'Mega Moolah', 'Dead or Alive 2'],
    image: '/images/categories/slots.webp',
    icon: '🎰',
    popularityRank: 1,
    featured: true,
    rtp: '96.2%',
    volatility: 'Medium',
    providers: ['NetEnt', 'Microgaming', 'Pragmatic Play', 'Play\'n GO', 'Big Time Gaming']
  },
  {
    id: 2,
    name: 'Table Games',
    slug: 'table-games',
    description: 'Classic casino table games including blackjack, roulette, baccarat, and poker variations.',
    gameCount: 387,
    subcategories: ['Blackjack', 'Roulette', 'Baccarat', 'Poker', 'Craps'],
    topGames: ['European Blackjack', 'French Roulette', 'Baccarat Pro', 'Caribbean Stud Poker', 'Craps'],
    image: '/images/categories/table-games.webp',
    icon: '🃏',
    popularityRank: 2,
    featured: true,
    rtp: '99.1%',
    volatility: 'Low',
    providers: ['Evolution Gaming', 'NetEnt', 'Microgaming', 'Playtech', 'Pragmatic Play']
  },
  {
    id: 3,
    name: 'Live Dealer',
    slug: 'live-dealer',
    description: 'Real-time casino games with professional dealers streamed in high definition.',
    gameCount: 156,
    subcategories: ['Live Blackjack', 'Live Roulette', 'Live Baccarat', 'Live Poker', 'Game Shows'],
    topGames: ['Lightning Roulette', 'Live Blackjack', 'Dream Catcher', 'Monopoly Live', 'Crazy Time'],
    image: '/images/categories/live-dealer.webp',
    icon: '📹',
    popularityRank: 3,
    featured: true,
    rtp: '98.8%',
    volatility: 'Low',
    providers: ['Evolution Gaming', 'Pragmatic Play Live', 'NetEnt Live', 'Playtech Live', 'Ezugi']
  },
  {
    id: 4,
    name: 'Progressive Jackpots',
    slug: 'progressive-jackpots',
    description: 'Life-changing jackpot games with prizes that grow until won.',
    gameCount: 89,
    subcategories: ['Mega Jackpots', 'Daily Jackpots', 'Local Jackpots', 'Network Jackpots'],
    topGames: ['Mega Moolah', 'Major Millions', 'King Cashalot', 'Treasure Nile', 'LotsALoot'],
    image: '/images/categories/jackpots.webp',
    icon: '💰',
    popularityRank: 4,
    featured: true,
    rtp: '88.1%',
    volatility: 'High',
    providers: ['Microgaming', 'NetEnt', 'Playtech', 'Red Tiger', 'Blueprint Gaming']
  },
  {
    id: 5,
    name: 'Video Poker',
    slug: 'video-poker',
    description: 'Skill-based poker games with some of the best odds in the casino.',
    gameCount: 67,
    subcategories: ['Jacks or Better', 'Deuces Wild', 'Joker Poker', 'Aces and Faces'],
    topGames: ['Jacks or Better', 'Deuces Wild', 'Joker Poker', 'Aces and Eights', 'Bonus Poker'],
    image: '/images/categories/video-poker.webp',
    icon: '🎯',
    popularityRank: 5,
    featured: false,
    rtp: '99.5%',
    volatility: 'Low',
    providers: ['NetEnt', 'Microgaming', 'Playtech', 'Play\'n GO', 'Habanero']
  },
  {
    id: 6,
    name: 'Specialty Games',
    slug: 'specialty-games',
    description: 'Unique casino games including bingo, keno, scratch cards, and arcade-style games.',
    gameCount: 234,
    subcategories: ['Bingo', 'Keno', 'Scratch Cards', 'Arcade Games', 'Virtual Sports'],
    topGames: ['Keno', 'Scratch Ahoy', 'Bingo Bonanza', 'Virtual Horse Racing', 'Penalty Shootout'],
    image: '/images/categories/specialty.webp',
    icon: '🎲',
    popularityRank: 6,
    featured: false,
    rtp: '92.8%',
    volatility: 'Medium',
    providers: ['Microgaming', 'NetEnt', 'Playtech', 'Pragmatic Play', 'Hacksaw Gaming']
  }
];

const breadcrumbs = [
  { name: 'Home', url: 'https://casino.ca' },
  { name: 'Categories', url: 'https://casino.ca/categories' }
];

const structuredData = [
  getCategoryListStructuredData(categoriesData),
  getBreadcrumbStructuredData(breadcrumbs)
];

export default function CategoriesPage() {
  const featuredCategories = categoriesData.filter(category => category.featured);
  const regularCategories = categoriesData.filter(category => !category.featured);
  const totalGames = categoriesData.reduce((sum, category) => sum + category.gameCount, 0);

  return (
    <>
      <ServerStructuredData data={structuredData} />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-700 text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Casino Game Categories
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-6">
                Discover thousands of games organized by category - from classic slots to live dealer experiences
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">{totalGames.toLocaleString()}+</div>
                  <div className="text-sm text-blue-200">Total Games</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">{categoriesData.length}</div>
                  <div className="text-sm text-blue-200">Categories</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-blue-200">Game Providers</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-blue-200">Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Featured Categories */}
          {featuredCategories.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                🔥 Popular Categories
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {featuredCategories.map((category) => (
                  <CategoryCard key={category.id} category={category} featured />
                ))}
              </div>
            </section>
          )}

          {/* All Categories */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              All Game Categories ({categoriesData.length})
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {regularCategories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </section>
        </div>

        {/* Category Information Section */}
        <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Game Categories Explained
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    <strong>Slots:</strong> Spin the reels for instant wins
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    <strong>Table Games:</strong> Classic casino strategy games
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    <strong>Live Dealer:</strong> Real dealers, real-time action
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    <strong>Progressives:</strong> Million-dollar jackpot games
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Choosing the Right Games
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li><strong>RTP:</strong> Look for games with 96%+ return to player</li>
                  <li><strong>Volatility:</strong> Low = frequent wins, High = bigger payouts</li>
                  <li><strong>Features:</strong> Bonus rounds, free spins, multipliers</li>
                  <li><strong>Themes:</strong> Find games that match your interests</li>
                  <li><strong>Betting Range:</strong> Choose games within your budget</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Pro Gaming Tips
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• Set a budget before you start playing</li>
                  <li>• Try free demos before betting real money</li>
                  <li>• Learn basic strategy for table games</li>
                  <li>• Take advantage of casino bonuses</li>
                  <li>• Play games with the highest RTP rates</li>
                  <li>• Know when to stop - gambling should be fun!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
