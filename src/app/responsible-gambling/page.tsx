import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { SiteHeader, SiteFooter } from '@/components/layout/SiteHeader';
import { getBreadcrumbStructuredData, getHomePageStructuredData } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Responsible Gambling | Casino.ca',
  description: 'Learn about responsible gambling practices, get help for gambling problems, and find resources for safe casino gaming in Canada.',
  keywords: 'responsible gambling, gambling addiction, problem gambling, gambling help, Canada',
  openGraph: {
    title: 'Responsible Gambling Resources and Support',
    description: 'Comprehensive resources for safe and responsible gambling practices.',
    type: 'website',
  },
};

const warningSignsData = [
  {
    category: 'Financial Signs',
    signs: [
      'Gambling with money you cannot afford to lose',
      'Borrowing money to gamble or pay gambling debts',
      'Lying about gambling losses to family or friends',
      'Unable to pay bills due to gambling expenses',
      'Selling possessions to fund gambling'
    ]
  },
  {
    category: 'Behavioral Signs',
    signs: [
      'Gambling for longer periods than intended',
      'Unable to stop or reduce gambling despite wanting to',
      'Neglecting work, family, or social responsibilities',
      'Gambling to escape problems or negative feelings',
      'Chasing losses with bigger bets'
    ]
  },
  {
    category: 'Emotional Signs',
    signs: [
      'Feeling anxious or depressed when not gambling',
      'Mood swings related to gambling wins and losses',
      'Feeling guilt or shame about gambling habits',
      'Becoming secretive about gambling activities',
      'Irritability when discussing gambling'
    ]
  }
];

const selfHelpTools = [
  {
    id: 'deposit-limits',
    title: 'Set Deposit Limits',
    description: 'Control how much you can deposit in a day, week, or month',
    icon: '💰',
    action: 'Set daily, weekly, and monthly deposit limits that cannot be increased immediately'
  },
  {
    id: 'session-limits',
    title: 'Time Limits',
    description: 'Manage how long you spend gambling online',
    icon: '⏰',
    action: 'Set session time limits and receive reminders when your time is up'
  },
  {
    id: 'loss-limits',
    title: 'Loss Limits',
    description: 'Set maximum amounts you are willing to lose',
    icon: '📉',
    action: 'Establish daily, weekly, or monthly loss limits to protect your bankroll'
  },
  {
    id: 'reality-check',
    title: 'Reality Check',
    description: 'Regular reminders of time spent gambling',
    icon: '⚠️',
    action: 'Receive pop-up reminders showing how long you have been playing'
  },
  {
    id: 'cooling-off',
    title: 'Cooling-off Periods',
    description: 'Take breaks from gambling for set periods',
    icon: '❄️',
    action: 'Temporarily suspend your account for 24 hours to 6 weeks'
  },
  {
    id: 'self-exclusion',
    title: 'Self-Exclusion',
    description: 'Permanently block access to gambling sites',
    icon: '🚫',
    action: 'Block access to your account for a minimum of 6 months'
  }
];

const helpOrganizations = [
  {
    name: 'Gambling Helpline (Canada)',
    phone: '1-888-946-6716',
    website: 'https://www.gamblinghelplineonline.ca',
    description: 'Free, confidential support 24/7 for anyone affected by problem gambling',
    languages: ['English', 'French']
  },
  {
    name: 'Problem Gambling Institute of Ontario',
    phone: '1-888-230-3505',
    website: 'https://www.problemgambling.ca',
    description: 'Information, resources, and referrals for problem gambling in Ontario',
    languages: ['English', 'French']
  },
  {
    name: 'Alberta Gambling Helpline',
    phone: '1-866-332-2322',
    website: 'https://aglc.ca/gambling-help',
    description: 'Support services for Alberta residents affected by gambling problems',
    languages: ['English']
  },
  {
    name: 'BC Gambling Support',
    phone: '1-888-795-6111',
    website: 'https://www.bcresponsiblegambling.ca',
    description: 'Problem gambling support and resources for British Columbia',
    languages: ['English', 'French', 'Mandarin', 'Cantonese']
  }
];

const responsibleGamblingTips = [
  {
    id: 'set-limits',
    title: 'Set Time and Money Limits',
    description: 'Before you start gambling, decide how much time and money you can afford to spend. Stick to these limits regardless of whether you are winning or losing.'
  },
  {
    id: 'never-chase',
    title: 'Never Chase Your Losses',
    description: 'Trying to win back money you have lost by gambling more is a dangerous pattern. Accept losses as part of the game and never gamble more to try to recover them.'
  },
  {
    id: 'take-breaks',
    title: 'Take Regular Breaks',
    description: 'Step away from gambling regularly to maintain perspective. Use this time to evaluate your spending and emotional state.'
  },
  {
    id: 'avoid-alcohol',
    title: 'Avoid Gambling Under the Influence',
    description: 'Alcohol and drugs impair judgment and can lead to poor gambling decisions. Always gamble sober to maintain control.'
  },
  {
    id: 'keep-perspective',
    title: 'Keep Gambling in Perspective',
    description: 'Gambling should be entertainment, not a way to make money or solve financial problems. The house always has an edge.'
  },
  {
    id: 'balance-activities',
    title: 'Balance with Other Activities',
    description: 'Maintain a healthy balance between gambling and other activities like work, family, and hobbies.'
  }
];

const selfAssessmentQuestions = [
  {
    id: 'time-control',
    question: 'Do you gamble for longer periods than you intended?',
    answer: 'If yes, consider setting strict time limits and using reality check features.'
  },
  {
    id: 'money-control',
    question: 'Do you spend more money gambling than you can afford?',
    answer: 'If yes, set strict deposit and loss limits before you start gambling.'
  },
  {
    id: 'mood-gambling',
    question: 'Do you gamble when you feel depressed or anxious?',
    answer: 'If yes, seek healthier coping mechanisms and consider professional help.'
  },
  {
    id: 'chasing-losses',
    question: 'Do you try to win back losses by gambling more?',
    answer: 'If yes, this is a warning sign. Take a break and reassess your gambling habits.'
  },
  {
    id: 'lying-about-gambling',
    question: 'Do you lie to others about how much you gamble?',
    answer: 'If yes, consider talking to someone you trust about your gambling habits.'
  }
];

const breadcrumbs = [
  { name: 'Home', url: 'https://casino.ca' },
  { name: 'Responsible Gambling', url: 'https://casino.ca/responsible-gambling' }
];

const structuredData = [
  getHomePageStructuredData(),
  getBreadcrumbStructuredData(breadcrumbs)
];

export default function ResponsibleGamblingPage() {
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
              Responsible Gambling
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Gambling should be fun and entertaining. Learn how to gamble responsibly 
              and get help if you need it.
            </p>
          </div>

          {/* Emergency Help Banner */}
          <div className="mb-12">
            <Card padding="lg">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">🆘</div>
                  <div>
                    <h2 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2">
                      Need Help Now?
                    </h2>
                    <p className="text-red-700 dark:text-red-400 mb-4">
                      If you&apos;re struggling with gambling problems, help is available 24/7.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href="tel:1-888-946-6716"
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
                      >
                        📞 Call 1-888-946-6716
                      </a>
                      <a 
                        href="https://www.gamblinghelplineonline.ca"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-100 hover:bg-red-200 text-red-800 px-6 py-3 rounded-lg font-semibold text-center transition-colors"
                      >
                        💬 Chat Online
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Warning Signs */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Warning Signs of Problem Gambling
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {warningSignsData.map((category, index) => (
                <div key={index}>
                  <Card padding="lg">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                      {category.category}
                    </h3>
                    <ul className="space-y-2">
                      {category.signs.map((sign, signIndex) => (
                        <li key={signIndex} className="flex items-start space-x-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            {sign}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Self-Help Tools */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Self-Help Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selfHelpTools.map((tool) => (
                <div key={tool.id}>
                  <Card padding="lg" hover>
                    <div className="text-center">
                      <div className="text-4xl mb-4">{tool.icon}</div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {tool.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {tool.description}
                      </p>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                        <p className="text-blue-800 dark:text-blue-300 text-xs">
                          {tool.action}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Responsible Gambling Tips */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Tips for Responsible Gambling
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {responsibleGamblingTips.map((tip) => (
                <div key={tip.id}>
                  <Card padding="lg">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      ✓ {tip.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {tip.description}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Self-Assessment */}
          <div className="mb-12">
            <Card padding="lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Self-Assessment Questions
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Answer these questions honestly to evaluate your gambling habits:
              </p>
              <FAQAccordion items={selfAssessmentQuestions} />
            </Card>
          </div>

          {/* Help Organizations */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Get Professional Help
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {helpOrganizations.map((org, index) => (
                <div key={index}>
                  <Card padding="lg">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {org.name}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">📞</span>
                        <a 
                          href={`tel:${org.phone}`}
                          className="text-casino-red hover:underline font-semibold"
                        >
                          {org.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">🌐</span>
                        <a 
                          href={org.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-casino-red hover:underline text-sm"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      {org.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {org.languages.map((lang, langIndex) => (
                        <span 
                          key={langIndex}
                          className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 px-2 py-1 rounded text-xs"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Myth Busting */}
          <div className="mb-12">
            <Card padding="lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Common Gambling Myths
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2">
                    ❌ MYTH: &quot;I&apos;m due for a win&quot;
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Each game outcome is independent. Previous results don&apos;t influence future ones.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2">
                    ❌ MYTH: &quot;I can win back my losses&quot;
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Chasing losses often leads to bigger losses. The house always has an edge.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2">
                    ❌ MYTH: &quot;Gambling can solve money problems&quot;
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Gambling is more likely to create financial problems than solve them.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2">
                    ❌ MYTH: &quot;I have a system that works&quot;
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    No betting system can overcome the mathematical house edge in casino games.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Resources */}
          <div className="mb-12">
            <Card padding="lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Additional Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    📚 Educational Materials
                  </h3>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Understanding odds and probability</li>
                    <li>• How casino games work</li>
                    <li>• Recognizing gambling triggers</li>
                    <li>• Building healthy habits</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    👥 Support Groups
                  </h3>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Gamblers Anonymous</li>
                    <li>• Online support communities</li>
                    <li>• Family support groups</li>
                    <li>• Peer counseling programs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    🔧 Technical Tools
                  </h3>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Website blocking software</li>
                    <li>• Account management tools</li>
                    <li>• Spending tracking apps</li>
                    <li>• Time management systems</li>
                  </ul>
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
