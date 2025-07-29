import { Metadata } from 'next';
import Link from 'next/link';
import { seoManager } from '@/lib/seo';
import { Card } from '@/components/ui/Card';
import { RatingStars } from '@/components/ui/RatingStars';
import { ComparisonTable } from '@/components/ui/ComparisonTable';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { Button } from '@/components/ui/Button';
import { SiteHeader, SiteFooter } from '@/components/layout/SiteHeader';

export const metadata: Metadata = seoManager.generateMetadata({
  title: 'Best Online Casinos in Canada 2025',
  description: 'Discover the top-rated online casinos in Canada with expert reviews, exclusive bonuses, and trusted recommendations. Play safely at licensed Canadian casino sites.',
  keywords: [
    'online casino canada',
    'best canadian casinos',
    'casino reviews canada',
    'online gambling canada',
    'casino bonuses',
    'safe casino sites',
    'licensed casinos',
  ],
  canonical: '/',
  section: 'website',
  tags: ['casino', 'canada', 'gambling', 'reviews', 'bonuses'],
});

export default function HomePage() {
  // Sample data for demonstration
  const featuredCasinos = [
    {
      id: 1,
      name: 'Royal Vegas Casino',
      logo: '/images/casinos/royal-vegas.jpg',
      rating: 4.8,
      reviewCount: 2547,
      welcomeBonus: '$1200 + 120 Free Spins',
      license: 'Malta Gaming Authority',
      established: 2000,
      description: 'Premium online casino with over 700 games and generous bonuses',
    },
    {
      id: 2,
      name: 'Spin Palace Casino',
      logo: '/images/casinos/spin-palace.jpg',
      rating: 4.6,
      reviewCount: 1834,
      welcomeBonus: '$1000 + 100 Free Spins',
      license: 'Kahnawake Gaming Commission',
      established: 2001,
      description: 'Trusted casino with excellent customer service and fast payouts',
    },
    {
      id: 3,
      name: 'Jackpot City',
      logo: '/images/casinos/jackpot-city.jpg',
      rating: 4.7,
      reviewCount: 3201,
      welcomeBonus: '$1600 + 200 Free Spins',
      license: 'Malta Gaming Authority',
      established: 1998,
      description: 'Long-established casino with progressive jackpots and mobile gaming',
    },
  ];

  const comparisonData = [
    {
      id: 'royal-vegas',
      name: 'Royal Vegas',
      rating: 4.8,
      reviewCount: 2547,
      features: {
        bonus: '$1200',
        games: '700+',
        payout: '97.8%',
        license: 'MGA',
      },
      isRecommended: true,
    },
    {
      id: 'spin-palace',
      name: 'Spin Palace',
      rating: 4.6,
      reviewCount: 1834,
      features: {
        bonus: '$1000',
        games: '650+',
        payout: '97.2%',
        license: 'KGC',
      },
    },
    {
      id: 'jackpot-city',
      name: 'Jackpot City',
      rating: 4.7,
      reviewCount: 3201,
      features: {
        bonus: '$1600',
        games: '800+',
        payout: '97.5%',
        license: 'MGA',
      },
    },
  ];

  const comparisonFeatures = [
    { key: 'bonus', label: 'Welcome Bonus', type: 'text' as const },
    { key: 'games', label: 'Games', type: 'text' as const },
    { key: 'payout', label: 'RTP', type: 'text' as const },
    { key: 'license', label: 'License', type: 'text' as const },
  ];

  const faqData = [
    {
      id: 'legal-canada',
      question: 'Are online casinos legal in Canada?',
      answer: 'Yes, online gambling is legal in Canada when conducted through licensed and regulated platforms. Canadian players can legally play at offshore casinos that hold valid gambling licenses.',
    },
    {
      id: 'safe-casino',
      question: 'How do I choose a safe online casino?',
      answer: 'Look for proper licensing from reputable authorities (Malta, UK, Kahnawake), SSL encryption, fair gaming certifications, positive user reviews, and responsible gambling tools.',
    },
    {
      id: 'payment-methods',
      question: 'What payment methods are accepted?',
      answer: 'Most Canadian casinos accept credit cards, e-wallets (PayPal, Skrill, Neteller), bank transfers, and increasingly, cryptocurrencies like Bitcoin and Ethereum.',
    },
    {
      id: 'withdrawal-times',
      question: 'How long do withdrawals take?',
      answer: 'Withdrawal times vary by method: e-wallets (24-48 hours), credit cards (3-5 days), bank transfers (5-7 days). Licensed casinos typically process requests within 24 hours.',
    },
  ];

  return (
    <>
      <SiteHeader />
      
      <main className="min-h-screen bg-gray-50">
      {/* Hero Section - Mobile First Design */}
      <section className="bg-gradient-to-br from-brand-primary to-blue-800 text-white">
        <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
              Best Online Casinos in <span className="text-brand-gold">Canada</span>
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Discover trusted, licensed casinos with exclusive bonuses, expert reviews, 
              and the safest gaming experience for Canadian players.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-6 sm:px-8 py-3">
                View Top Casinos
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-brand-primary text-lg px-6 sm:px-8 py-3"
              >
                Casino Reviews
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Site Sections Overview */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Everything You Need to Know About Online Casinos
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive resources to make informed decisions about online gambling in Canada
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
              {
                title: 'Casino Reviews',
                description: 'Expert reviews of the best online casinos in Canada',
                icon: '⭐',
                href: '/casinos',
                color: 'bg-blue-500',
                count: '50+ Casinos'
              },
              {
                title: 'Casino Games',
                description: 'Complete guide to slots, table games, and live dealer options',
                icon: '🎰',
                href: '/games',
                color: 'bg-purple-500',
                count: '2000+ Games'
              },
              {
                title: 'Bonuses & Offers',
                description: 'Exclusive bonuses and promotional offers for Canadian players',
                icon: '💰',
                href: '/bonuses',
                color: 'bg-green-500',
                count: '100+ Bonuses'
              },
              {
                title: 'Game Guides',
                description: 'Learn strategies and rules for all casino games',
                icon: '📚',
                href: '/guides',
                color: 'bg-red-500',
                count: '50+ Guides'
              },
              {
                title: 'Expert Reviews',
                description: 'In-depth analysis and ratings from our casino experts',
                icon: '🔍',
                href: '/reviews',
                color: 'bg-indigo-500',
                count: '200+ Reviews'
              },
              {
                title: 'Payment Methods',
                description: 'Safe and secure banking options for Canadian players',
                icon: '💳',
                href: '/payments',
                color: 'bg-yellow-500',
                count: '25+ Methods'
              },
              {
                title: 'Software Providers',
                description: 'Top game developers and software companies',
                icon: '🏢',
                href: '/providers',
                color: 'bg-pink-500',
                count: '40+ Providers'
              },
              {
                title: 'News & Updates',
                description: 'Latest casino news, updates, and industry insights',
                icon: '📰',
                href: '/news',
                color: 'bg-teal-500',
                count: 'Daily Updates'
              },
              {
                title: 'Help & Support',
                description: 'Get help with any questions about online gambling',
                icon: '❓',
                href: '/support',
                color: 'bg-orange-500',
                count: '24/7 Support'
              },
              {
                title: 'Responsible Gambling',
                description: 'Resources and tools for safe and responsible gaming',
                icon: '🛡️',
                href: '/responsible-gambling',
                color: 'bg-gray-600',
                count: 'Stay Safe'
              }
            ].map((section, index) => (
              <Link key={index} href={section.href} className="block group">
                <Card padding="lg" hover>
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 ${section.color} rounded-full flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                      {section.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-casino-red transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {section.description}
                    </p>
                    <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      {section.count}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Casinos - Responsive Grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Top Rated Casinos
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Our experts have reviewed and ranked the best online casinos for Canadian players
            </p>
          </div>
          
          {/* Mobile-first responsive grid */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredCasinos.map((casino) => (
              <div key={casino.id}>
                <Card className="h-full">
                <div className="p-4 sm:p-6">
                  {/* Casino Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-xs sm:text-sm font-semibold text-gray-600">
                          {casino.name.split(' ').map(word => word[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
                          {casino.name}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <RatingStars rating={casino.rating} />
                          <span className="text-sm text-gray-600">
                            ({casino.reviewCount.toLocaleString()})
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Casino Description */}
                  <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">
                    {casino.description}
                  </p>

                  {/* Casino Details */}
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Welcome Bonus:</span>
                      <span className="font-medium text-right">{casino.welcomeBonus}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">License:</span>
                      <span className="font-medium">{casino.license}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Established:</span>
                      <span className="font-medium">{casino.established}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button className="flex-1 sm:flex-auto">
                      Play Now
                    </Button>
                    <Button variant="outline" className="flex-1 sm:flex-auto">
                      Review
                    </Button>
                  </div>
                </div>
              </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casino Comparison Table - Mobile Responsive */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Quick Comparison
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Compare our top-rated casinos at a glance
            </p>
          </div>
          
          <ComparisonTable items={comparisonData} features={comparisonFeatures} />
        </div>
      </section>

      {/* Features Section - Mobile First Grid */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose Casino.ca?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Your trusted guide to safe and rewarding online gaming
            </p>
          </div>
          
          {/* Responsive features grid */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: '🛡️',
                title: 'Licensed & Secure',
                description: 'All recommended casinos are fully licensed and regulated',
                color: 'bg-brand-primary',
              },
              {
                icon: '💰',
                title: 'Exclusive Bonuses',
                description: 'Access special offers and bonuses only available here',
                color: 'bg-brand-secondary',
              },
              {
                icon: '⭐',
                title: 'Expert Reviews',
                description: 'In-depth analysis by our team of casino experts',
                color: 'bg-brand-accent',
              },
              {
                icon: '🔧',
                title: '24/7 Support',
                description: 'Get help and advice from our support team anytime',
                color: 'bg-brand-gold',
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 ${feature.color} rounded-full flex items-center justify-center text-2xl`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Mobile Responsive Accordion */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about online gambling in Canada
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <FAQAccordion items={faqData} />
          </div>
        </div>
      </section>
    </main>
    
    <SiteFooter />
    </>
  );
}
