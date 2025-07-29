import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

// Jackpot data types
interface Jackpot {
  id: string;
  type: 'progressive' | 'fixed' | 'daily' | 'hourly';
  name: string;
  slug: string;
  description: string;
  currentAmount: number;
  lastWon?: Date;
  lastWinner?: string;
  games: JackpotGame[];
  rules: string;
  history: JackpotWin[];
  networkWide: boolean;
  seedAmount: number;
  maxAmount?: number;
  resetTime?: string;
}

interface JackpotGame {
  id: string;
  name: string;
  provider: string;
  contribution: number; // percentage
  minBet: number;
}

interface JackpotWin {
  id: string;
  winner: string;
  amount: number;
  date: Date;
  game: string;
}

// Mock jackpot data
const jackpots: Record<string, Jackpot[]> = {
  progressive: [
    {
      id: '1',
      type: 'progressive',
      name: 'Mega Millions Progressive',
      slug: 'progressive',
      description: 'Our biggest progressive jackpot that grows with every spin across our entire network.',
      currentAmount: 2847593.45,
      lastWon: new Date('2024-01-10'),
      lastWinner: 'Lucky Player from Toronto',
      networkWide: true,
      seedAmount: 100000,
      games: [
        { id: '1', name: 'Mega Moolah', provider: 'Microgaming', contribution: 1.5, minBet: 0.25 },
        { id: '2', name: 'Major Millions', provider: 'Microgaming', contribution: 1.2, minBet: 3.00 },
        { id: '3', name: 'King Cashalot', provider: 'Microgaming', contribution: 1.0, minBet: 0.05 },
      ],
      rules: 'Progressive jackpot is triggered randomly during gameplay. All qualifying bets contribute to the jackpot pool. Maximum win rules apply.',
      history: [
        { id: '1', winner: 'Player from Vancouver', amount: 1245789.32, date: new Date('2023-12-15'), game: 'Mega Moolah' },
        { id: '2', winner: 'Player from Montreal', amount: 987654.21, date: new Date('2023-11-22'), game: 'Major Millions' },
        { id: '3', winner: 'Player from Calgary', amount: 756432.10, date: new Date('2023-10-08'), game: 'Mega Moolah' },
      ]
    }
  ],
  fixed: [
    {
      id: '2',
      type: 'fixed',
      name: 'Fixed Fortune Jackpot',
      slug: 'fixed',
      description: 'Guaranteed fixed jackpot amounts that never change - what you see is what you win.',
      currentAmount: 50000,
      networkWide: false,
      seedAmount: 50000,
      maxAmount: 50000,
      games: [
        { id: '4', name: 'Lucky Sevens', provider: 'NetEnt', contribution: 0, minBet: 0.10 },
        { id: '5', name: 'Golden Fruits', provider: 'Pragmatic Play', contribution: 0, minBet: 0.20 },
        { id: '6', name: 'Diamond Strike', provider: 'Red Tiger', contribution: 0, minBet: 0.25 },
      ],
      rules: 'Fixed jackpots have predetermined amounts that do not change. Trigger conditions vary by game.',
      history: [
        { id: '4', winner: 'Player from Ottawa', amount: 50000, date: new Date('2024-01-20'), game: 'Lucky Sevens' },
        { id: '5', winner: 'Player from Edmonton', amount: 50000, date: new Date('2024-01-18'), game: 'Golden Fruits' },
        { id: '6', winner: 'Player from Halifax', amount: 50000, date: new Date('2024-01-15'), game: 'Diamond Strike' },
      ]
    }
  ],
  daily: [
    {
      id: '3',
      type: 'daily',
      name: 'Daily Drop Jackpot',
      slug: 'daily',
      description: 'Guaranteed to drop every day before midnight! The longer it goes, the higher it grows.',
      currentAmount: 12547.89,
      networkWide: true,
      seedAmount: 1000,
      maxAmount: 25000,
      resetTime: '23:59',
      lastWon: new Date('2024-01-28'),
      lastWinner: 'Daily Winner from Winnipeg',
      games: [
        { id: '7', name: 'Daily Deluxe', provider: 'Evolution', contribution: 2.0, minBet: 0.50 },
        { id: '8', name: 'Midnight Madness', provider: 'Pragmatic Play', contribution: 1.8, minBet: 1.00 },
        { id: '9', name: 'Daily Dozen', provider: 'Play\'n GO', contribution: 1.5, minBet: 0.25 },
      ],
      rules: 'Daily jackpots must drop before midnight EST. If not won, the full amount is awarded to a random qualifying player at 23:59.',
      history: [
        { id: '7', winner: 'Player from Victoria', amount: 18234.56, date: new Date('2024-01-28'), game: 'Daily Deluxe' },
        { id: '8', winner: 'Player from Saskatoon', amount: 15678.90, date: new Date('2024-01-27'), game: 'Midnight Madness' },
        { id: '9', winner: 'Player from Quebec City', amount: 22456.78, date: new Date('2024-01-26'), game: 'Daily Dozen' },
      ]
    }
  ],
  hourly: [
    {
      id: '4',
      type: 'hourly',
      name: 'Rapid Fire Hourly',
      slug: 'hourly',
      description: 'Fast-paced jackpots that drop every hour on the hour. Quick wins, frequent payouts.',
      currentAmount: 1247.56,
      networkWide: false,
      seedAmount: 100,
      maxAmount: 5000,
      resetTime: 'Every hour at :00',
      lastWon: new Date(Date.now() - 45 * 60 * 1000), // 45 minutes ago
      lastWinner: 'Speed Winner from London, ON',
      games: [
        { id: '10', name: 'Quick Strike', provider: 'Red Tiger', contribution: 3.0, minBet: 0.10 },
        { id: '11', name: 'Rapid Reels', provider: 'Yggdrasil', contribution: 2.5, minBet: 0.20 },
        { id: '12', name: 'Hourly Heroes', provider: 'Thunderkick', contribution: 2.0, minBet: 0.25 },
      ],
      rules: 'Hourly jackpots drop every hour at the top of the hour. If not won by a player, it\'s awarded randomly.',
      history: [
        { id: '10', winner: 'Player from Thunder Bay', amount: 3456.78, date: new Date(Date.now() - 1.5 * 60 * 60 * 1000), game: 'Quick Strike' },
        { id: '11', winner: 'Player from Kingston', amount: 2789.45, date: new Date(Date.now() - 2.5 * 60 * 60 * 1000), game: 'Rapid Reels' },
        { id: '12', winner: 'Player from Sudbury', amount: 4123.67, date: new Date(Date.now() - 3.5 * 60 * 60 * 1000), game: 'Hourly Heroes' },
      ]
    }
  ]
};

interface JackpotPageProps {
  params: Promise<{ type: string }>;
}

export async function generateMetadata({ params }: JackpotPageProps): Promise<Metadata> {
  const { type } = await params;
  const typeJackpots = jackpots[type as keyof typeof jackpots];
  
  if (!typeJackpots || typeJackpots.length === 0) {
    return {
      title: 'Jackpot Type Not Found | Casino.ca',
      description: 'The requested jackpot type could not be found.'
    };
  }
  
  const jackpot = typeJackpots[0];
  const typeDisplayName = type.charAt(0).toUpperCase() + type.slice(1);
  
  return {
    title: `${typeDisplayName} Jackpots | Current: $${jackpot.currentAmount.toLocaleString()} | Casino.ca`,
    description: `${jackpot.description} Current ${type} jackpot: $${jackpot.currentAmount.toLocaleString()}. Join thousands of players competing for life-changing prizes.`,
    keywords: `${type} jackpot, casino jackpot, online jackpot, progressive slots, jackpot games, big wins`,
    openGraph: {
      title: `${typeDisplayName} Jackpots - $${jackpot.currentAmount.toLocaleString()}`,
      description: jackpot.description,
      type: 'website',
      images: [{
        url: `/images/jackpots/${type}-jackpot.jpg`,
        width: 1200,
        height: 630,
        alt: `${typeDisplayName} Jackpot`
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${typeDisplayName} Jackpots - $${jackpot.currentAmount.toLocaleString()}`,
      description: jackpot.description,
      images: [`/images/jackpots/${type}-jackpot.jpg`],
    },
    alternates: {
      canonical: `/jackpots/${type}`,
    },
  };
}

export default async function JackpotTypePage({ params }: JackpotPageProps) {
  const { type } = await params;
  const typeJackpots = jackpots[type as keyof typeof jackpots];
  
  if (!typeJackpots || typeJackpots.length === 0) {
    notFound();
  }
  
  const jackpot = typeJackpots[0];
  const typeDisplayName = type.charAt(0).toUpperCase() + type.slice(1);
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 2,
    }).format(amount);
  };
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-CA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };
  
  const getTimeUntilReset = () => {
    if (type === 'hourly') {
      const now = new Date();
      const nextHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1, 0, 0);
      const msUntilReset = nextHour.getTime() - now.getTime();
      const minutesUntilReset = Math.floor(msUntilReset / (1000 * 60));
      return `${minutesUntilReset} minutes`;
    }
    
    if (type === 'daily') {
      const now = new Date();
      const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
      const msUntilReset = tomorrow.getTime() - now.getTime();
      const hoursUntilReset = Math.floor(msUntilReset / (1000 * 60 * 60));
      const minutesUntilReset = Math.floor((msUntilReset % (1000 * 60 * 60)) / (1000 * 60));
      return `${hoursUntilReset}h ${minutesUntilReset}m`;
    }
    
    return null;
  };
  
  const getJackpotIcon = (type: string) => {
    switch (type) {
      case 'progressive':
        return '🎰';
      case 'fixed':
        return '💎';
      case 'daily':
        return '📅';
      case 'hourly':
        return '⏰';
      default:
        return '🎲';
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Jackpot Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-6xl">{getJackpotIcon(type)}</span>
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-2">
                {typeDisplayName} Jackpots
              </h1>
              <p className="text-xl text-gray-600">
                {jackpot.description}
              </p>
            </div>
          </div>
        </div>
        
        {/* Current Jackpot Amount */}
        <div className="mb-8">
          <Card className="p-8 text-center bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Current {typeDisplayName} Jackpot</h2>
              <div className="text-6xl font-bold font-mono">
                {formatCurrency(jackpot.currentAmount)}
              </div>
              {getTimeUntilReset() && (
                <div className="text-lg">
                  <span className="bg-white/20 px-4 py-2 rounded-full">
                    Drops in: {getTimeUntilReset()}
                  </span>
                </div>
              )}
              {jackpot.lastWon && (
                <p className="text-yellow-100">
                  Last won {formatDate(jackpot.lastWon)} by {jackpot.lastWinner}
                </p>
              )}
            </div>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Qualifying Games */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Qualifying Games</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {jackpot.games.map((game) => (
                  <div key={game.id} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{game.name}</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p><strong>Provider:</strong> {game.provider}</p>
                      <p><strong>Min Bet:</strong> {formatCurrency(game.minBet)}</p>
                      {game.contribution > 0 && (
                        <p><strong>Contribution:</strong> {game.contribution}% per bet</p>
                      )}
                    </div>
                    <Button className="w-full mt-3" size="sm">
                      Play Now
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Rules & Information */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Jackpot Rules</h3>
                  <p className="text-gray-700">{jackpot.rules}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      {formatCurrency(jackpot.seedAmount)}
                    </div>
                    <div className="text-sm text-gray-600">Seed Amount</div>
                  </div>
                  
                  {jackpot.maxAmount && (
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        {formatCurrency(jackpot.maxAmount)}
                      </div>
                      <div className="text-sm text-gray-600">Maximum Amount</div>
                    </div>
                  )}
                  
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-2">
                      {jackpot.networkWide ? 'Network' : 'Local'}
                    </div>
                    <div className="text-sm text-gray-600">Jackpot Type</div>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Recent Winners */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Winners</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Winner</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Amount</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Game</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jackpot.history.slice(0, 10).map((win) => (
                      <tr key={win.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-900">
                          {win.winner}
                        </td>
                        <td className="py-3 px-4 font-bold text-green-600">
                          {formatCurrency(win.amount)}
                        </td>
                        <td className="py-3 px-4 text-gray-700">
                          {win.game}
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          {formatDate(win.date)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Jackpot Stats</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Type</span>
                  <span className="font-semibold capitalize">{type}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Network Wide</span>
                  <span className="font-semibold">{jackpot.networkWide ? 'Yes' : 'No'}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Qualifying Games</span>
                  <span className="font-semibold">{jackpot.games.length}</span>
                </div>
                
                {jackpot.resetTime && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Reset Time</span>
                    <span className="font-semibold">{jackpot.resetTime}</span>
                  </div>
                )}
              </div>
            </Card>
            
            {/* Other Jackpot Types */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Other Jackpots</h3>
              
              <div className="space-y-3">
                {Object.entries(jackpots)
                  .filter(([key]) => key !== type)
                  .map(([key, jackpotList]) => {
                    const otherJackpot = jackpotList[0];
                    return (
                      <div key={key} className="border-b border-gray-100 pb-3 last:border-b-0">
                        <h4 className="font-medium text-gray-900 mb-1">
                          <a href={`/jackpots/${key}`} className="hover:text-blue-600 capitalize">
                            {key} Jackpot
                          </a>
                        </h4>
                        <p className="text-lg font-bold text-green-600">
                          {formatCurrency(otherJackpot.currentAmount)}
                        </p>
                        <p className="text-sm text-gray-600">
                          {otherJackpot.games.length} qualifying games
                        </p>
                      </div>
                    );
                  })
                }
              </div>
              
              <Button variant="outline" className="w-full mt-4">
                View All Jackpots
              </Button>
            </Card>
            
            {/* Play Now CTA */}
            <Card className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to Win?</h3>
              <p className="mb-4">Start playing qualifying games now and you could be our next big winner!</p>
              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                Start Playing
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for build optimization
export async function generateStaticParams() {
  return Object.keys(jackpots).map((type) => ({
    type,
  }));
}
