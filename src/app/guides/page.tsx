import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { SiteHeader, SiteFooter } from '@/components/layout/SiteHeader';
import { getBreadcrumbStructuredData, getHomePageStructuredData } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Casino Guides | Casino.ca',
  description: 'Comprehensive guides for casino players in Canada. Learn strategies, rules, and tips for slots, table games, and more.',
  keywords: 'casino guides, gambling strategies, casino rules, how to play, casino tips, Canada',
  openGraph: {
    title: 'Complete Casino Guides for Canadian Players',
    description: 'Master casino games with our comprehensive guides and strategies.',
    type: 'website',
  },
};

interface Guide {
  id: string;
  title: string;
  category: 'Slots' | 'Table Games' | 'Live Casino' | 'Strategy' | 'Basics';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  readTime: string;
  excerpt: string;
  content: string;
  lastUpdated: string;
  author: string;
  rating: number;
  views: string;
}

const featuredGuides: Guide[] = [
  {
    id: 'blackjack-basic-strategy',
    title: 'Blackjack Basic Strategy Guide',
    category: 'Strategy',
    difficulty: 'Beginner',
    readTime: '8 min read',
    excerpt: 'Master the fundamental blackjack strategy that can reduce the house edge to under 1%.',
    content: 'Complete basic strategy charts and explanations...',
    lastUpdated: '2025-07-20',
    author: 'Casino.ca Expert Team',
    rating: 4.9,
    views: '45.2K'
  },
  {
    id: 'slot-machine-guide',
    title: 'Understanding Slot Machines: RTP, Volatility & More',
    category: 'Slots',
    difficulty: 'Beginner',
    readTime: '6 min read',
    excerpt: 'Everything you need to know about slot machines, from RTP to bonus features.',
    content: 'Comprehensive slot machine guide...',
    lastUpdated: '2025-07-18',
    author: 'Casino.ca Expert Team',
    rating: 4.8,
    views: '38.7K'
  },
  {
    id: 'bankroll-management',
    title: 'Casino Bankroll Management: Essential Tips',
    category: 'Strategy',
    difficulty: 'Intermediate',
    readTime: '10 min read',
    excerpt: 'Learn how to manage your casino bankroll effectively and play responsibly.',
    content: 'Detailed bankroll management strategies...',
    lastUpdated: '2025-07-15',
    author: 'Casino.ca Expert Team',
    rating: 4.7,
    views: '29.3K'
  },
  {
    id: 'live-dealer-guide',
    title: 'Live Dealer Casino Games: Complete Guide',
    category: 'Live Casino',
    difficulty: 'Beginner',
    readTime: '7 min read',
    excerpt: 'Discover the world of live dealer games and how they differ from regular online casino games.',
    content: 'Complete live dealer guide...',
    lastUpdated: '2025-07-12',
    author: 'Casino.ca Expert Team',
    rating: 4.6,
    views: '22.1K'
  }
];

const guideCategories = [
  {
    id: 'slots',
    name: 'Slot Guides',
    icon: '🎰',
    description: 'Learn about different types of slots, RTP, volatility, and bonus features',
    guides: 15,
    topics: ['RTP & Volatility', 'Progressive Jackpots', 'Bonus Features', 'Slot Types']
  },
  {
    id: 'table-games',
    name: 'Table Game Guides',
    icon: '🃏',
    description: 'Master classic casino table games with our detailed strategy guides',
    guides: 12,
    topics: ['Blackjack Strategy', 'Roulette Systems', 'Baccarat Rules', 'Poker Basics']
  },
  {
    id: 'live-casino',
    name: 'Live Casino Guides',
    icon: '🎬',
    description: 'Everything about live dealer games and interactive casino experiences',
    guides: 8,
    topics: ['Live Blackjack', 'Live Roulette', 'Game Shows', 'Etiquette']
  },
  {
    id: 'strategy',
    name: 'Strategy Guides',
    icon: '🧠',
    description: 'Advanced strategies and mathematical approaches to casino games',
    guides: 10,
    topics: ['Bankroll Management', 'Betting Systems', 'Card Counting', 'Odds & Probability']
  },
  {
    id: 'basics',
    name: 'Beginner Guides',
    icon: '📚',
    description: 'Start your casino journey with our comprehensive beginner guides',
    guides: 18,
    topics: ['Casino Basics', 'How to Play', 'Terms & Glossary', 'Safety Tips']
  }
];

const commonQuestions = [
  {
    id: 'rtp-importance',
    question: 'What is RTP and why is it important?',
    answer: 'RTP (Return to Player) is the percentage of all wagered money that a slot machine or casino game will pay back to players over time. For example, a game with 96% RTP will return $96 for every $100 wagered over the long term. Higher RTP games offer better value for players.'
  },
  {
    id: 'choose-casino-game',
    question: 'How do I choose the right casino game for me?',
    answer: 'Consider your experience level, preferred game type, risk tolerance, and budget. Beginners should start with simple games like slots or roulette. If you prefer skill-based games, try blackjack or poker. Always check the RTP and volatility to match your playing style.'
  },
  {
    id: 'house-edge',
    question: 'What is the house edge in casino games?',
    answer: 'The house edge is the mathematical advantage that the casino has over players in any given game. It represents the percentage of each bet that the casino expects to keep over time. Lower house edge games like blackjack (0.5-1%) offer better odds than high house edge games like keno (25-30%).'
  },
  {
    id: 'bankroll-management',
    question: 'How important is bankroll management?',
    answer: 'Bankroll management is crucial for responsible gambling. Set a budget before playing, never chase losses, and only gamble with money you can afford to lose. A good rule is to never bet more than 1-5% of your total bankroll on a single game.'
  },
  {
    id: 'fair-games',
    question: 'Are online casino games fair?',
    answer: 'Licensed online casinos use Random Number Generators (RNGs) that are regularly tested by independent auditing companies to ensure fair play. Always play at licensed and regulated casinos that display their certification from bodies like eCOGRA or iTech Labs.'
  }
];

const breadcrumbs = [
  { name: 'Home', url: 'https://casino.ca' },
  { name: 'Guides', url: 'https://casino.ca/guides' }
];

const structuredData = [
  getHomePageStructuredData(),
  getBreadcrumbStructuredData(breadcrumbs)
];

export default function GuidesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <SiteHeader />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Casino Guides
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Master casino games with our comprehensive guides, strategies, and tips. 
              From beginner basics to advanced techniques.
            </p>
          </div>

          {/* Featured Guides */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredGuides.map((guide) => (
                <div key={guide.id}>
                  <Card padding="lg" hover>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium text-white ${
                          guide.category === 'Slots' ? 'bg-blue-500' :
                          guide.category === 'Table Games' ? 'bg-green-500' :
                          guide.category === 'Live Casino' ? 'bg-purple-500' :
                          guide.category === 'Strategy' ? 'bg-red-500' :
                          'bg-gray-500'
                        }`}>
                          {guide.category}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300' :
                          guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300' :
                          'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300'
                        }`}>
                          {guide.difficulty}
                        </span>
                      </div>
                      <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                        <div>{guide.readTime}</div>
                        <div>{guide.views} views</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {guide.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {guide.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <span>By {guide.author}</span>
                        <span>•</span>
                        <span>Updated {new Date(guide.lastUpdated).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{guide.rating}</span>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Guide Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Browse by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guideCategories.map((category) => (
                <div key={category.id}>
                  <Card padding="lg" hover>
                    <div className="text-center">
                      <div className="text-4xl mb-4">{category.icon}</div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {category.description}
                      </p>
                      <div className="text-sm text-casino-red font-medium mb-4">
                        {category.guides} guides available
                      </div>
                      <div className="space-y-1">
                        {category.topics.map((topic, index) => (
                          <div key={index} className="text-xs text-gray-500 dark:text-gray-400">
                            • {topic}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Path */}
          <div className="mb-12">
            <Card padding="lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Recommended Learning Path
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">1️⃣</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Start with Basics</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Learn casino fundamentals, terminology, and safety
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">2️⃣</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Choose Your Games</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Focus on 1-2 games and master their rules
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">3️⃣</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Learn Strategy</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Study optimal strategies and bankroll management
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">4️⃣</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Practice & Refine</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Apply your knowledge and continuously improve
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Common Questions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <FAQAccordion items={commonQuestions} />
          </div>

          {/* Guide Tips */}
          <div className="mb-12">
            <Card padding="lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                How to Use Our Guides Effectively
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl mb-3">📖</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Read Thoroughly
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Take your time to understand each concept. Don&apos;t rush through the material - 
                    proper understanding is key to successful implementation.
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-3">💻</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Practice in Demo Mode
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Before playing with real money, practice the strategies and techniques 
                    in free demo modes to build confidence and skill.
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-3">📊</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Track Your Progress
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Keep records of your gameplay to identify patterns, successes, 
                    and areas for improvement. Data-driven insights lead to better results.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      <SiteFooter />
    </>
  );
}
