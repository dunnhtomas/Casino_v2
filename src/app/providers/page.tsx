import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { RatingStars } from '@/components/ui/RatingStars';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { getBreadcrumbStructuredData, getHomePageStructuredData } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Casino Software Providers | Casino.ca',
  description: 'Discover the top casino software providers powering Canadian online casinos. Compare Microgaming, NetEnt, Evolution Gaming, and more.',
  keywords: 'casino software providers, Microgaming, NetEnt, Evolution Gaming, Playtech, Pragmatic Play, casino games',
  openGraph: {
    title: 'Top Casino Software Providers in Canada',
    description: 'The best game developers and software companies behind Canadian online casinos.',
    type: 'website',
  },
};

interface SoftwareProvider {
  id: string;
  name: string;
  logo: string;
  rating: number;
  established: number;
  headquarters: string;
  gameCount: string;
  specialty: string[];
  popularGames: string[];
  pros: string[];
  cons: string[];
  licensedBy: string[];
  rtp: string;
  description: string;
  certifications: string[];
}

const providers: SoftwareProvider[] = [
  {
    id: 'microgaming',
    name: 'Microgaming',
    logo: '/images/providers/microgaming.webp',
    rating: 4.8,
    established: 1994,
    headquarters: 'Isle of Man',
    gameCount: '800+',
    specialty: ['Progressive Jackpots', 'Slot Games', 'Table Games'],
    popularGames: ['Mega Moolah', 'Thunderstruck II', 'Immortal Romance', 'Game of Thrones'],
    pros: [
      'Pioneer in online gaming',
      'Huge progressive jackpots',
      'Excellent game variety',
      'Mobile-optimized games'
    ],
    cons: [
      'Some games feel dated',
      'Limited live dealer games'
    ],
    licensedBy: ['UK Gambling Commission', 'Malta Gaming Authority'],
    rtp: '96.5%',
    description: 'The granddaddy of online casino software, Microgaming has been creating innovative casino games since 1994. Known for launching the first true online casino and creating the first progressive jackpot network.',
    certifications: ['eCOGRA', 'GLI', 'BMM Testlabs']
  },
  {
    id: 'netent',
    name: 'NetEnt',
    logo: '/images/providers/netent.webp',
    rating: 4.9,
    established: 1996,
    headquarters: 'Stockholm, Sweden',
    gameCount: '600+',
    specialty: ['Video Slots', 'Live Casino', 'Mobile Games'],
    popularGames: ['Starburst', 'Gonzo\'s Quest', 'Dead or Alive 2', 'Divine Fortune'],
    pros: [
      'Cutting-edge graphics',
      'Innovative gameplay features',
      'Mobile-first approach',
      'High RTP rates'
    ],
    cons: [
      'Limited table game variety',
      'Fewer progressive jackpots'
    ],
    licensedBy: ['Malta Gaming Authority', 'UK Gambling Commission', 'Gibraltar Gaming Authority'],
    rtp: '96.8%',
    description: 'NetEnt is renowned for creating visually stunning slots with innovative features. Their games are known for exceptional graphics, smooth gameplay, and player-friendly RTPs.',
    certifications: ['eCOGRA', 'GLI', 'iTech Labs']
  },
  {
    id: 'evolution-gaming',
    name: 'Evolution Gaming',
    logo: '/images/providers/evolution.webp',
    rating: 4.9,
    established: 2006,
    headquarters: 'Stockholm, Sweden',
    gameCount: '500+',
    specialty: ['Live Dealer Games', 'Game Shows', 'RNG Games'],
    popularGames: ['Lightning Roulette', 'Crazy Time', 'Dream Catcher', 'Monopoly Live'],
    pros: [
      'Industry leader in live casino',
      'Professional dealers',
      'High-quality streaming',
      'Innovative game shows'
    ],
    cons: [
      'Limited slot game portfolio',
      'Higher minimum bets'
    ],
    licensedBy: ['Malta Gaming Authority', 'UK Gambling Commission', 'Latvia Gaming Authority'],
    rtp: '97.3%',
    description: 'The undisputed leader in live dealer casino games, Evolution Gaming provides the most immersive live casino experience with professional dealers and cutting-edge technology.',
    certifications: ['eCOGRA', 'GLI', 'BMM Testlabs']
  },
  {
    id: 'playtech',
    name: 'Playtech',
    logo: '/images/providers/playtech.webp',
    rating: 4.7,
    established: 1999,
    headquarters: 'Isle of Man',
    gameCount: '700+',
    specialty: ['Branded Slots', 'Live Casino', 'Progressive Jackpots'],
    popularGames: ['Age of the Gods', 'Buffalo Blitz', 'Great Blue', 'Batman Begins'],
    pros: [
      'Extensive game library',
      'Strong progressive network',
      'Licensed branded content',
      'Comprehensive platform'
    ],
    cons: [
      'Complex game mechanics',
      'Inconsistent mobile optimization'
    ],
    licensedBy: ['Malta Gaming Authority', 'UK Gambling Commission', 'Gibraltar Gaming Authority'],
    rtp: '96.2%',
    description: 'Playtech offers a comprehensive gaming solution with a vast library of slots, table games, and live dealer options, including popular branded content from major entertainment franchises.',
    certifications: ['eCOGRA', 'GLI', 'TST']
  }
];

const faqData = [
  {
    id: 'best-provider',
    question: 'Which is the best casino software provider?',
    answer: 'There is no single "best" provider as each excels in different areas. NetEnt leads in slot innovation, Evolution Gaming dominates live casino, Microgaming offers the biggest jackpots, and Playtech provides comprehensive gaming solutions.',
  },
  {
    id: 'rtp-rates',
    question: 'What are typical RTP rates from top providers?',
    answer: 'Top providers typically offer RTP rates between 96-97%. NetEnt and Evolution Gaming tend to have higher RTPs (96.8-97.3%), while Microgaming and Playtech average around 96.2-96.5%.',
  },
  {
    id: 'mobile-compatibility',
    question: 'Are all provider games mobile-compatible?',
    answer: 'Most modern games from top providers are mobile-optimized. NetEnt and Evolution Gaming excel in mobile compatibility, while some older Microgaming titles may have limited mobile functionality.',
  },
  {
    id: 'game-fairness',
    question: 'How do I know if provider games are fair?',
    answer: 'Look for certifications from independent testing labs like eCOGRA, GLI, or iTech Labs. All reputable providers undergo regular auditing to ensure their games use certified Random Number Generators (RNG).',
  }
];

const breadcrumbs = [
  { name: 'Home', url: 'https://casino.ca' },
  { name: 'Software Providers', url: 'https://casino.ca/providers' }
];

const structuredData = [
  getHomePageStructuredData(),
  getBreadcrumbStructuredData(breadcrumbs)
];

export default function ProvidersPage() {
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
              Casino Software Providers
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover the top software providers powering Canadian online casinos. 
              Compare game libraries, specialties, and quality from industry leaders.
            </p>
          </div>

          {/* Providers Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {providers.map((provider) => (
              <div key={provider.id}>
                <Card padding="lg" hover>
                  <>
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                          <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">
                            {provider.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {provider.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Est. {provider.established} • {provider.headquarters}
                          </p>
                          <div className="flex items-center space-x-2 mt-1">
                            <RatingStars rating={provider.rating} size="sm" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {provider.rating}/5
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                          {provider.rtp}
                        </span>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Avg RTP</p>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      {provider.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <p className="text-lg font-bold text-gray-900 dark:text-white">
                          {provider.gameCount}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Games</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-gray-900 dark:text-white">
                          {provider.licensedBy.length}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Licenses</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-gray-900 dark:text-white">
                          {provider.certifications.length}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Certifications</p>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Specialties
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {provider.specialty.map((spec, index) => (
                          <span 
                            key={index}
                            className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Popular Games */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Popular Games
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {provider.popularGames.slice(0, 3).map((game, index) => (
                          <span 
                            key={index}
                            className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                          >
                            {game}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pros and Cons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-green-700 dark:text-green-400 mb-2">
                          Strengths
                        </h4>
                        <ul className="space-y-1">
                          {provider.pros.slice(0, 2).map((pro, index) => (
                            <li key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                              <span className="text-green-500 mr-1">✓</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-amber-700 dark:text-amber-400 mb-2">
                          Considerations
                        </h4>
                        <ul className="space-y-1">
                          {provider.cons.map((con, index) => (
                            <li key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                              <span className="text-amber-500 mr-1">!</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                </Card>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="mb-12">
            <Card padding="lg">
              <>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Provider Comparison Overview
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 font-semibold text-gray-900 dark:text-white">Provider</th>
                        <th className="text-center py-3 font-semibold text-gray-900 dark:text-white">Games</th>
                        <th className="text-center py-3 font-semibold text-gray-900 dark:text-white">Avg RTP</th>
                        <th className="text-center py-3 font-semibold text-gray-900 dark:text-white">Specialty</th>
                        <th className="text-center py-3 font-semibold text-gray-900 dark:text-white">Rating</th>
                      </tr>
                    </thead>
                    <tbody>
                      {providers.map((provider) => (
                        <tr key={provider.id} className="border-b border-gray-100 dark:border-gray-800">
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
                            {provider.gameCount}
                          </td>
                          <td className="text-center py-3">
                            <span className="text-green-600 dark:text-green-400 font-medium">
                              {provider.rtp}
                            </span>
                          </td>
                          <td className="text-center py-3 text-gray-600 dark:text-gray-400">
                            {provider.specialty[0]}
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
              </>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <FAQAccordion items={faqData} />
          </div>
        </div>
      </div>
    </>
  );
}
