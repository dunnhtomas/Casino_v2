import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { getBreadcrumbStructuredData, getHomePageStructuredData } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Support & Help Center | Casino.ca',
  description: 'Get help with online casino questions, account issues, payment problems, and responsible gambling resources for Canadian players.',
  keywords: 'casino support, help center, customer service, gambling help, responsible gambling, payment help',
  openGraph: {
    title: 'Casino Support & Help Center',
    description: 'Comprehensive support resources for Canadian online casino players.',
    type: 'website',
  },
};

const supportCategories = [
  {
    id: 'account',
    title: 'Account & Registration',
    icon: '👤',
    description: 'Account creation, verification, and profile management',
    topics: [
      'Creating a new account',
      'Account verification process',
      'Updating personal information',
      'Password reset and security',
      'Account closure requests'
    ]
  },
  {
    id: 'payments',
    title: 'Deposits & Withdrawals',
    icon: '💳',
    description: 'Payment methods, transaction issues, and processing times',
    topics: [
      'Available payment methods',
      'Making deposits and withdrawals',
      'Transaction processing times',
      'Payment fees and limits',
      'Failed transaction troubleshooting'
    ]
  },
  {
    id: 'games',
    title: 'Games & Technical',
    icon: '🎮',
    description: 'Game rules, technical issues, and gameplay questions',
    topics: [
      'How to play casino games',
      'Game rules and payouts',
      'Technical issues and bugs',
      'Mobile gaming support',
      'RTP and fairness information'
    ]
  },
  {
    id: 'bonuses',
    title: 'Bonuses & Promotions',
    icon: '🎁',
    description: 'Bonus terms, wagering requirements, and promotional offers',
    topics: [
      'Understanding bonus terms',
      'Wagering requirements explained',
      'Claiming and using bonuses',
      'VIP and loyalty programs',
      'Promotional terms and conditions'
    ]
  },
  {
    id: 'responsible',
    title: 'Responsible Gambling',
    icon: '🛡️',
    description: 'Tools and resources for safe and responsible gaming',
    topics: [
      'Setting deposit and time limits',
      'Self-exclusion options',
      'Recognizing problem gambling',
      'Getting help and support',
      'Third-party support organizations'
    ]
  },
  {
    id: 'legal',
    title: 'Legal & Compliance',
    icon: '⚖️',
    description: 'Licensing, regulations, and legal information',
    topics: [
      'Casino licensing information',
      'Canadian gambling laws',
      'Privacy and data protection',
      'Terms of service',
      'Dispute resolution process'
    ]
  }
];

const faqData = [
  {
    id: 'age-verification',
    question: 'Why do I need to verify my age and identity?',
    answer: 'Age and identity verification is required by Canadian law to ensure you are 18+ and to prevent fraud. This protects both you and the casino from illegal activity.',
  },
  {
    id: 'withdrawal-time',
    question: 'How long do withdrawals take to process?',
    answer: 'Withdrawal times vary by payment method: e-wallets (24-48 hours), bank transfers (3-5 business days), credit cards (3-7 business days). Some casinos may have additional review periods.',
  },
  {
    id: 'bonus-wagering',
    question: 'What are wagering requirements and how do they work?',
    answer: 'Wagering requirements determine how many times you must play through a bonus before withdrawing winnings. For example, a $100 bonus with 30x wagering requires $3,000 in bets.',
  },
  {
    id: 'game-fairness',
    question: 'How do I know the games are fair?',
    answer: 'Licensed casinos use certified Random Number Generators (RNG) tested by independent auditors like eCOGRA. Look for certificates and RTP (Return to Player) percentages.',
  },
  {
    id: 'deposit-limits',
    question: 'Can I set spending limits on my account?',
    answer: 'Yes, most casinos offer responsible gambling tools including deposit limits, loss limits, session time limits, and self-exclusion options in your account settings.',
  },
  {
    id: 'mobile-play',
    question: 'Can I play on my mobile device?',
    answer: 'Most modern casinos are mobile-optimized and work on smartphones and tablets. Some also offer dedicated apps for iOS and Android devices.',
  }
];

const contactMethods = [
  {
    method: 'Live Chat',
    availability: '24/7',
    responseTime: 'Instant',
    description: 'Quick help for urgent issues',
    icon: '💬'
  },
  {
    method: 'Email Support',
    availability: 'Business Hours',
    responseTime: '2-24 hours',
    description: 'Detailed assistance for complex issues',
    icon: '📧'
  },
  {
    method: 'Phone Support',
    availability: '9 AM - 11 PM EST',
    responseTime: 'Immediate',
    description: 'Direct phone assistance',
    icon: '📞'
  },
  {
    method: 'Help Center',
    availability: '24/7',
    responseTime: 'Self-service',
    description: 'Search our knowledge base',
    icon: '📚'
  }
];

const breadcrumbs = [
  { name: 'Home', url: 'https://casino.ca' },
  { name: 'Support', url: 'https://casino.ca/support' }
];

const structuredData = [
  getHomePageStructuredData(),
  getBreadcrumbStructuredData(breadcrumbs)
];

export default function SupportPage() {
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
              Support & Help Center
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers to your questions and get the help you need. 
              Our comprehensive support resources are here to assist Canadian casino players.
            </p>
          </div>

          {/* Quick Contact Methods */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Contact Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {contactMethods.map((contact, index) => (
                <div key={index}>
                  <Card padding="lg" hover>
                    <>
                      <div className="text-center">
                        <div className="text-3xl mb-3">{contact.icon}</div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {contact.method}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                          {contact.description}
                        </p>
                        <div className="space-y-1 text-xs text-gray-500 dark:text-gray-400">
                          <p><strong>Available:</strong> {contact.availability}</p>
                          <p><strong>Response:</strong> {contact.responseTime}</p>
                        </div>
                      </div>
                    </>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Support Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Browse Help Topics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportCategories.map((category) => (
                <div key={category.id}>
                  <Card padding="lg" hover>
                    <>
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl flex-shrink-0">{category.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            {category.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            {category.description}
                          </p>
                          <ul className="space-y-1">
                            {category.topics.slice(0, 3).map((topic, index) => (
                              <li key={index} className="text-sm text-gray-500 dark:text-gray-400 flex items-start">
                                <span className="text-casino-red mr-2">•</span>
                                {topic}
                              </li>
                            ))}
                            {category.topics.length > 3 && (
                              <li className="text-sm text-casino-red font-medium">
                                +{category.topics.length - 3} more topics
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <FAQAccordion items={faqData} />
          </div>

          {/* Responsible Gambling Resources */}
          <div className="mb-12">
            <Card padding="lg">
              <>
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Responsible Gambling Resources
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    We are committed to promoting responsible gambling. If you or someone you know 
                    may have a gambling problem, these resources can help.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Problem Gambling Helpline
                    </h3>
                    <p className="text-2xl font-bold text-casino-red mb-1">1-888-347-8888</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">24/7 Confidential Support</p>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Gamblers Anonymous
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                      Support groups and meetings
                    </p>
                    <p className="text-casino-red text-sm">gamblersanonymous.ca</p>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Responsible Gaming Council
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                      Education and resources
                    </p>
                    <p className="text-casino-red text-sm">responsiblegambling.org</p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <h4 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                    Warning Signs of Problem Gambling
                  </h4>
                  <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                    <li>• Spending more money than you can afford to lose</li>
                    <li>• Chasing losses with bigger bets</li>
                    <li>• Gambling interfering with work, family, or relationships</li>
                    <li>• Feeling anxious or depressed about gambling</li>
                    <li>• Lying about gambling activities or losses</li>
                  </ul>
                </div>
              </>
            </Card>
          </div>

          {/* Emergency Contact */}
          <div className="text-center">
            <Card padding="lg">
              <>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Still Need Help?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  If you can&apos;t find the answer you&apos;re looking for, our support team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-6 py-3 bg-casino-red text-white rounded-lg hover:bg-casino-red/90 transition-colors font-medium">
                    Start Live Chat
                  </button>
                  <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium">
                    Send Email
                  </button>
                </div>
              </>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
