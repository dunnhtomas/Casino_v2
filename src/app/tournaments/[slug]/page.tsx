import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { RatingStars } from '@/components/ui/RatingStars';
import { Button } from '@/components/ui/Button';

// Tournament data type
interface Tournament {
  id: string;
  name: string;
  slug: string;
  description: string;
  type: 'slots' | 'table' | 'poker' | 'live';
  status: 'upcoming' | 'active' | 'completed';
  startDate: Date;
  endDate: Date;
  prizePool: number;
  maxParticipants?: number;
  currentParticipants: number;
  entryFee?: number;
  rules: string;
  games: string[];
  leaderboard: LeaderboardEntry[];
  terms: string;
}

interface LeaderboardEntry {
  rank: number;
  playerName: string;
  score: number;
  prize?: number;
}

// Mock tournament data
const tournaments: Tournament[] = [
  {
    id: '1',
    name: 'Mega Slots Championship',
    slug: 'mega-slots-championship',
    description: 'The biggest slots tournament of the year with massive prizes and thrilling competition.',
    type: 'slots',
    status: 'active',
    startDate: new Date('2024-01-15'),
    endDate: new Date('2024-01-22'),
    prizePool: 50000,
    maxParticipants: 1000,
    currentParticipants: 847,
    entryFee: 25,
    rules: 'Players compete by achieving the highest total winnings across qualifying slot games during the tournament period.',
    games: ['Starburst', 'Gonzo\'s Quest', 'Book of Dead', 'Sweet Bonanza'],
    leaderboard: [
      { rank: 1, playerName: 'SlotMaster2024', score: 245670, prize: 15000 },
      { rank: 2, playerName: 'SpinKing', score: 198450, prize: 8000 },
      { rank: 3, playerName: 'LuckySpinner', score: 187320, prize: 5000 },
    ],
    terms: 'Tournament open to all registered players. Minimum bet requirements apply. Prizes paid within 72 hours of tournament completion.'
  },
  {
    id: '2',
    name: 'Blackjack Masters Weekly',
    slug: 'blackjack-masters-weekly',
    description: 'Weekly blackjack tournament for table game enthusiasts.',
    type: 'table',
    status: 'upcoming',
    startDate: new Date('2024-01-29'),
    endDate: new Date('2024-02-05'),
    prizePool: 15000,
    maxParticipants: 200,
    currentParticipants: 156,
    entryFee: 50,
    rules: 'Standard blackjack rules apply. Players compete for highest total winnings over the tournament period.',
    games: ['Classic Blackjack', 'European Blackjack', 'Vegas Strip Blackjack'],
    leaderboard: [],
    terms: 'Must maintain minimum bankroll throughout tournament. Early withdrawal results in disqualification.'
  }
];

interface TournamentPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: TournamentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tournament = tournaments.find(t => t.slug === slug);
  
  if (!tournament) {
    return {
      title: 'Tournament Not Found | Casino.ca',
      description: 'The requested tournament could not be found.'
    };
  }
  
  return {
    title: `${tournament.name} | Casino Tournaments | Casino.ca`,
    description: `${tournament.description} Prize pool: $${tournament.prizePool.toLocaleString()}. Join ${tournament.currentParticipants} players competing now!`,
    keywords: `casino tournament, ${tournament.type} tournament, ${tournament.name}, online casino competition, prize pool`,
    openGraph: {
      title: tournament.name,
      description: tournament.description,
      type: 'website',
      images: [{
        url: `/images/tournaments/${tournament.slug}.jpg`,
        width: 1200,
        height: 630,
        alt: tournament.name
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: tournament.name,
      description: tournament.description,
      images: [`/images/tournaments/${tournament.slug}.jpg`],
    },
    alternates: {
      canonical: `/tournaments/${tournament.slug}`,
    },
  };
}

export default async function TournamentPage({ params }: TournamentPageProps) {
  const { slug } = await params;
  const tournament = tournaments.find(t => t.slug === slug);
  
  if (!tournament) {
    notFound();
  }
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-CA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/Toronto'
    }).format(date);
  };
  
  const getStatusColor = (status: Tournament['status']) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-100';
      case 'upcoming':
        return 'text-blue-600 bg-blue-100';
      case 'completed':
        return 'text-gray-600 bg-gray-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };
  
  const getTypeIcon = (type: Tournament['type']) => {
    switch (type) {
      case 'slots':
        return '🎰';
      case 'table':
        return '🃏';
      case 'poker':
        return '♠️';
      case 'live':
        return '🎮';
      default:
        return '🎲';
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tournament Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{getTypeIcon(tournament.type)}</span>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {tournament.name}
              </h1>
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(tournament.status)}`}>
                  {tournament.status.toUpperCase()}
                </span>
                <span className="text-gray-600 capitalize">
                  {tournament.type} Tournament
                </span>
              </div>
            </div>
          </div>
          <p className="text-xl text-gray-700 max-w-4xl">
            {tournament.description}
          </p>
        </div>
        
        {/* Tournament Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              ${tournament.prizePool.toLocaleString()}
            </div>
            <div className="text-gray-600">Total Prize Pool</div>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {tournament.currentParticipants}
              {tournament.maxParticipants && `/${tournament.maxParticipants}`}
            </div>
            <div className="text-gray-600">Participants</div>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {tournament.entryFee ? `$${tournament.entryFee}` : 'FREE'}
            </div>
            <div className="text-gray-600">Entry Fee</div>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {Math.ceil((tournament.endDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}d
            </div>
            <div className="text-gray-600">Days Remaining</div>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tournament Details */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tournament Details</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Schedule</h3>
                  <div className="text-gray-700">
                    <p><strong>Start:</strong> {formatDate(tournament.startDate)}</p>
                    <p><strong>End:</strong> {formatDate(tournament.endDate)}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Rules & Format</h3>
                  <p className="text-gray-700">{tournament.rules}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Qualifying Games</h3>
                  <div className="flex flex-wrap gap-2">
                    {tournament.games.map((game, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {game}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Terms & Conditions</h3>
                  <p className="text-gray-700 text-sm">{tournament.terms}</p>
                </div>
              </div>
            </Card>
            
            {/* Leaderboard */}
            {tournament.leaderboard.length > 0 && (
              <Card className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Leaderboard</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Rank</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Player</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Score</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Prize</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tournament.leaderboard.map((entry) => (
                        <tr key={entry.rank} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-white font-bold ${
                              entry.rank === 1 ? 'bg-yellow-500' :
                              entry.rank === 2 ? 'bg-gray-400' :
                              entry.rank === 3 ? 'bg-orange-500' : 'bg-blue-500'
                            }`}>
                              {entry.rank}
                            </span>
                          </td>
                          <td className="py-3 px-4 font-medium text-gray-900">
                            {entry.playerName}
                          </td>
                          <td className="py-3 px-4 text-gray-700">
                            {entry.score.toLocaleString()}
                          </td>
                          <td className="py-3 px-4 font-semibold text-green-600">
                            {entry.prize ? `$${entry.prize.toLocaleString()}` : 'TBD'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Registration */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tournament Registration</h3>
              
              {tournament.status === 'upcoming' && (
                <div className="space-y-4">
                  <p className="text-gray-700">Tournament starts soon! Register now to secure your spot.</p>
                  <Button className="w-full">
                    Register Now
                  </Button>
                </div>
              )}
              
              {tournament.status === 'active' && (
                <div className="space-y-4">
                  <p className="text-gray-700">Tournament is live! Join the competition now.</p>
                  <Button className="w-full">
                    Join Tournament
                  </Button>
                </div>
              )}
              
              {tournament.status === 'completed' && (
                <div className="space-y-4">
                  <p className="text-gray-700">This tournament has concluded. Check out our upcoming tournaments!</p>
                  <Button variant="outline" className="w-full">
                    View All Tournaments
                  </Button>
                </div>
              )}
            </Card>
            
            {/* Tournament Progress */}
            {tournament.maxParticipants && (
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Participation</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Registered Players</span>
                    <span>{tournament.currentParticipants} / {tournament.maxParticipants}</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${(tournament.currentParticipants / tournament.maxParticipants) * 100}%` }}
                    ></div>
                  </div>
                  
                  <p className="text-sm text-gray-600">
                    {tournament.maxParticipants - tournament.currentParticipants} spots remaining
                  </p>
                </div>
              </Card>
            )}
            
            {/* Related Tournaments */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">More Tournaments</h3>
              
              <div className="space-y-3">
                {tournaments
                  .filter(t => t.id !== tournament.id)
                  .slice(0, 3)
                  .map((related) => (
                    <div key={related.id} className="border-b border-gray-100 pb-3 last:border-b-0">
                      <h4 className="font-medium text-gray-900 mb-1">
                        <a href={`/tournaments/${related.slug}`} className="hover:text-blue-600">
                          {related.name}
                        </a>
                      </h4>
                      <p className="text-sm text-gray-600">
                        ${related.prizePool.toLocaleString()} prize pool
                      </p>
                      <span className={`inline-block px-2 py-1 rounded text-xs font-medium mt-1 ${getStatusColor(related.status)}`}>
                        {related.status}
                      </span>
                    </div>
                  ))
                }
              </div>
              
              <Button variant="outline" className="w-full mt-4">
                View All Tournaments
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
  return tournaments.map((tournament) => ({
    slug: tournament.slug,
  }));
}
