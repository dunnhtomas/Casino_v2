import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { RatingStars } from '@/components/ui/RatingStars';
import { Button } from '@/components/ui/Button';
import { ServerStructuredData } from '@/components/StructuredData';
import { getCasinoPageStructuredData, getBreadcrumbStructuredData } from '@/lib/structured-data';
import { FAQAccordion } from '@/components/ui/FAQAccordion';

// Mock data - In real app, this would come from CMS/database
const casinosData = {
  'spin-casino': {
    id: 1,
    name: 'Spin Casino',
    slug: 'spin-casino',
    rating: 4.8,
    bonus: '100% up to $1,000 + 100 Free Spins',
    features: ['Licensed in Ontario', '700+ Games', '24/7 Support', 'Mobile Optimized'],
    logo: '/images/casinos/spin-casino.webp',
    pros: [
      'Excellent game selection with 700+ titles',
      'Fast payouts within 1-3 business days',
      'Great mobile experience and app',
      'Licensed by Ontario Gaming Commission',
      'Multiple payment methods including Interac'
    ],
    cons: [
      'High wagering requirements on bonuses',
      'Limited live chat hours',
      'No phone support available'
    ],
    minDeposit: 10,
    payoutTime: '1-3 days',
    license: 'Alcohol and Gaming Commission of Ontario',
    established: 2019,
    games: 750,
    software: ['Microgaming', 'NetEnt', 'Evolution Gaming', 'Pragmatic Play', 'Play\'n GO'],
    paymentMethods: ['Visa', 'Mastercard', 'Interac', 'PayPal', 'Skrill', 'Neteller'],
    currencies: ['CAD', 'USD', 'EUR'],
    languages: ['English', 'French'],
    restrictions: ['Ontario residents only'],
    overview: `Spin Casino has established itself as one of Canada's premier online gaming destinations since launching in 2019. Licensed by the Alcohol and Gaming Commission of Ontario, this casino offers a comprehensive gaming experience with over 700 titles from leading software providers.

The casino excels in providing a mobile-first experience, with a dedicated app and responsive website that performs flawlessly across all devices. Their game selection spans from classic slots to modern video slots, table games, and live dealer options.

What sets Spin Casino apart is their commitment to player security and fair gaming practices. All games are regularly audited for fairness, and the casino employs advanced SSL encryption to protect player data and financial transactions.`,
    bonusTerms: {
      welcomeBonus: '100% match up to $1,000 + 100 Free Spins',
      wagering: '35x bonus amount',
      minDeposit: '$10',
      gameContribution: 'Slots: 100%, Table Games: 10%',
      timeLimit: '30 days',
      maxBet: '$5 per spin'
    },
    gameCategories: [
      { name: 'Slots', count: 500, percentage: 67 },
      { name: 'Table Games', count: 150, percentage: 20 },
      { name: 'Live Dealer', count: 75, percentage: 10 },
      { name: 'Other', count: 25, percentage: 3 }
    ]
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const casino = casinosData[slug as keyof typeof casinosData];
  
  if (!casino) {
    return { title: 'Casino Not Found' };
  }

  return {
    title: `${casino.name} Review 2025 - Bonus, Games & Rating`,
    description: `Expert review of ${casino.name}: ${casino.rating}/5 stars, ${casino.bonus}, ${casino.games}+ games. Read our detailed analysis and get exclusive bonuses.`,
    keywords: [
      `${casino.name.toLowerCase()} review`,
      `${casino.name.toLowerCase()} bonus`,
      'online casino canada',
      'casino review'
    ],
    openGraph: {
      title: `${casino.name} Review - ${casino.rating}/5 Stars`,
      description: `Expert review: ${casino.bonus}, ${casino.games}+ games, licensed and regulated.`,
      type: 'article',
    },
  };
}

export default async function CasinoPage({ params }: PageProps) {
  const { slug } = await params;
  const casino = casinosData[slug as keyof typeof casinosData];

  if (!casino) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://casino.ca' },
    { name: 'Casinos', url: 'https://casino.ca/casinos' },
    { name: casino.name, url: `https://casino.ca/casinos/${casino.slug}` }
  ];

  const structuredData = [
    getCasinoPageStructuredData({
      name: casino.name,
      rating: casino.rating,
      reviewText: casino.overview,
      datePublished: '2025-01-01'
    }),
    getBreadcrumbStructuredData(breadcrumbs)
  ];

  const faqs = [
    {
      id: 'safety-license',
      question: `Is ${casino.name} licensed and safe?`,
      answer: `Yes, ${casino.name} is licensed by the ${casino.license} and uses advanced SSL encryption to protect player data. All games are regularly audited for fairness.`
    },
    {
      id: 'minimum-deposit',
      question: `What is the minimum deposit at ${casino.name}?`,
      answer: `The minimum deposit at ${casino.name} is $${casino.minDeposit}. This applies to most payment methods including credit cards and e-wallets.`
    },
    {
      id: 'withdrawal-times',
      question: `How long do withdrawals take at ${casino.name}?`,
      answer: `Withdrawal processing times at ${casino.name} typically range from ${casino.payoutTime}. E-wallets are usually faster than bank transfers.`
    },
    {
      id: 'mobile-gaming',
      question: `Does ${casino.name} offer mobile gaming?`,
      answer: `Yes, ${casino.name} offers a fully optimized mobile experience with a responsive website and dedicated mobile app available for both iOS and Android devices.`
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
                <li><Link href="/casinos" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Casinos</Link></li>
                <li><span className="text-gray-400 mx-2">/</span></li>
                <li><span className="text-gray-900 dark:text-white font-medium">{casino.name}</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Casino Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{casino.name} Review</h1>
                <div className="flex items-center gap-4 mb-6">
                  <RatingStars rating={casino.rating} size="lg" />
                  <span className="text-2xl font-semibold">{casino.rating}/5</span>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Recommended
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-lg font-bold">{casino.games}+</div>
                    <div className="text-sm text-blue-100">Games</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-lg font-bold">${casino.minDeposit}</div>
                    <div className="text-sm text-blue-100">Min Deposit</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-lg font-bold">{casino.payoutTime}</div>
                    <div className="text-sm text-blue-100">Payout Time</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-lg font-bold">{casino.established}</div>
                    <div className="text-sm text-blue-100">Established</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-green-500 rounded-xl p-6 mb-4">
                  <div className="text-xs font-semibold uppercase tracking-wide mb-2">Welcome Bonus</div>
                  <div className="text-xl font-bold mb-4">{casino.bonus}</div>
                  <Button className="w-full bg-white text-green-600 hover:bg-gray-100 font-bold py-3">
                    Claim Bonus
                  </Button>
                </div>
                <p className="text-xs text-blue-200">18+ | T&Cs Apply | Play Responsibly</p>
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Overview</h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  {casino.overview.split('\n\n').map((paragraph, index) => (
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
                      {casino.pros.map((pro, index) => (
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
                      {casino.cons.map((con, index) => (
                        <li key={index} className="text-gray-700 dark:text-gray-300 flex items-start">
                          <span className="text-red-500 mr-2 mt-1">-</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Games */}
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Games & Software</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Game Categories</h3>
                    <div className="space-y-3">
                      {casino.gameCategories.map((category, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-gray-700 dark:text-gray-300">{category.name}</span>
                          <div className="flex items-center gap-2">
                            <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2 relative">
                              <div 
                                className={`bg-blue-600 h-2 rounded-full ${
                                  category.percentage >= 67 ? 'w-2/3' : 
                                  category.percentage >= 50 ? 'w-1/2' : 
                                  category.percentage >= 25 ? 'w-1/4' : 
                                  category.percentage >= 10 ? 'w-1/12' : 'w-0'
                                }`}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400 w-12 text-right">
                              {category.count}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Software Providers</h3>
                    <div className="flex flex-wrap gap-2">
                      {casino.software.map((provider, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {provider}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Casino Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">License:</span>
                    <span className="text-gray-900 dark:text-white font-medium">{casino.license.substring(0, 20)}...</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Established:</span>
                    <span className="text-gray-900 dark:text-white font-medium">{casino.established}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Languages:</span>
                    <span className="text-gray-900 dark:text-white font-medium">{casino.languages.join(', ')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Currencies:</span>
                    <span className="text-gray-900 dark:text-white font-medium">{casino.currencies.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Bonus Terms */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Bonus Terms</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Welcome Bonus:</span>
                    <p className="text-gray-900 dark:text-white font-medium mt-1">{casino.bonusTerms.welcomeBonus}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Wagering:</span>
                    <p className="text-gray-900 dark:text-white font-medium mt-1">{casino.bonusTerms.wagering}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Time Limit:</span>
                    <p className="text-gray-900 dark:text-white font-medium mt-1">{casino.bonusTerms.timeLimit}</p>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Payment Methods</h3>
                <div className="flex flex-wrap gap-2">
                  {casino.paymentMethods.map((method, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
