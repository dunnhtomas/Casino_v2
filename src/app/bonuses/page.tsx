import { Metadata } from 'next';
import { ServerStructuredData } from '@/components/StructuredData';
import { getBonusListStructuredData, getBreadcrumbStructuredData } from '@/lib/structured-data';
import { BonusCard } from '@/components/bonus/BonusCard';
import { FilterSidebar } from '@/components/bonus/FilterSidebar';
import { SortDropdown } from '@/components/bonus/SortDropdown';

export const metadata: Metadata = {
  title: 'Best Casino Bonuses Canada 2025 - Welcome Bonuses & Free Spins',
  description: 'Discover the best casino bonuses in Canada for 2025. Compare welcome bonuses, free spins, no deposit bonuses, and exclusive offers from top-rated casinos.',
  keywords: [
    'casino bonuses canada',
    'welcome bonuses',
    'free spins',
    'no deposit bonus',
    'casino promotions'
  ],
  openGraph: {
    title: 'Best Casino Bonuses Canada 2025',
    description: 'Find the most generous casino bonuses and free spins offers available to Canadian players.',
    type: 'website',
  },
};

// Mock data - In real app, this would come from CMS/database
const bonusesData = [
  {
    id: 1,
    title: '100% Welcome Bonus + 100 Free Spins',
    casino: 'Spin Casino',
    casinoSlug: 'spin-casino',
    bonusType: 'Welcome Bonus',
    amount: '$1,000',
    percentage: 100,
    freeSpins: 100,
    wagering: '35x',
    minDeposit: 10,
    maxBonus: 1000,
    gameRestrictions: 'Slots only',
    timeLimit: '30 days',
    rating: 4.8,
    featured: true,
    validUntil: '2025-12-31',
    terms: 'New players only. 18+. Min deposit $10. Wagering 35x bonus amount. Game restrictions apply.',
    code: 'WELCOME100',
    description: 'Double your first deposit up to $1,000 and get 100 bonus spins on popular slots.'
  },
  {
    id: 2,
    title: 'No Deposit Bonus - 20 Free Spins',
    casino: 'Royal Vegas',
    casinoSlug: 'royal-vegas',
    bonusType: 'No Deposit',
    amount: '$0',
    percentage: 0,
    freeSpins: 20,
    wagering: '40x',
    minDeposit: 0,
    maxBonus: 100,
    gameRestrictions: 'Book of Dead',
    timeLimit: '7 days',
    rating: 4.5,
    featured: true,
    validUntil: '2025-12-31',
    terms: 'New players only. No deposit required. Max withdrawal $100. Wagering 40x winnings.',
    code: 'NODEPOSIT20',
    description: 'Get 20 free spins on Book of Dead without making a deposit. No risk, real rewards!'
  },
  {
    id: 3,
    title: '200% Deposit Match + 50 Free Spins',
    casino: 'Jackpot City',
    casinoSlug: 'jackpot-city',
    bonusType: 'Welcome Bonus',
    amount: '$1,600',
    percentage: 200,
    freeSpins: 50,
    wagering: '30x',
    minDeposit: 20,
    maxBonus: 1600,
    gameRestrictions: 'Slots and Table Games',
    timeLimit: '60 days',
    rating: 4.7,
    featured: false,
    validUntil: '2025-12-31',
    terms: 'New players only. Min deposit $20. Wagering 30x bonus + deposit. Game contributions vary.',
    code: 'MEGA200',
    description: 'Triple your money with this generous 200% match bonus up to $1,600 plus 50 free spins.'
  },
  {
    id: 4,
    title: 'Weekly Reload Bonus - 50% Match',
    casino: 'Betway Casino',
    casinoSlug: 'betway-casino',
    bonusType: 'Reload Bonus',
    amount: '$250',
    percentage: 50,
    freeSpins: 25,
    wagering: '25x',
    minDeposit: 25,
    maxBonus: 250,
    gameRestrictions: 'All games',
    timeLimit: '14 days',
    rating: 4.3,
    featured: false,
    validUntil: '2025-12-31',
    terms: 'Existing players only. Available every Tuesday. Min deposit $25. Lower wagering requirements.',
    code: 'RELOAD50',
    description: 'Boost your balance every week with our 50% reload bonus up to $250 plus 25 free spins.'
  },
  {
    id: 5,
    title: 'High Roller Bonus - 100% up to $5,000',
    casino: 'LeoVegas',
    casinoSlug: 'leovegas',
    bonusType: 'High Roller',
    amount: '$5,000',
    percentage: 100,
    freeSpins: 200,
    wagering: '40x',
    minDeposit: 100,
    maxBonus: 5000,
    gameRestrictions: 'Slots only',
    timeLimit: '90 days',
    rating: 4.6,
    featured: true,
    validUntil: '2025-12-31',
    terms: 'High roller welcome package. Min deposit $100. Extended play time with 90-day validity.',
    code: 'HIGHROLLER',
    description: 'Exclusive high roller package with massive $5,000 bonus and 200 premium free spins.'
  },
  {
    id: 6,
    title: 'Free Spins Friday - 50 Spins',
    casino: 'Casumo',
    casinoSlug: 'casumo',
    bonusType: 'Free Spins',
    amount: '$0',
    percentage: 0,
    freeSpins: 50,
    wagering: '35x',
    minDeposit: 15,
    maxBonus: 200,
    gameRestrictions: 'Starburst',
    timeLimit: '3 days',
    rating: 4.4,
    featured: false,
    validUntil: '2025-12-31',
    terms: 'Available every Friday. Min deposit $15. Free spins on Starburst only. Wagering on winnings.',
    code: 'FRIDAY50',
    description: 'Spin into the weekend with 50 free spins on Starburst every Friday.'
  }
];

const breadcrumbs = [
  { name: 'Home', url: 'https://casino.ca' },
  { name: 'Bonuses', url: 'https://casino.ca/bonuses' }
];

const structuredData = [
  getBonusListStructuredData(bonusesData),
  getBreadcrumbStructuredData(breadcrumbs)
];

export default function BonusesPage() {
  const featuredBonuses = bonusesData.filter(bonus => bonus.featured);
  const regularBonuses = bonusesData.filter(bonus => !bonus.featured);

  return (
    <>
      <ServerStructuredData data={structuredData} />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Best Casino Bonuses in Canada
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-6">
                Exclusive welcome bonuses, free spins, and promotional offers from top-rated casinos
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">{bonusesData.length}+</div>
                  <div className="text-sm text-blue-200">Active Bonuses</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">$50K+</div>
                  <div className="text-sm text-blue-200">Total Bonus Value</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-blue-200">Free Spins</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">Daily</div>
                  <div className="text-sm text-blue-200">Updated</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Featured Bonuses */}
          {featuredBonuses.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                🔥 Featured Bonuses
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featuredBonuses.map((bonus) => (
                  <BonusCard key={bonus.id} bonus={bonus} featured />
                ))}
              </div>
            </section>
          )}

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filter Sidebar */}
            <div className="lg:col-span-1">
              <FilterSidebar />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  All Casino Bonuses ({bonusesData.length})
                </h2>
                <SortDropdown />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {regularBonuses.map((bonus) => (
                  <BonusCard key={bonus.id} bonus={bonus} />
                ))}
              </div>

              {/* Load More - Placeholder for pagination */}
              <div className="text-center mt-12">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  Load More Bonuses
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bonus Information Section */}
        <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Types of Casino Bonuses
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    Welcome Bonuses - Match your first deposit
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    No Deposit Bonuses - Free money to try
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    Free Spins - Bonus rounds on slots
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    Reload Bonuses - Weekly deposit matches
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  How to Claim Bonuses
                </h3>
                <ol className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">1.</span>
                    Choose a bonus from our verified list
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">2.</span>
                    Click &quot;Claim Bonus&quot; to visit the casino
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">3.</span>
                    Register a new account or log in
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">4.</span>
                    Enter bonus code if required
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">5.</span>
                    Make qualifying deposit and enjoy!
                  </li>
                </ol>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Bonus Terms to Know
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li><strong>Wagering:</strong> How many times you must play through the bonus</li>
                  <li><strong>Game Restrictions:</strong> Which games count toward wagering</li>
                  <li><strong>Time Limit:</strong> How long you have to use the bonus</li>
                  <li><strong>Max Bet:</strong> Maximum bet per spin/hand with bonus</li>
                  <li><strong>Max Withdrawal:</strong> Maximum you can cash out from bonus</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
