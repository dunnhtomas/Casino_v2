import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { RatingStars } from '@/components/ui/RatingStars';
import { Button } from '@/components/ui/Button';
import { ServerStructuredData } from '@/components/StructuredData';
import { getBonusPageStructuredData, getBreadcrumbStructuredData } from '@/lib/structured-data';
import { FAQAccordion } from '@/components/ui/FAQAccordion';

// Mock data - In real app, this would come from CMS/database
const bonusesData = {
  'spin-casino-welcome': {
    id: 1,
    title: 'Spin Casino Welcome Bonus',
    slug: 'spin-casino-welcome',
    casino: 'Spin Casino',
    casinoSlug: 'spin-casino',
    type: 'Welcome Bonus',
    amount: '$1,000',
    percentage: 100,
    freeSpins: 100,
    bonus: '100% up to $1,000 + 100 Free Spins',
    rating: 4.7,
    validUntil: '2025-12-31',
    minDeposit: 10,
    wagering: 35,
    maxBet: 5,
    timeLimit: 30,
    gameContribution: {
      slots: 100,
      tableGames: 10,
      liveCasino: 10
    },
    countries: ['Canada'],
    paymentMethods: ['Visa', 'Mastercard', 'Interac', 'PayPal'],
    promoCode: 'WELCOME100',
    featured: true,
    tags: ['New Player', 'High Value', 'Free Spins'],
    description: `Spin Casino's welcome package is one of the most generous in the Canadian market, offering new players a 100% match bonus up to $1,000 plus 100 free spins on selected slot games. This bonus is perfect for players looking to maximize their initial bankroll and explore the extensive game library.`,
    fullDescription: `The Spin Casino welcome bonus represents exceptional value for Canadian players, combining a substantial deposit match with free spins to create a comprehensive introduction to the platform. 

New players can claim up to $1,000 in bonus funds through a 100% match on their first deposit, meaning a $500 deposit becomes $1,000 in total playing funds. Additionally, 100 free spins are awarded on popular slot games, typically including titles from leading providers like NetEnt and Microgaming.

The bonus is designed to give players ample opportunity to explore Spin Casino's extensive game catalog, which includes over 700 titles across slots, table games, and live dealer options. The terms are competitive within the industry, with a 35x wagering requirement applied to both the bonus funds and free spin winnings.

What sets this bonus apart is its accessibility - the $10 minimum deposit requirement makes it available to players with various budgets, while the generous time limit of 30 days provides flexibility in meeting the wagering requirements.`,
    terms: [
      'Minimum deposit of $10 required',
      'Bonus funds must be wagered 35 times before withdrawal',
      'Free spins winnings subject to 35x wagering requirement',
      'Maximum bet per spin: $5 while bonus is active',
      'Bonus expires 30 days after activation',
      'Some games contribute differently to wagering requirements',
      'Standard terms and conditions apply'
    ],
    pros: [
      'High percentage match (100%)',
      'Generous maximum bonus amount ($1,000)',
      'Includes 100 free spins',
      'Low minimum deposit ($10)',
      'Reasonable wagering requirements (35x)',
      'Extended time limit (30 days)',
      'No complex bonus codes required'
    ],
    cons: [
      'Table games contribute only 10% to wagering',
      'Maximum bet restriction of $5 per spin',
      'Free spins typically on predetermined games',
      'Bonus funds expire if not used within 30 days'
    ]
  },
  'royal-vegas-loyalty': {
    id: 2,
    title: 'Royal Vegas Loyalty Program',
    slug: 'royal-vegas-loyalty',
    casino: 'Royal Vegas',
    casinoSlug: 'royal-vegas',
    type: 'Loyalty Program',
    amount: 'Varies',
    percentage: 0,
    freeSpins: 0,
    bonus: 'Earn loyalty points and exclusive rewards',
    rating: 4.5,
    validUntil: 'Ongoing',
    minDeposit: 0,
    wagering: 1,
    maxBet: 0,
    timeLimit: 0,
    gameContribution: {
      slots: 100,
      tableGames: 100,
      liveCasino: 100
    },
    countries: ['Canada'],
    paymentMethods: ['All accepted methods'],
    promoCode: '',
    featured: false,
    tags: ['Ongoing', 'VIP', 'Loyalty Points'],
    description: `Royal Vegas Loyalty Program rewards regular players with points, exclusive bonuses, and VIP treatment. Earn points with every bet and climb through loyalty tiers for better rewards.`,
    fullDescription: `The Royal Vegas Loyalty Program is designed to reward dedicated players with an ongoing series of benefits that improve over time. Every bet placed at Royal Vegas earns loyalty points, which can be redeemed for bonus credits or used to unlock exclusive rewards.

The program features multiple tiers, starting from Bronze and progressing through Silver, Gold, and Platinum levels. Each tier offers increasingly valuable benefits, including higher point conversion rates, exclusive bonuses, faster withdrawal processing, and dedicated customer support.

What makes this program special is its flexibility - there are no complex requirements or minimum play amounts. Simply by playing your favorite games, you automatically earn points and progress through the tiers based on your activity level.

Higher-tier members enjoy perks such as birthday bonuses, anniversary gifts, invitations to exclusive tournaments, and even real-world rewards like electronics and vacation packages. The program is truly built for long-term players who want ongoing value from their casino experience.`,
    terms: [
      'Earn 1 point for every $10 wagered on slots',
      'Table games earn points at different rates',
      'Points expire after 12 months of inactivity',
      'Tier status reviewed monthly based on activity',
      'Bonus credits have standard wagering requirements',
      'VIP rewards subject to availability',
      'Program terms may change with notice'
    ],
    pros: [
      'Ongoing rewards for regular play',
      'Multiple tier levels with increasing benefits',
      'Points never expire with regular activity',
      'Flexible redemption options',
      'Real-world rewards available',
      'Exclusive VIP tournaments and events',
      'Dedicated customer support for high tiers'
    ],
    cons: [
      'Point earning rates vary by game type',
      'Higher tiers require significant play volume',
      'Some rewards have limited availability',
      'Points expire with extended inactivity',
      'Redemption rates may change'
    ]
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const bonus = bonusesData[slug as keyof typeof bonusesData];
  
  if (!bonus) {
    return { title: 'Bonus Not Found' };
  }

  return {
    title: `${bonus.title} 2025 - Terms, Review & How to Claim`,
    description: `${bonus.title}: ${bonus.bonus}. Rating: ${bonus.rating}/5. Min deposit: $${bonus.minDeposit}, ${bonus.wagering}x wagering. Get all details and claim instructions.`,
    keywords: [
      `${bonus.casino.toLowerCase()} bonus`,
      `${bonus.type.toLowerCase()}`,
      'casino bonus canada',
      'online casino promotion'
    ],
    openGraph: {
      title: `${bonus.title} - ${bonus.rating}/5 Stars`,
      description: `${bonus.bonus} - Complete review and claim instructions.`,
      type: 'article',
    },
  };
}

export default async function BonusPage({ params }: PageProps) {
  const { slug } = await params;
  const bonus = bonusesData[slug as keyof typeof bonusesData];

  if (!bonus) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://casino.ca' },
    { name: 'Bonuses', url: 'https://casino.ca/bonuses' },
    { name: bonus.title, url: `https://casino.ca/bonuses/${bonus.slug}` }
  ];

  const structuredData = [
    getBonusPageStructuredData({
      name: bonus.title,
      description: bonus.description,
      amount: bonus.amount,
      casino: bonus.casino
    }),
    getBreadcrumbStructuredData(breadcrumbs)
  ];

  const faqs = [
    {
      id: 'how-to-claim',
      question: `How do I claim the ${bonus.title}?`,
      answer: `To claim the ${bonus.title}, simply register a new account at ${bonus.casino}, make a minimum deposit of $${bonus.minDeposit}, and the bonus will be automatically credited to your account. ${bonus.promoCode ? `Use promo code ${bonus.promoCode} if required.` : ''}`
    },
    {
      id: 'wagering-requirements',
      question: `What are the wagering requirements for this bonus?`,
      answer: `The ${bonus.title} has a ${bonus.wagering}x wagering requirement, meaning you must wager the bonus amount ${bonus.wagering} times before you can withdraw any winnings. Slots contribute 100% to wagering requirements.`
    },
    {
      id: 'time-limit',
      question: `How long do I have to use this bonus?`,
      answer: `You have ${bonus.timeLimit} days to use the bonus and meet the wagering requirements. After this time, any unused bonus funds and winnings will be removed from your account.`
    },
    {
      id: 'eligible-games',
      question: `Which games can I play with this bonus?`,
      answer: `This bonus can be used on most games at ${bonus.casino}, but contribution to wagering requirements varies: Slots (${bonus.gameContribution.slots}%), Table Games (${bonus.gameContribution.tableGames}%), Live Casino (${bonus.gameContribution.liveCasino}%).`
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
                <li><Link href="/bonuses" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Bonuses</Link></li>
                <li><span className="text-gray-400 mx-2">/</span></li>
                <li><span className="text-gray-900 dark:text-white font-medium">{bonus.title}</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Bonus Header */}
        <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {bonus.type}
                  </span>
                  {bonus.featured && (
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{bonus.title}</h1>
                <div className="flex items-center gap-4 mb-6">
                  <RatingStars rating={bonus.rating} size="lg" />
                  <span className="text-2xl font-semibold">{bonus.rating}/5</span>
                  <Link 
                    href={`/casinos/${bonus.casinoSlug}`}
                    className="text-green-200 hover:text-white underline"
                  >
                    View {bonus.casino} Review
                  </Link>
                </div>
                <div className="text-2xl font-bold mb-4">{bonus.bonus}</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-lg font-bold">${bonus.minDeposit}</div>
                    <div className="text-sm text-green-100">Min Deposit</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-lg font-bold">{bonus.wagering}x</div>
                    <div className="text-sm text-green-100">Wagering</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-lg font-bold">{bonus.timeLimit}</div>
                    <div className="text-sm text-green-100">Days to Use</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-lg font-bold">{bonus.freeSpins || 'No'}</div>
                    <div className="text-sm text-green-100">Free Spins</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-500 rounded-xl p-6 mb-4">
                  <div className="text-xs font-semibold uppercase tracking-wide mb-2">Available at</div>
                  <div className="text-xl font-bold mb-4">{bonus.casino}</div>
                  {bonus.promoCode && (
                    <div className="bg-white/20 rounded-lg px-3 py-2 mb-4">
                      <div className="text-xs">Promo Code</div>
                      <div className="font-bold">{bonus.promoCode}</div>
                    </div>
                  )}
                  <Button className="w-full bg-white text-orange-600 hover:bg-gray-100 font-bold py-3">
                    Claim Bonus
                  </Button>
                </div>
                <p className="text-xs text-green-200">18+ | T&Cs Apply | Play Responsibly</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Bonus Overview</h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  {bonus.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 dark:text-gray-300 mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              {/* Pros and Cons */}
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Pros & Cons</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Pros
                    </h3>
                    <ul className="space-y-2">
                      {bonus.pros.map((pro, index) => (
                        <li key={index} className="text-gray-700 dark:text-gray-300 flex items-start">
                          <span className="text-green-500 mr-2 mt-1">+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-red-700 dark:text-red-400 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      Cons
                    </h3>
                    <ul className="space-y-2">
                      {bonus.cons.map((con, index) => (
                        <li key={index} className="text-gray-700 dark:text-gray-300 flex items-start">
                          <span className="text-red-500 mr-2 mt-1">-</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Terms and Conditions */}
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Terms & Conditions</h2>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mb-6">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">Important Notice</h3>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                        Please read all terms and conditions carefully before claiming this bonus. Wagering requirements must be met before withdrawal.
                      </p>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {bonus.terms.map((term, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300 flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">•</span>
                      {term}
                    </li>
                  ))}
                </ul>
              </section>

              {/* FAQ */}
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <FAQAccordion items={faqs} />
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Bonus Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Type:</span>
                    <span className="text-gray-900 dark:text-white font-medium">{bonus.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Casino:</span>
                    <Link 
                      href={`/casinos/${bonus.casinoSlug}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      {bonus.casino}
                    </Link>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Min Deposit:</span>
                    <span className="text-gray-900 dark:text-white font-medium">${bonus.minDeposit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Max Bet:</span>
                    <span className="text-gray-900 dark:text-white font-medium">${bonus.maxBet}/spin</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Valid Until:</span>
                    <span className="text-gray-900 dark:text-white font-medium">{bonus.validUntil}</span>
                  </div>
                </div>
              </div>

              {/* Game Contributions */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Wagering Contributions</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Slots:</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full w-full"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{bonus.gameContribution.slots}%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Table Games:</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-yellow-600 h-2 rounded-full w-2"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{bonus.gameContribution.tableGames}%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Live Casino:</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-yellow-600 h-2 rounded-full w-2"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{bonus.gameContribution.liveCasino}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {bonus.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-6 text-white text-center">
                <h3 className="text-lg font-bold mb-2">Ready to Claim?</h3>
                <p className="text-sm text-green-100 mb-4">
                  Join {bonus.casino} today and claim your {bonus.bonus}
                </p>
                <Button className="w-full bg-white text-green-600 hover:bg-gray-100 font-bold py-3">
                  Visit {bonus.casino}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
