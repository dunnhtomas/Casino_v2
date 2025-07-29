import { Metadata } from 'next';
import { seoManager } from '@/lib/seo';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = seoManager.generateMetadata({
  title: 'Security & Safety - Casino.ca',
  description: 'Learn about online casino security measures, data protection, and how to stay safe while gambling online in Canada.',
  keywords: ['casino security', 'online safety', 'data protection', 'secure gambling', 'SSL encryption']
});

export default function SecurityPage() {
  const securityFeatures = [
    {
      title: 'SSL Encryption',
      description: 'All reputable online casinos use 256-bit SSL encryption to protect your personal and financial data during transmission.',
      icon: '🔒',
      implementation: [
        'HTTPS protocol for all pages',
        '256-bit SSL certificates from trusted authorities',
        'End-to-end encryption for all transactions',
        'Secure data transmission protocols'
      ]
    },
    {
      title: 'Payment Security',
      description: 'Advanced payment processing systems ensure your financial transactions are secure and protected.',
      icon: '💳',
      implementation: [
        'PCI DSS compliance for payment processing',
        'Tokenization of credit card information',
        'Two-factor authentication for withdrawals',
        'Fraud detection and prevention systems'
      ]
    },
    {
      title: 'Data Protection',
      description: 'Strict data protection measures ensure your personal information is kept safe and confidential.',
      icon: '🛡️',
      implementation: [
        'Regular security audits and penetration testing',
        'Secure data storage with encryption at rest',
        'Access controls and authentication systems',
        'Regular backups and disaster recovery plans'
      ]
    },
    {
      title: 'Fair Gaming',
      description: 'Random Number Generators (RNGs) and third-party testing ensure all games are fair and unbiased.',
      icon: '🎲',
      implementation: [
        'Certified RNG systems from reputable providers',
        'Regular testing by independent agencies',
        'Transparent Return-to-Player (RTP) percentages',
        'Game fairness certifications and audits'
      ]
    }
  ];

  const riskFactors = [
    {
      risk: 'Unlicensed Casinos',
      description: 'Casinos without proper licensing may not follow security standards',
      prevention: 'Always verify casino licenses before playing'
    },
    {
      risk: 'Weak Passwords',
      description: 'Simple passwords can be easily compromised by cybercriminals',
      prevention: 'Use strong, unique passwords and enable 2FA when available'
    },
    {
      risk: 'Public Wi-Fi Gaming',
      description: 'Unsecured networks can expose your data to interception',
      prevention: 'Avoid gambling on public Wi-Fi or use a VPN for protection'
    },
    {
      risk: 'Phishing Attacks',
      description: 'Fraudulent emails and websites designed to steal your credentials',
      prevention: 'Always access casinos directly through their official website'
    },
    {
      risk: 'Outdated Software',
      description: 'Old browsers and apps may have security vulnerabilities',
      prevention: 'Keep your devices and browsers updated with latest security patches'
    }
  ];

  const redFlags = [
    'No visible SSL certificate or security information',
    'Requests for unnecessary personal information',
    'Poor website design or numerous technical issues',
    'No clear terms and conditions or privacy policy',
    'Lack of customer support or contact information',
    'No license information or fake licensing claims',
    'Unrealistic bonus offers that seem too good to be true',
    'Poor reviews and ratings from other players',
    'Delayed or refused withdrawal payments',
    'No responsible gambling tools or information'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <Card>
            <div className="p-8 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Casino Security & Safety</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding online casino security is crucial for protecting your personal information and ensuring a safe gambling experience. Learn about the security measures that reputable casinos implement.
              </p>
            </div>
          </Card>

          {/* Security Features */}
          <div className="mt-8">
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Security Features</h2>
                <div className="grid gap-6">
                  {securityFeatures.map((feature, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{feature.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                          <p className="text-gray-700 leading-relaxed mb-4">{feature.description}</p>
                          
                          <h4 className="font-semibold text-gray-900 mb-2">Implementation Details:</h4>
                          <ul className="space-y-1">
                            {feature.implementation.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-700">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Security Checklist */}
          <div className="mt-8">
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Player Security Checklist</h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-bold text-green-800 mb-2">✅ Before You Play</h3>
                  <p className="text-green-700">
                    Use this checklist to verify a casino&apos;s security before creating an account.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-casino-red text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Check for HTTPS</h4>
                        <p className="text-sm text-gray-700">Ensure the URL starts with &quot;https://&quot; and displays a lock icon in your browser.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-casino-red text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Verify License</h4>
                        <p className="text-sm text-gray-700">Check for valid gambling licenses from recognized authorities.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-casino-red text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Read Privacy Policy</h4>
                        <p className="text-sm text-gray-700">Review how the casino handles and protects your personal data.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-casino-red text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">4</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Check Payment Methods</h4>
                        <p className="text-sm text-gray-700">Verify that reputable payment processors are supported.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-casino-red text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">5</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Research Reviews</h4>
                        <p className="text-sm text-gray-700">Read reviews from other players and casino review sites.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-casino-red text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">6</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Test Customer Support</h4>
                        <p className="text-sm text-gray-700">Contact support with a question to test their responsiveness.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-casino-red text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">7</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Check Game Fairness</h4>
                        <p className="text-sm text-gray-700">Look for RNG certifications and fair gaming seals.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-casino-red text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">8</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Review Terms & Conditions</h4>
                        <p className="text-sm text-gray-700">Understand withdrawal limits, bonus terms, and account policies.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Common Risks */}
          <div className="mt-8">
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Security Risks & Prevention</h2>
                <div className="space-y-4">
                  {riskFactors.map((risk, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-red-600 mb-1">⚠️ {risk.risk}</h3>
                          <p className="text-gray-700 text-sm mb-2">{risk.description}</p>
                        </div>
                        <div className="md:w-1/3">
                          <div className="bg-green-50 border border-green-200 rounded p-3">
                            <h4 className="font-semibold text-green-800 text-sm mb-1">Prevention:</h4>
                            <p className="text-green-700 text-sm">{risk.prevention}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Red Flags */}
          <div className="mt-8">
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Security Red Flags to Avoid</h2>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-red-800 mb-4">🚨 Warning Signs of Unsafe Casinos</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {redFlags.map((flag, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span className="text-red-700 text-sm">{flag}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-red-100 rounded-lg">
                    <p className="text-red-800 font-medium text-sm">
                      If you encounter any of these red flags, it&apos;s best to find a different casino. Your security and funds are worth the extra verification time.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Best Practices */}
          <div className="mt-8">
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Security Best Practices</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Security</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-casino-red rounded-full mt-2"></div>
                        <span className="text-gray-700 text-sm">Use strong, unique passwords for each casino account</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-casino-red rounded-full mt-2"></div>
                        <span className="text-gray-700 text-sm">Enable two-factor authentication when available</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-casino-red rounded-full mt-2"></div>
                        <span className="text-gray-700 text-sm">Log out completely after each session</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-casino-red rounded-full mt-2"></div>
                        <span className="text-gray-700 text-sm">Monitor your account regularly for unauthorized activity</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Security</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-casino-red rounded-full mt-2"></div>
                        <span className="text-gray-700 text-sm">Use trusted payment methods with fraud protection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-casino-red rounded-full mt-2"></div>
                        <span className="text-gray-700 text-sm">Set deposit and spending limits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-casino-red rounded-full mt-2"></div>
                        <span className="text-gray-700 text-sm">Keep records of all transactions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-casino-red rounded-full mt-2"></div>
                        <span className="text-gray-700 text-sm">Never share account details with others</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Conclusion */}
          <div className="mt-8">
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Secure While Gaming</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Online casino security has advanced significantly, but players must still take precautions to protect themselves. By choosing licensed casinos, using secure practices, and staying informed about potential risks, you can enjoy online gambling safely and securely.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 font-medium mb-2">💡 Remember:</p>
                  <p className="text-blue-700 text-sm">
                    If something doesn&apos;t feel right about a casino or if you notice any suspicious activity, trust your instincts and choose a different operator. Your security should always be the top priority.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
