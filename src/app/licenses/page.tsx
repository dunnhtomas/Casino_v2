import { Metadata } from 'next';
import { seoManager } from '@/lib/seo';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = seoManager.generateMetadata({
  title: 'Licenses & Regulation - Casino.ca',
  description: 'Learn about casino licensing, regulation authorities, and what makes a casino safe and legal to play at in Canada.',
  keywords: ['casino licenses', 'regulation', 'gaming authorities', 'safe casinos', 'legal gambling']
});

export default function LicensesPage() {
  const regulatoryBodies = [
    {
      name: 'Alcohol and Gaming Commission of Ontario (AGCO)',
      country: 'Canada (Ontario)',
      website: 'https://www.agco.ca',
      description: 'The AGCO regulates the alcohol, gaming, cannabis and horse racing sectors in accordance with the principles of honesty, integrity and social responsibility.',
      responsibilities: [
        'Licensing and regulating online casino operators',
        'Ensuring player protection and responsible gambling',
        'Monitoring compliance with provincial regulations',
        'Investigating complaints and violations'
      ],
      founded: '1998'
    },
    {
      name: 'Malta Gaming Authority (MGA)',
      country: 'Malta',
      website: 'https://www.mga.org.mt',
      description: 'The MGA is the single regulatory body responsible for the governance of all gaming activities in Malta, both land-based and remote.',
      responsibilities: [
        'Issuing gaming licenses',
        'Regulatory compliance and supervision',
        'Player protection and dispute resolution',
        'Anti-money laundering oversight'
      ],
      founded: '2001'
    },
    {
      name: 'UK Gambling Commission (UKGC)',
      country: 'United Kingdom',
      website: 'https://www.gamblingcommission.gov.uk',
      description: 'The UKGC regulates commercial gambling in Great Britain in partnership with licensing authorities.',
      responsibilities: [
        'Licensing gambling operators and software',
        'Setting technical standards',
        'Protecting children and vulnerable people',
        'Ensuring gambling is fair and open'
      ],
      founded: '2005'
    },
    {
      name: 'Curaçao Gaming Control Board',
      country: 'Curaçao',
      website: 'https://www.gcb.cw',
      description: 'The GCB supervises and controls the casino and online gaming industry in Curaçao.',
      responsibilities: [
        'Licensing gaming operations',
        'Monitoring compliance with regulations',
        'Protecting players and preventing crime',
        'Ensuring fair gaming practices'
      ],
      founded: '1996'
    }
  ];

  const licenseTypes = [
    {
      type: 'Class A License',
      description: 'Permits operation of land-based casinos and gaming facilities',
      requirements: ['High capital requirements', 'Extensive background checks', 'Detailed business plans'],
      validity: '10 years (renewable)'
    },
    {
      type: 'Class B License',
      description: 'Permits online gaming operations and remote gambling services',
      requirements: ['Technical system compliance', 'Player protection measures', 'Financial guarantees'],
      validity: '5 years (renewable)'
    },
    {
      type: 'Software License',
      description: 'Required for gaming software providers and platform operators',
      requirements: ['RNG certification', 'Game fairness testing', 'Security audits'],
      validity: '3 years (renewable)'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <Card className="mb-8">
            <div className="p-8 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Casino Licenses & Regulation</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding casino licensing and regulation is crucial for safe gambling. Learn about the authorities that ensure fair play and player protection.
              </p>
            </div>
          </Card>

          {/* Why Licensing Matters */}
          <Card className="mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Casino Licensing Matters</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Player Protection</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Licensed casinos must adhere to strict standards for player protection, including responsible gambling measures, dispute resolution processes, and secure handling of player funds.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Fair Gaming</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Regulatory bodies ensure games are fair through regular testing of Random Number Generators (RNGs) and verification of payout percentages.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Financial Security</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Licensed operators must maintain segregated player funds, provide financial guarantees, and undergo regular financial audits.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Compliance</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Licensing ensures casinos comply with anti-money laundering laws, tax obligations, and other legal requirements.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Major Regulatory Bodies */}
          <Card className="mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Major Gaming Regulatory Bodies</h2>
              <div className="grid gap-6">
                {regulatoryBodies.map((body, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <h3 className="text-xl font-bold text-gray-900">{body.name}</h3>
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {body.country}
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">{body.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              {body.responsibilities.map((resp, respIndex) => (
                                <li key={respIndex} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-casino-red rounded-full mt-2 flex-shrink-0"></div>
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600 space-y-2">
                              <div><strong>Established:</strong> {body.founded}</div>
                              <div>
                                <strong>Website:</strong>{' '}
                                <a href={body.website} target="_blank" rel="noopener noreferrer" className="text-casino-red hover:underline">
                                  {body.website}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* License Types */}
          <Card className="mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Gaming Licenses</h2>
              <div className="grid gap-6">
                {licenseTypes.map((license, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-casino-red text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{license.type}</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">{license.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              {license.requirements.map((req, reqIndex) => (
                                <li key={reqIndex} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">
                              <strong>Validity Period:</strong> {license.validity}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* How to Verify */}
          <Card className="mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Verify a Casino&apos;s License</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-yellow-800 mb-2">⚠️ Important Verification Steps</h3>
                <p className="text-yellow-700">
                  Always verify a casino&apos;s licensing before playing. Here&apos;s how to check if a casino is properly licensed:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-casino-red text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Check the Casino Footer</h4>
                      <p className="text-sm text-gray-700">Look for license information in the website footer, including license number and issuing authority.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-casino-red text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Visit Regulator Website</h4>
                      <p className="text-sm text-gray-700">Go to the regulatory body&apos;s official website and search their license database.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-casino-red text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Verify License Status</h4>
                      <p className="text-sm text-gray-700">Confirm the license is current, valid, and matches the casino&apos;s operating details.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-casino-red text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Check Third-Party Seals</h4>
                      <p className="text-sm text-gray-700">Look for eCOGRA, GLI, or other testing agency seals that verify fair gaming.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-casino-red text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">5</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Read Terms & Conditions</h4>
                      <p className="text-sm text-gray-700">Review the casino&apos;s terms for licensing information and regulatory compliance details.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-casino-red text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">6</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Research Online Reviews</h4>
                      <p className="text-sm text-gray-700">Check reputable casino review sites for additional verification and player feedback.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Red Flags */}
          <Card className="mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Red Flags to Avoid</h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-red-800 mb-4">🚨 Warning Signs of Unlicensed Casinos</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-red-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      No visible license information
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      Fake or expired licenses
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      Unclear terms and conditions
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      Poor customer support
                    </li>
                  </ul>
                  <ul className="space-y-2 text-red-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      Delayed or refused withdrawals
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      No responsible gambling tools
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      Unrealistic bonus offers
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      Negative player reviews
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Conclusion */}
          <Card>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Safe While Gambling Online</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Playing at licensed and regulated casinos is essential for your safety and security. Licensed operators are held to high standards and provide recourse if issues arise. Always do your research before signing up at any online casino.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium mb-2">✅ Remember:</p>
                <p className="text-green-700 text-sm">
                  If you&apos;re unsure about a casino&apos;s licensing status, it&apos;s better to choose a different, verified operator. Your safety and funds are worth the extra verification step.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
