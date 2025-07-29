import { Metadata } from 'next';
import Link from 'next/link';
import { seoManager } from '@/lib/seo';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = seoManager.generateMetadata({
  title: 'VIP Program - Exclusive Benefits | Casino.ca',
  description: 'Join our exclusive VIP program for high-roller benefits, personal account managers, and premium rewards at the best Canadian online casinos.',
  keywords: ['VIP program', 'high roller', 'exclusive benefits', 'premium rewards', 'casino VIP']
});

export default function VIPPage() {
  const vipTiers = [
    {
      name: 'Bronze',
      minDeposit: '$100',
      benefits: [
        'Basic customer support',
        'Standard withdrawal times',
        'Monthly bonus offers',
        'Access to basic tournaments'
      ],
      color: 'bg-amber-600'
    },
    {
      name: 'Silver',
      minDeposit: '$500',
      benefits: [
        'Priority customer support',
        'Faster withdrawal processing',
        'Weekly bonus offers',
        'Exclusive tournaments',
        'Birthday bonus'
      ],
      color: 'bg-gray-400'
    },
    {
      name: 'Gold',
      minDeposit: '$2,000',
      benefits: [
        'Dedicated account manager',
        'Same-day withdrawals',
        'Daily bonus offers',
        'VIP tournaments',
        'Cashback rewards',
        'Exclusive event invitations'
      ],
      color: 'bg-yellow-500'
    },
    {
      name: 'Platinum',
      minDeposit: '$10,000',
      benefits: [
        'Personal account manager',
        'Instant withdrawals',
        'Custom bonus packages',
        'Private tournaments',
        'Higher cashback rates',
        'Luxury gifts and prizes',
        'VIP travel packages'
      ],
      color: 'bg-gray-700'
    },
    {
      name: 'Diamond',
      minDeposit: '$50,000+',
      benefits: [
        'Elite concierge service',
        'No withdrawal limits',
        'Bespoke promotions',
        'Exclusive Diamond events',
        'Maximum cashback rates',
        'Luxury lifestyle rewards',
        'Private jet experiences',
        'Personal casino host'
      ],
      color: 'bg-blue-600'
    }
  ];

  const exclusiveBenefits = [
    {
      title: 'Personal Account Manager',
      description: 'Get dedicated support from a personal account manager who understands your preferences and gaming style.',
      icon: '👤'
    },
    {
      title: 'Faster Withdrawals',
      description: 'Enjoy priority processing for your withdrawals, with same-day or instant processing for higher tiers.',
      icon: '⚡'
    },
    {
      title: 'Enhanced Bonuses',
      description: 'Receive larger bonuses with better terms, including lower wagering requirements and higher maximum wins.',
      icon: '🎁'
    },
    {
      title: 'Exclusive Events',
      description: 'Access to VIP-only tournaments, parties, and experiences not available to regular players.',
      icon: '🎪'
    },
    {
      title: 'Cashback Rewards',
      description: 'Get a percentage of your losses back as cashback, with higher rates as you advance through tiers.',
      icon: '💰'
    },
    {
      title: 'Luxury Gifts',
      description: 'Receive high-end gifts, electronics, jewelry, and even travel packages as tier rewards.',
      icon: '🏆'
    }
  ];

  const qualificationTips = [
    'Maintain consistent play over time rather than sporadic large deposits',
    'Play a variety of games to show engagement across the platform',
    'Participate in tournaments and special events when possible',
    'Keep your account in good standing with no payment issues',
    'Respond to VIP communications and surveys when requested',
    'Consider focusing your play on one main casino rather than spreading across many'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <Card>
            <div className="p-8 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-xl">
              <h1 className="text-4xl font-bold mb-4">VIP Casino Program</h1>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                Experience the ultimate in online casino luxury with exclusive VIP benefits, personal service, and premium rewards designed for high-value players.
              </p>
            </div>
            <div className="p-6 bg-white">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
                  <p className="text-gray-600">VIP Tiers</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <p className="text-gray-600">Personal Support</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">Instant</div>
                  <p className="text-gray-600">Withdrawals</p>
                </div>
              </div>
            </div>
          </Card>

          {/* VIP Tiers */}
          <div className="mt-8">
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">VIP Tier System</h2>
                <div className="grid gap-4">
                  {vipTiers.map((tier, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className={`${tier.color} text-white p-4`}>
                        <div className="flex justify-between items-center">
                          <h3 className="text-xl font-bold">{tier.name} Tier</h3>
                          <span className="text-lg font-medium">Min. Deposit: {tier.minDeposit}</span>
                        </div>
                      </div>
                      <div className="p-4 bg-white">
                        <h4 className="font-semibold text-gray-900 mb-3">Benefits Include:</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {tier.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Exclusive Benefits */}
          <div className="mt-8">
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Exclusive VIP Benefits</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {exclusiveBenefits.map((benefit, index) => (
                    <div key={index} className="text-center p-4 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
                      <div className="text-4xl mb-3">{benefit.icon}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* How VIP Works */}
          <div className="mt-8">
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">How VIP Membership Works</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Qualification Process</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Meet Deposit Requirements</h4>
                          <p className="text-sm text-gray-700">Reach the minimum deposit threshold for your desired tier.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Demonstrate Activity</h4>
                          <p className="text-sm text-gray-700">Show consistent gaming activity across different game types.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Receive Invitation</h4>
                          <p className="text-sm text-gray-700">Get an invitation from the casino to join the VIP program.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">4</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Enjoy Benefits</h4>
                          <p className="text-sm text-gray-700">Access exclusive perks and work toward higher tiers.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Tier Advancement</h3>
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4">
                      <p className="text-sm text-gray-700 mb-4">
                        VIP tiers are typically based on a combination of factors including total deposits, wagering volume, account longevity, and overall engagement with the casino.
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Deposit History:</span>
                          <span className="font-medium">40%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Wagering Volume:</span>
                          <span className="font-medium">30%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Account Activity:</span>
                          <span className="font-medium">20%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Loyalty Duration:</span>
                          <span className="font-medium">10%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Tips for VIP Status */}
          <div className="mt-8">
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Tips for Achieving VIP Status</h2>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-bold text-yellow-800 mb-2">💡 Pro Tips</h3>
                  <p className="text-yellow-700 text-sm">
                    VIP status is typically by invitation only. Here&apos;s how to increase your chances of being noticed by casino management.
                  </p>
                </div>
                
                <div className="grid gap-3">
                  {qualificationTips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xs">
                        {index + 1}
                      </div>
                      <p className="text-sm text-gray-700 flex-1">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* VIP vs Regular Comparison */}
          <div className="mt-8">
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">VIP vs Regular Player Comparison</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left p-3 font-semibold text-gray-900">Feature</th>
                        <th className="text-center p-3 font-semibold text-gray-600">Regular Player</th>
                        <th className="text-center p-3 font-semibold text-purple-600">VIP Player</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="p-3 font-medium">Customer Support</td>
                        <td className="p-3 text-center text-gray-600">Standard queue</td>
                        <td className="p-3 text-center text-purple-600">Priority/Dedicated</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-3 font-medium">Withdrawal Speed</td>
                        <td className="p-3 text-center text-gray-600">3-5 business days</td>
                        <td className="p-3 text-center text-purple-600">Same day/Instant</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-3 font-medium">Bonus Frequency</td>
                        <td className="p-3 text-center text-gray-600">Monthly</td>
                        <td className="p-3 text-center text-purple-600">Weekly/Daily</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-3 font-medium">Withdrawal Limits</td>
                        <td className="p-3 text-center text-gray-600">$5,000/week</td>
                        <td className="p-3 text-center text-purple-600">$50,000+/week</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Special Events</td>
                        <td className="p-3 text-center text-gray-600">Public tournaments</td>
                        <td className="p-3 text-center text-purple-600">Exclusive events</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-8">
            <Card>
              <div className="p-6 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl">
                <h2 className="text-2xl font-bold mb-4">Ready to Experience VIP Treatment?</h2>
                <p className="text-lg opacity-90 mb-6">
                  Join one of our featured casinos and start your journey toward VIP status today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/reviews" 
                    className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                  >
                    Browse VIP Casinos
                  </Link>
                  <Link 
                    href="/responsible-gambling" 
                    className="border border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
                  >
                    Responsible Gaming
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
