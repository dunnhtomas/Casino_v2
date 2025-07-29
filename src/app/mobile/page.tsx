import { Metadata } from 'next';
import Link from 'next/link';
import { seoManager } from '@/lib/seo';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = seoManager.generateMetadata({
  title: 'Mobile Casino Gaming - Play on iOS & Android | Casino.ca',
  description: 'Discover the best mobile casino apps and mobile-optimized sites for iOS and Android. Play your favorite casino games anywhere, anytime.',
  keywords: ['mobile casino', 'casino app', 'iOS casino', 'Android casino', 'mobile gambling']
});

export default function MobilePage() {
  const mobileFeatures = [
    {
      title: 'Touch-Optimized Games',
      description: 'All games are specially designed for touch screens with intuitive controls and responsive interfaces.',
      icon: '📱'
    },
    {
      title: 'Offline Mode',
      description: 'Some games offer offline play capability, allowing you to enjoy certain features without an internet connection.',
      icon: '📶'
    },
    {
      title: 'Push Notifications',
      description: 'Receive alerts about new bonuses, promotions, and important account updates directly on your device.',
      icon: '🔔'
    },
    {
      title: 'Biometric Security',
      description: 'Use fingerprint or face recognition for quick and secure access to your casino account.',
      icon: '🔐'
    },
    {
      title: 'Quick Deposit',
      description: 'One-tap deposits using saved payment methods make funding your account faster than ever.',
      icon: '⚡'
    },
    {
      title: 'Live Chat Support',
      description: 'Access customer support directly through the mobile app with integrated live chat functionality.',
      icon: '💬'
    }
  ];

  const appVsBrowser = {
    apps: {
      pros: [
        'Faster loading times',
        'Better performance and graphics',
        'Offline functionality for some games',
        'Push notifications',
        'Biometric login options',
        'Optimized user interface',
        'Direct access from home screen'
      ],
      cons: [
        'Takes up storage space',
        'Requires app store approval',
        'May need frequent updates',
        'App store restrictions in some regions'
      ]
    },
    browser: {
      pros: [
        'No download required',
        'Always up-to-date',
        'Works on any device with browser',
        'No storage space needed',
        'Instant access via bookmark',
        'Cross-platform compatibility'
      ],
      cons: [
        'Requires internet connection',
        'May be slower than apps',
        'Limited offline functionality',
        'Browser-dependent performance'
      ]
    }
  };

  const deviceRequirements = {
    ios: {
      minimum: 'iOS 12.0 or later',
      recommended: 'iOS 15.0 or later',
      devices: ['iPhone 6s and newer', 'iPad Air 2 and newer', 'iPad mini 4 and newer'],
      storage: '100-500MB depending on casino'
    },
    android: {
      minimum: 'Android 7.0 (API level 24)',
      recommended: 'Android 10.0 or later',
      devices: ['Most Android phones from 2017+', 'Android tablets with 2GB+ RAM'],
      storage: '100-500MB depending on casino'
    }
  };

  const mobileGames = [
    {
      category: 'Slots',
      description: 'Perfect for mobile with simple tap-to-spin controls and vertical layouts.',
      popularity: '95%',
      examples: ['Starburst Mobile', 'Book of Dead Touch', 'Gonzo\'s Quest Mobile']
    },
    {
      category: 'Blackjack',
      description: 'Touch-friendly card games with easy-to-use betting controls.',
      popularity: '85%',
      examples: ['Mobile Blackjack Pro', 'Touch Blackjack', 'Speed Blackjack Mobile']
    },
    {
      category: 'Roulette',
      description: 'Optimized wheel games with zoom features and quick bet placement.',
      popularity: '80%',
      examples: ['Mobile European Roulette', 'Lightning Roulette Touch', 'Auto Roulette Mobile']
    },
    {
      category: 'Live Dealer',
      description: 'HD streaming games optimized for mobile screens with chat functionality.',
      popularity: '75%',
      examples: ['Live Blackjack Mobile', 'Mobile Live Roulette', 'Live Baccarat Touch']
    }
  ];

  const mobileTips = [
    'Enable Wi-Fi when possible for the best streaming quality',
    'Keep your app updated for the latest features and security patches',
    'Use headphones for a more immersive live dealer experience',
    'Set up biometric login for quick and secure access',
    'Monitor your battery life during long gaming sessions',
    'Close other apps to improve performance and reduce lag',
    'Use Do Not Disturb mode to avoid interruptions during play',
    'Keep your device charged - mobile gaming can drain battery quickly'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <Card>
            <div className="p-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-xl">
              <h1 className="text-4xl font-bold mb-4">Mobile Casino Gaming</h1>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                Take your favorite casino games anywhere with mobile-optimized platforms and dedicated apps. Experience seamless gaming on iOS and Android devices.
              </p>
            </div>
            <div className="p-6 bg-white">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                  <p className="text-gray-600">Mobile Games</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">iOS/Android</div>
                  <p className="text-gray-600">Compatible</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <p className="text-gray-600">Mobile Support</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">Instant</div>
                  <p className="text-gray-600">Play Anywhere</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Mobile Features */}
          <div className="mt-8">
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Mobile Casino Features</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mobileFeatures.map((feature, index) => (
                    <div key={index} className="text-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                      <div className="text-4xl mb-3">{feature.icon}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* App vs Browser */}
          <div className="mt-8">
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Mobile App vs Mobile Browser</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      📱 Mobile Apps
                    </h3>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-green-700 mb-2">Advantages:</h4>
                      <ul className="space-y-1">
                        {appVsBrowser.apps.pros.map((pro, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Disadvantages:</h4>
                      <ul className="space-y-1">
                        {appVsBrowser.apps.cons.map((con, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      🌐 Mobile Browser
                    </h3>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-green-700 mb-2">Advantages:</h4>
                      <ul className="space-y-1">
                        {appVsBrowser.browser.pros.map((pro, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Disadvantages:</h4>
                      <ul className="space-y-1">
                        {appVsBrowser.browser.cons.map((con, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Device Requirements */}
          <div className="mt-8">
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Device Requirements</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6 bg-gradient-to-br from-gray-50 to-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      🍎 iOS Requirements
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-semibold text-gray-700">Minimum:</span>
                        <span className="ml-2 text-gray-600">{deviceRequirements.ios.minimum}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Recommended:</span>
                        <span className="ml-2 text-gray-600">{deviceRequirements.ios.recommended}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Storage:</span>
                        <span className="ml-2 text-gray-600">{deviceRequirements.ios.storage}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Compatible Devices:</span>
                        <ul className="mt-1 ml-2">
                          {deviceRequirements.ios.devices.map((device, index) => (
                            <li key={index} className="text-gray-600">• {device}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6 bg-gradient-to-br from-green-50 to-blue-50">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      🤖 Android Requirements
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-semibold text-gray-700">Minimum:</span>
                        <span className="ml-2 text-gray-600">{deviceRequirements.android.minimum}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Recommended:</span>
                        <span className="ml-2 text-gray-600">{deviceRequirements.android.recommended}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Storage:</span>
                        <span className="ml-2 text-gray-600">{deviceRequirements.android.storage}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Compatible Devices:</span>
                        <ul className="mt-1 ml-2">
                          {deviceRequirements.android.devices.map((device, index) => (
                            <li key={index} className="text-gray-600">• {device}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Popular Mobile Games */}
          <div className="mt-8">
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Mobile Casino Games</h2>
                <div className="grid gap-4">
                  {mobileGames.map((game, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-bold text-gray-900">{game.category}</h3>
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                              {game.popularity} Popular
                            </span>
                          </div>
                          <p className="text-gray-700 text-sm mb-3">{game.description}</p>
                          <div>
                            <span className="text-sm font-semibold text-gray-700">Popular Examples: </span>
                            <span className="text-sm text-gray-600">{game.examples.join(', ')}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Mobile Gaming Tips */}
          <div className="mt-8">
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Mobile Gaming Tips</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-bold text-blue-800 mb-2">📋 Optimize Your Mobile Experience</h3>
                  <p className="text-blue-700 text-sm">
                    Follow these tips to get the most out of your mobile casino gaming experience.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-3">
                  {mobileTips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">
                        {index + 1}
                      </div>
                      <p className="text-sm text-gray-700 flex-1">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Security on Mobile */}
          <div className="mt-8">
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Mobile Security</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                        <span className="text-gray-700 text-sm">End-to-end encryption for all transactions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                        <span className="text-gray-700 text-sm">Biometric authentication (fingerprint/face)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                        <span className="text-gray-700 text-sm">Automatic session timeouts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                        <span className="text-gray-700 text-sm">Secure payment processing</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Best Practices</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                        <span className="text-gray-700 text-sm">Only download apps from official stores</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                        <span className="text-gray-700 text-sm">Keep your device and apps updated</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                        <span className="text-gray-700 text-sm">Avoid gaming on public Wi-Fi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                        <span className="text-gray-700 text-sm">Enable screen lock and auto-logout</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-8">
            <Card>
              <div className="p-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl">
                <h2 className="text-2xl font-bold mb-4">Start Mobile Gaming Today</h2>
                <p className="text-lg opacity-90 mb-6">
                  Discover the best mobile casinos and start playing your favorite games on the go.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/reviews" 
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                  >
                    Find Mobile Casinos
                  </Link>
                  <Link 
                    href="/games" 
                    className="border border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
                  >
                    Browse Mobile Games
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
