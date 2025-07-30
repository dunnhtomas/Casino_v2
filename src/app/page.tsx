import { Metadata } from 'next';
import Link from 'next/link';
import { seoManager } from '@/lib/seo';
import { Card } from '@/components/ui/Card';
import { RatingStars } from '@/components/ui/RatingStars';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { Button } from '@/components/ui/Button';

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
  return (
    <>
      {/* 1. HERO BANNER */}
      <section className="bg-gradient-to-br from-brand-primary to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Best Online Casinos in <span className="text-brand-gold">Canada</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Discover trusted, licensed casinos with exclusive bonuses and expert reviews
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg">View Top Casinos</Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-primary">
                Casino Reviews
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TOP CASINO SLIDER */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">🏆 Top Rated Casinos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Royal Vegas Casino', bonus: '$1200 + 120 FS', rating: 4.8, license: 'MGA' },
              { name: 'Spin Palace Casino', bonus: '$1000 + 100 FS', rating: 4.6, license: 'KGC' },
              { name: 'Jackpot City Casino', bonus: '$1600 + 200 FS', rating: 4.7, license: 'MGA' },
            ].map((casino, i) => (
              <Card key={i} className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="font-bold text-blue-800">#{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{casino.name}</h3>
                <RatingStars rating={casino.rating} />
                <p className="text-green-600 font-semibold mt-2">{casino.bonus}</p>
                <p className="text-sm text-gray-600 mb-4">License: {casino.license}</p>
                <Button className="w-full">Play Now</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. QUICK GAME CATEGORIES */}
      <section className="py-8 bg-gradient-to-r from-purple-100 to-blue-100">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-6">🎮 Quick Game Access</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {[
              { name: '🎰 Slots', count: '2000+' },
              { name: '🃏 Table Games', count: '150+' },
              { name: '🎥 Live Dealer', count: '80+' },
              { name: '🎲 Jackpots', count: '25+' },
            ].map((cat, i) => (
              <Button key={i} variant="outline" size="lg" className="flex flex-col h-auto py-4">
                <span className="text-lg">{cat.name}</span>
                <span className="text-sm text-gray-600">{cat.count}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WELCOME BONUS SECTION */}
      <section className="py-12 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">🎁 Exclusive Welcome Bonus</h2>
          <p className="text-2xl mb-2">Up to $1,500 + 300 Free Spins</p>
          <p className="text-lg mb-6 opacity-90">Available at our top-rated casinos</p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8">
            Claim Bonus Now
          </Button>
        </div>
      </section>

      {/* 5. BEST CASINO REVIEWS */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">⭐ Best Casino Reviews</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }, (_, i) => (
              <Card key={i} className="p-4">
                <div className="w-full h-24 bg-gradient-to-r from-blue-200 to-purple-200 rounded mb-3 flex items-center justify-center">
                  <span className="font-bold text-blue-800">Casino {i + 1}</span>
                </div>
                <h3 className="font-bold mb-1">Premium Casino #{i + 1}</h3>
                <RatingStars rating={4.5 + (i % 3) * 0.1} />
                <p className="text-sm text-gray-600 mt-2">Licensed & Secure</p>
                <Button size="sm" className="w-full mt-3">Review</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">❓ Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto">
            <FAQAccordion items={[
              {
                id: 'legal',
                question: 'Are online casinos legal in Canada?',
                answer: 'Yes, online gambling is legal in Canada when conducted through licensed and regulated platforms. Provincial regulations may vary.',
              },
              {
                id: 'safe',
                question: 'How do I choose a safe casino?',
                answer: 'Look for proper licensing from reputable authorities, SSL encryption, fair gaming certifications, positive user reviews, and responsible gambling tools.',
              },
              {
                id: 'bonuses',
                question: 'What types of bonuses are available?',
                answer: 'Common bonuses include welcome bonuses, no deposit bonuses, free spins, reload bonuses, cashback offers, and VIP loyalty rewards.',
              },
              {
                id: 'withdrawal',
                question: 'How long do withdrawals take?',
                answer: 'Withdrawal times vary by method: e-wallets (24-48 hours), credit cards (3-5 days), bank transfers (5-7 days). Verification may add 1-2 days.',
              },
            ]} />
          </div>
        </div>
      </section>

      {/* 7. RESPONSIBLE GAMBLING */}
      <section className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-4">🛡️ Responsible Gambling</h3>
          <p className="mb-4">Gambling should be entertaining. Always play within your means and set limits.</p>
          <div className="flex justify-center gap-6 text-sm">
            <Link href="/responsible-gambling" className="text-blue-300 hover:underline">
              Responsible Gaming
            </Link>
            <Link href="/self-exclusion" className="text-blue-300 hover:underline">
              Self-Exclusion
            </Link>
            <Link href="/help" className="text-blue-300 hover:underline">
              Get Help
            </Link>
            <span className="text-gray-400">18+ Only</span>
          </div>
        </div>
      </section>
    </>
  );
}