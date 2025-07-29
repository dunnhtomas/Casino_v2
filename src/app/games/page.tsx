import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { RatingStars } from '@/components/ui/RatingStars';
import { SiteHeader, SiteFooter } from '@/components/layout/SiteHeader';
import { getBreadcrumbStructuredData, getHomePageStructuredData } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Casino Games | Casino.ca',
  description: 'Explore the best casino games available to Canadian players. Slots, table games, live dealer, and more from top software providers.',
  keywords: 'casino games, slots, blackjack, roulette, live dealer, online casino games, Canada',
  openGraph: {
    title: 'Best Casino Games for Canadian Players',
    description: 'Discover the top casino games available at Canadian online casinos.',
    type: 'website',
  },
};

interface Game {
  id: string;
  name: string;
  provider: string;
  category: 'Slots' | 'Table Games' | 'Live Dealer' | 'Jackpots';
  rtp: string;
  rating: number;
  popularity: number;
  minBet: string;
  maxBet: string;
  features: string[];
  description: string;
  image: string;
}

const featuredGames: Game[] = [
  {
    id: 'mega-moolah',
    name: 'Mega Moolah',
    provider: 'Microgaming',
    category: 'Jackpots',
    rtp: '88.12%',
    rating: 4.8,
    popularity: 95,
    minBet: '$0.25',
    maxBet: '$6.25',
    features: ['Progressive Jackpot', 'Free Spins', 'Wild Symbols'],
    description: 'The legendary progressive jackpot slot that has created more millionaires than any other online slot game.',
    image: '/images/games/mega-moolah.webp'
  },
  {
    id: 'starburst',
    name: 'Starburst',
    provider: 'NetEnt',
    category: 'Slots',
    rtp: '96.09%',
    rating: 4.7,
    popularity: 92,
    minBet: '$0.10',
    maxBet: '$100',
    features: ['Expanding Wilds', 'Re-spins', 'Both Ways Pay'],
    description: 'The most popular slot game of all time, known for its simple gameplay and frequent wins.',
    image: '/images/games/starburst.webp'
  },
  {
    id: 'lightning-roulette',
    name: 'Lightning Roulette',
    provider: 'Evolution Gaming',
    category: 'Live Dealer',
    rtp: '97.30%',
    rating: 4.9,
    popularity: 88,
    minBet: '$0.20',
    maxBet: '$500',
    features: ['Live Dealer', 'Lightning Numbers', 'Multipliers up to 500x'],
    description: 'Revolutionary live roulette with random multipliers that can boost your winnings up to 500x.',
    image: '/images/games/lightning-roulette.webp'
  },
  {
    id: 'blackjack-classic',
    name: 'Blackjack Classic',
    provider: 'NetEnt',
    category: 'Table Games',
    rtp: '99.28%',
    rating: 4.6,
    popularity: 85,
    minBet: '$1',
    maxBet: '$1000',
    features: ['Classic Rules', 'Side Bets', 'Surrender Option'],
    description: 'The classic blackjack experience with optimal rules and strategy guides built-in.',
    image: '/images/games/blackjack-classic.webp'
  }
];

const gameCategories = [
  {
    id: 'slots',
    name: 'Slot Games',
    icon: '🎰',
    count: '2000+',
    description: 'From classic 3-reel slots to modern video slots with exciting bonus features',
    popular: ['Starburst', 'Book of Dead', 'Gonzo&apos;s Quest', 'Thunderstruck II'],
    providers: ['NetEnt', 'Microgaming', 'Pragmatic Play', 'Play\'n GO']
  },
  {
    id: 'table-games',
    name: 'Table Games',
    icon: '🃏',
    count: '200+',
    description: 'Classic casino table games including blackjack, roulette, baccarat, and poker',
    popular: ['European Roulette', 'Blackjack Pro', 'Baccarat Classic', 'Caribbean Poker'],
    providers: ['NetEnt', 'Playtech', 'Microgaming', 'Evolution Gaming']
  },
  {
    id: 'live-dealer',
    name: 'Live Dealer',
    icon: '🎬',
    count: '150+',
    description: 'Real dealers streaming live from professional studios for authentic casino experience',
    popular: ['Lightning Roulette', 'Live Blackjack', 'Dream Catcher', 'Crazy Time'],
    providers: ['Evolution Gaming', 'Pragmatic Play Live', 'Playtech Live', 'NetEnt Live']
  },
  {
    id: 'jackpots',
    name: 'Progressive Jackpots',
    icon: '💰',
    count: '50+',
    description: 'Life-changing progressive jackpots that grow with every bet until someone wins big',
    popular: ['Mega Moolah', 'Major Millions', 'King Cashalot', 'Treasure Nile'],
    providers: ['Microgaming', 'NetEnt', 'Playtech', 'Red Tiger']
  }
];

const gameProviderStats = [
  { name: 'NetEnt', games: 600, avgRtp: '96.8%', rating: 4.9 },
  { name: 'Microgaming', games: 800, avgRtp: '96.5%', rating: 4.8 },
  { name: 'Evolution Gaming', games: 500, avgRtp: '97.3%', rating: 4.9 },
  { name: 'Pragmatic Play', games: 450, avgRtp: '96.4%', rating: 4.7 },
  { name: 'Playtech', games: 700, avgRtp: '96.2%', rating: 4.7 },
  { name: 'Play\'n GO', games: 350, avgRtp: '96.3%', rating: 4.6 }
];

const breadcrumbs = [
  { name: 'Home', url: 'https://casino.ca' },
  { name: 'Games', url: 'https://casino.ca/games' }
];

const structuredData = [
  getHomePageStructuredData(),
  getBreadcrumbStructuredData(breadcrumbs)
];

export default function GamesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <SiteHeader />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Casino Games
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover the best casino games available to Canadian players. 
              From classic slots to live dealer games, find your perfect match.
            </p>
          </div>

          {/* Featured Games */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Games
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredGames.map((game) => (
                <div key={game.id}>
                  <Card padding="none" hover>
                    <div className="relative">
                      <div className="w-full h-32 bg-gradient-to-br from-casino-red to-casino-gold rounded-t-xl flex items-center justify-center">
                        <span className="text-white text-4xl font-bold opacity-30">
                          {game.name.charAt(0)}
                        </span>
                      </div>
                      <div className="absolute top-2 left-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium text-white ${
                          game.category === 'Slots' ? 'bg-blue-500' :
                          game.category === 'Table Games' ? 'bg-green-500' :
                          game.category === 'Live Dealer' ? 'bg-purple-500' :
                          'bg-yellow-500'
                        }`}>
                          {game.category}
                        </span>
                      </div>
                      <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 px-2 py-1 rounded text-xs text-gray-600 dark:text-gray-400">
                        {game.rtp}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {game.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        by {game.provider}
                      </p>
                      <div className="flex items-center space-x-2 mb-3">
                        <RatingStars rating={game.rating} size="sm" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {game.rating}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                        {game.description}
                      </p>
                      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                        <span>Min: {game.minBet}</span>
                        <span>Max: {game.maxBet}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {game.features.slice(0, 2).map((feature, index) => (
                          <span 
                            key={index}
                            className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Game Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Game Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gameCategories.map((category) => (
                <div key={category.id}>
                  <Card padding="lg" hover>
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl flex-shrink-0">{category.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {category.name}
                          </h3>
                          <span className="text-sm font-medium text-casino-red">
                            {category.count}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                          {category.description}
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Popular Games
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {category.popular.map((game, index) => (
                              <span 
                                key={index}
                                className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs"
                              >
                                {game}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Top Providers
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {category.providers.map((provider, index) => (
                              <span 
                                key={index}
                                className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded text-xs"
                              >
                                {provider}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Provider Statistics */}
          <div className="mb-12">
            <Card padding="lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Software Provider Overview
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 font-semibold text-gray-900 dark:text-white">Provider</th>
                      <th className="text-center py-3 font-semibold text-gray-900 dark:text-white">Games</th>
                      <th className="text-center py-3 font-semibold text-gray-900 dark:text-white">Avg RTP</th>
                      <th className="text-center py-3 font-semibold text-gray-900 dark:text-white">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gameProviderStats.map((provider, index) => (
                      <tr key={index} className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center">
                              <span className="text-sm font-bold text-gray-600 dark:text-gray-300">
                                {provider.name.charAt(0)}
                              </span>
                            </div>
                            <span className="font-medium text-gray-900 dark:text-white">
                              {provider.name}
                            </span>
                          </div>
                        </td>
                        <td className="text-center py-3 text-gray-600 dark:text-gray-400">
                          {provider.games}+
                        </td>
                        <td className="text-center py-3">
                          <span className="text-green-600 dark:text-green-400 font-medium">
                            {provider.avgRtp}
                          </span>
                        </td>
                        <td className="text-center py-3">
                          <div className="flex items-center justify-center space-x-1">
                            <RatingStars rating={provider.rating} size="sm" />
                            <span className="text-gray-600 dark:text-gray-400 text-xs">
                              {provider.rating}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Game Guide */}
          <div className="mb-12">
            <Card padding="lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                How to Choose the Right Game
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl mb-3">🎯</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Consider RTP
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Look for games with Return to Player (RTP) rates above 96% for better long-term value. 
                    Higher RTP means more money returned to players over time.
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-3">📊</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Understand Volatility
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    High volatility games offer bigger wins but less frequently. 
                    Low volatility games provide smaller, more frequent wins. Choose based on your risk preference.
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-3">💰</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Set Your Budget
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Always check minimum and maximum bet limits. 
                    Choose games that fit your bankroll and allow for extended play within your budget.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      <SiteFooter />
    </>
  );
}
