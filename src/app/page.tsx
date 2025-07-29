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

      {/* 6. NEW CASINOS */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">🆕 New Casinos 2025</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Fresh Casino', bonus: '$800 + 200 FS', date: 'Jan 2025' },
              { name: 'New Vegas Casino', bonus: '$1000 + 150 FS', date: 'Feb 2025' },
              { name: 'Modern Slots Casino', bonus: '$600 + 100 FS', date: 'Mar 2025' },
            ].map((casino, i) => (
              <Card key={i} className="p-6 text-center">
                <div className="w-20 h-20 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🆕</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{casino.name}</h3>
                <p className="text-blue-600 font-semibold mb-1">{casino.bonus}</p>
                <p className="text-sm text-gray-600 mb-4">Launched: {casino.date}</p>
                <Button className="w-full">Explore New Casino</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. POPULAR GAMES */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">🔥 Popular Games</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Starburst', 'Book of Dead', 'Gonzo\'s Quest', 'Mega Moolah',
              'Immortal Romance', 'Thunderstruck II', 'Blackjack', 'Roulette',
              'Baccarat', 'Texas Hold\'em', 'Lightning Roulette', 'Dream Catcher'
            ].map((game, i) => (
              <Card key={i} className="p-3 text-center hover:shadow-lg">
                <div className="w-full h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded mb-2 flex items-center justify-center">
                  <span className="text-xs font-bold text-purple-800">{game.slice(0, 8)}</span>
                </div>
                <p className="text-sm font-semibold">{game}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CASINO FILTERS */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold text-center mb-6">🔍 Filter Casinos By:</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              '💳 Payment Method', '🎁 Bonus Type', '🏆 License Type',
              '📱 Mobile Friendly', '🇨🇦 Canadian Players', '⚡ Instant Play'
            ].map((filter, i) => (
              <Button key={i} variant="outline" size="sm" className="hover:bg-white">
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LIVE CASINO GAMES */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">🎥 Live Casino Games</h2>
          <p className="text-center text-gray-300 mb-8">Experience the thrill of real dealers and authentic casino atmosphere</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Live Blackjack', tables: '25+ Tables' },
              { name: 'Live Roulette', tables: '30+ Tables' },
              { name: 'Live Baccarat', tables: '15+ Tables' },
              { name: 'Live Poker', tables: '10+ Tables' },
            ].map((game, i) => (
              <Card key={i} className="bg-gray-800 p-6 text-center text-white">
                <div className="w-full h-32 bg-red-600 rounded mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">LIVE</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{game.name}</h3>
                <p className="text-red-300 mb-4">{game.tables}</p>
                <Button className="w-full bg-red-600 hover:bg-red-700">Play Live</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 10. MOBILE CASINOS */}
      <section className="py-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">📱 Mobile Casino Gaming</h2>
          <p className="text-xl mb-8">Play your favorite games anywhere, anytime on any device</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { type: 'iOS Casino Apps', desc: 'Native apps for iPhone & iPad' },
              { type: 'Android Casino Apps', desc: 'Optimized for Android devices' },
              { type: 'Mobile Browser', desc: 'Instant play, no download required' },
            ].map((mobile, i) => (
              <Card key={i} className="p-6 text-black">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold mb-2">{mobile.type}</h3>
                <p className="text-gray-600 mb-4">{mobile.desc}</p>
                <Button className="w-full">Get Started</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 11. PAYMENT METHODS */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">💳 Secure Payment Methods</h2>
          <p className="text-center text-gray-600 mb-8">Safe, fast, and secure banking options for Canadian players</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { name: 'Visa', type: 'Credit Card' },
              { name: 'Mastercard', type: 'Credit Card' },
              { name: 'PayPal', type: 'E-Wallet' },
              { name: 'Skrill', type: 'E-Wallet' },
              { name: 'Neteller', type: 'E-Wallet' },
              { name: 'Bitcoin', type: 'Crypto' },
            ].map((method, i) => (
              <Card key={i} className="p-4 text-center hover:shadow-lg">
                <div className="w-12 h-8 bg-gray-300 rounded mx-auto mb-2 flex items-center justify-center">
                  <span className="text-xs font-bold">{method.name.slice(0, 4)}</span>
                </div>
                <p className="text-sm font-semibold">{method.name}</p>
                <p className="text-xs text-gray-600">{method.type}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 12. GAME PROVIDERS */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">🏢 Top Game Providers</h2>
          <p className="text-center text-gray-600 mb-8">Powered by the industry's leading software developers</p>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {[
              'Microgaming', 'NetEnt', 'Playtech', 'Evolution Gaming',
              'Pragmatic Play', 'Yggdrasil', 'Play\'n GO', 'Red Tiger Gaming'
            ].map((provider, i) => (
              <Card key={i} className="p-3 text-center hover:shadow-lg">
                <div className="w-full h-12 bg-blue-200 rounded mb-2 flex items-center justify-center">
                  <span className="text-xs font-bold text-blue-800">{provider.slice(0, 6)}</span>
                </div>
                <p className="text-xs font-semibold">{provider}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 13. PROGRESSIVE JACKPOTS */}
      <section className="py-12 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">💰 Progressive Jackpots</h2>
          <p className="text-center text-white mb-8 text-lg">Life-changing prizes waiting to be won!</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Mega Moolah', amount: '$12,547,832', network: 'Microgaming' },
              { name: 'Major Millions', amount: '$1,234,567', network: 'Microgaming' },
              { name: 'Hall of Gods', amount: '$987,654', network: 'NetEnt' },
            ].map((jackpot, i) => (
              <Card key={i} className="p-6 text-center">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-xl font-bold mb-2">{jackpot.name}</h3>
                <p className="text-3xl font-bold text-green-600 mb-2">{jackpot.amount}</p>
                <p className="text-sm text-gray-600 mb-4">{jackpot.network}</p>
                <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-600">
                  Play for Jackpot
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 14. CASINO NEWS */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">📰 Latest Casino News</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'New Slot Releases This Month',
                excerpt: 'Discover the hottest new slot games from top providers...',
                date: 'July 25, 2025'
              },
              {
                title: 'Casino Industry Updates',
                excerpt: 'Latest regulatory changes affecting Canadian players...',
                date: 'July 20, 2025'
              },
              {
                title: 'Biggest Jackpot Winners',
                excerpt: 'Meet the lucky players who won life-changing amounts...',
                date: 'July 15, 2025'
              },
            ].map((article, i) => (
              <Card key={i} className="p-6">
                <div className="w-full h-32 bg-gray-200 rounded mb-4 flex items-center justify-center">
                  <span className="text-gray-600">📰</span>
                </div>
                <h3 className="font-bold mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{article.date}</span>
                  <Link href="/news" className="text-blue-600 hover:underline text-sm">
                    Read More
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 15. BONUS OFFERS */}
      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">🎁 Latest Bonus Offers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { type: 'Welcome Bonus', offer: 'Up to $1200', casino: 'Royal Vegas' },
              { type: 'No Deposit', offer: '50 Free Spins', casino: 'Spin Palace' },
              { type: 'Reload Bonus', offer: '100% Match', casino: 'Jackpot City' },
              { type: 'Cashback', offer: '10% Weekly', casino: 'Vegas Casino' },
              { type: 'Free Spins', offer: '200 Spins', casino: 'Slot Paradise' },
              { type: 'High Roller', offer: 'Up to $5000', casino: 'VIP Casino' },
              { type: 'Mobile Bonus', offer: '$500 + 100 FS', casino: 'Mobile Slots' },
              { type: 'Weekend Special', offer: '150% Match', casino: 'Weekend Casino' },
            ].map((bonus, i) => (
              <Card key={i} className="p-4 text-center">
                <div className="bg-green-200 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  🎁
                </div>
                <h3 className="font-bold mb-1">{bonus.type}</h3>
                <p className="text-green-600 font-semibold mb-1">{bonus.offer}</p>
                <p className="text-sm text-gray-600 mb-3">{bonus.casino}</p>
                <Button size="sm" className="w-full">Claim Now</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 16. VIP PROGRAMS */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">👑 VIP & Loyalty Programs</h2>
          <p className="text-xl mb-8">Exclusive rewards and benefits for our most valued players</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { tier: 'Bronze VIP', min: '$100', benefits: 'Priority support, weekly bonuses' },
              { tier: 'Silver VIP', min: '$1,000', benefits: 'Personal account manager, exclusive bonuses' },
              { tier: 'Gold VIP', min: '$5,000', benefits: 'Higher limits, faster withdrawals' },
              { tier: 'Platinum VIP', min: '$25,000', benefits: 'Luxury gifts, exclusive events' },
            ].map((vip, i) => (
              <Card key={i} className="p-6 text-black">
                <div className="text-4xl mb-4">👑</div>
                <h3 className="text-xl font-bold mb-2">{vip.tier}</h3>
                <p className="text-sm text-gray-600 mb-2">Min. Deposit: {vip.min}</p>
                <p className="text-sm mb-4">{vip.benefits}</p>
                <Button className="w-full">Learn More</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 17. SAFE & SECURE */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">🛡️ Safe & Secure Gaming</h2>
          <p className="text-lg text-gray-600 mb-8">Your safety and security are our top priorities</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '🔒', title: 'SSL Encrypted', desc: '256-bit bank-level encryption' },
              { icon: '⚖️', title: 'Licensed Operators', desc: 'Regulated by trusted authorities' },
              { icon: '🛡️', title: 'Fair Gaming', desc: 'RNG certified and audited' },
              { icon: '🔍', title: 'Regular Audits', desc: 'Third-party security testing' },
            ].map((feature, i) => (
              <Card key={i} className="p-6 text-center hover:shadow-lg">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 18. CUSTOMER REVIEWS */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">⭐ What Our Players Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                name: 'John D.', 
                location: 'Toronto, ON',
                rating: 5, 
                text: 'Great experience! Fast payouts and excellent customer service. Highly recommended!' 
              },
              { 
                name: 'Sarah M.', 
                location: 'Vancouver, BC',
                rating: 5, 
                text: 'Love the game selection and mobile app. The bonuses are amazing too!' 
              },
              { 
                name: 'Mike R.', 
                location: 'Montreal, QC',
                rating: 4, 
                text: 'Been playing here for 2 years. Trustworthy and reliable casino with great support.' 
              },
            ].map((review, i) => (
              <Card key={i} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-200 rounded-full mr-3 flex items-center justify-center">
                    <span className="font-bold text-blue-800">{review.name[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.location}</p>
                    <RatingStars rating={review.rating} />
                  </div>
                </div>
                <p className="text-gray-600 italic">"{review.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 19. FAQ SECTION */}
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

      {/* 20. NEWSLETTER SIGNUP */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">📧 Stay in the Loop</h2>
          <p className="text-xl mb-6">Get exclusive bonuses, latest news, and expert tips delivered to your inbox</p>
          <div className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded text-black"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6">
              Subscribe
            </Button>
          </div>
          <p className="text-sm mt-4 opacity-80">Join 50,000+ players getting our newsletter</p>
        </div>
      </section>

      {/* 21. RESPONSIBLE GAMBLING */}
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