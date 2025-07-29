import { Metadata } from 'next';
import { CasinoCard } from '@/components/casino/CasinoCard';
import { FilterSidebar } from '@/components/casino/FilterSidebar';
import { SortDropdown } from '@/components/casino/SortDropdown';
import { ServerStructuredData } from '@/components/StructuredData';
import { getCasinoListStructuredData } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Best Online Casinos in Canada 2025 - Expert Reviews',
  description: 'Discover the top-rated online casinos in Canada. Expert reviews, exclusive bonuses, and safe gaming recommendations from Casino.ca.',
  keywords: ['online casinos canada', 'best canadian casinos', 'casino reviews', 'online gambling canada'],
  openGraph: {
    title: 'Best Online Casinos in Canada 2025',
    description: 'Expert reviews of the best online casinos in Canada with exclusive bonuses.',
    type: 'website',
  },
};

// Mock data - In real app, this would come from CMS/database
const casinos = [
  {
    id: 1,
    name: 'Spin Casino',
    slug: 'spin-casino',
    rating: 4.8,
    bonus: '100% up to $1,000 + 100 Free Spins',
    features: ['Licensed in Ontario', '700+ Games', '24/7 Support', 'Mobile Optimized'],
    logo: '/images/casinos/spin-casino.webp',
    pros: ['Excellent game selection', 'Fast payouts', 'Great mobile experience'],
    cons: ['High wagering requirements'],
    minDeposit: 10,
    payoutTime: '1-3 days',
    license: 'Alcohol and Gaming Commission of Ontario',
    established: 2019,
    games: 750,
    software: ['Microgaming', 'NetEnt', 'Evolution Gaming'],
  },
  {
    id: 2,
    name: 'Jackpot City',
    slug: 'jackpot-city',
    rating: 4.7,
    bonus: '100% up to $1,600 Welcome Package',
    features: ['eCOGRA Certified', '500+ Games', 'VIP Program', 'Live Dealer'],
    logo: '/images/casinos/jackpot-city.webp',
    pros: ['Trusted brand', 'Excellent customer support', 'Regular promotions'],
    cons: ['Limited cryptocurrency options'],
    minDeposit: 20,
    payoutTime: '2-4 days',
    license: 'Malta Gaming Authority',
    established: 1998,
    games: 500,
    software: ['Microgaming', 'Evolution Gaming'],
  },
  {
    id: 3,
    name: 'Royal Vegas',
    slug: 'royal-vegas',
    rating: 4.6,
    bonus: '100% up to $1,200 + 120 Free Spins',
    features: ['25+ Years Experience', 'Multi-Currency', 'Mobile Casino', 'Live Chat'],
    logo: '/images/casinos/royal-vegas.webp',
    pros: ['Long-standing reputation', 'Wide game variety', 'Multiple payment options'],
    cons: ['Slower withdrawal times', 'Complex bonus terms'],
    minDeposit: 10,
    payoutTime: '3-5 days',
    license: 'Malta Gaming Authority',
    established: 2000,
    games: 600,
    software: ['Microgaming', 'NetEnt'],
  },
];

export default function CasinosPage() {
  const structuredData = getCasinoListStructuredData(casinos);

  return (
    <>
      <ServerStructuredData data={[structuredData]} />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Best Online Casinos in Canada
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Expert reviews of the top-rated Canadian online casinos with exclusive bonuses and trusted recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">{casinos.length}+</div>
                  <div className="text-sm">Reviewed Casinos</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">$50M+</div>
                  <div className="text-sm">Bonuses Tracked</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm">Expert Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <FilterSidebar />
            </div>

            {/* Casino List */}
            <div className="lg:w-3/4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Top Rated Casinos ({casinos.length})
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    All casinos are licensed and regulated for Canadian players
                  </p>
                </div>
                <SortDropdown />
              </div>

              <div className="space-y-6">
                {casinos.map((casino, index) => (
                  <CasinoCard 
                    key={casino.id} 
                    casino={casino} 
                    rank={index + 1}
                  />
                ))}
              </div>

              {/* Load More / Pagination */}
              <div className="mt-12 text-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Load More Casinos
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Why Trust Casino.ca?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Our expert team has over 20 years of combined experience in the online gambling industry, 
                ensuring you get honest, unbiased reviews.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Licensed & Regulated</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  All featured casinos are licensed by reputable gaming authorities and regularly audited.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Secure & Fair</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Advanced SSL encryption and certified random number generators ensure fair play.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 dark:bg-purple-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Fast Payouts</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We prioritize casinos with quick withdrawal processing and multiple payment options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
