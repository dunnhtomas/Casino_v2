import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

// Mobile app version data types
interface AppVersion {
  id: string;
  platform: 'ios' | 'android';
  version: string;
  versionCode?: number;
  releaseDate: Date;
  downloadUrl: string;
  changelog: string[];
  minOsVersion: string;
  features: string[];
  fileSize: string;
  screenshots: string[];
  rating: number;
  reviewCount: number;
  isCurrentVersion: boolean;
  securityFeatures: string[];
  supportedDevices: string[];
}

// Mock app version data
const appVersions: Record<string, AppVersion> = {
  ios: {
    id: 'ios-current',
    platform: 'ios',
    version: '2.4.1',
    versionCode: 241,
    releaseDate: new Date('2024-01-25'),
    downloadUrl: 'https://apps.apple.com/ca/app/casino-ca/id123456789',
    changelog: [
      'New jackpot tracking with real-time updates',
      'Improved live dealer video quality',
      'Enhanced security with biometric login',
      'Fixed crash issue on older iOS devices',
      'Updated game lobby with better sorting',
      'Performance improvements and bug fixes'
    ],
    minOsVersion: 'iOS 13.0',
    features: [
      'Face ID / Touch ID Authentication',
      'Live Dealer Games',
      'Real-time Jackpot Tracking',
      'Push Notifications for Bonuses',
      'Offline Game Mode',
      'Dark Mode Support',
      'Apple Pay Integration',
      'Siri Shortcuts',
      'Apple Watch Companion',
      'ARKit Casino Games'
    ],
    fileSize: '156.7 MB',
    screenshots: [
      '/images/mobile/ios-screenshot-1.jpg',
      '/images/mobile/ios-screenshot-2.jpg',
      '/images/mobile/ios-screenshot-3.jpg',
      '/images/mobile/ios-screenshot-4.jpg',
      '/images/mobile/ios-screenshot-5.jpg'
    ],
    rating: 4.8,
    reviewCount: 12847,
    isCurrentVersion: true,
    securityFeatures: [
      'End-to-end encryption',
      'Biometric authentication',
      'SSL/TLS security',
      'PCI DSS compliance',
      'Two-factor authentication',
      'Fraud detection'
    ],
    supportedDevices: [
      'iPhone 7 and later',
      'iPad (6th generation) and later',
      'iPad Air 2 and later',
      'iPad mini 4 and later',
      'iPad Pro (all models)',
      'iPod touch (7th generation)'
    ]
  },
  android: {
    id: 'android-current',
    platform: 'android',
    version: '2.4.0',
    versionCode: 240,
    releaseDate: new Date('2024-01-22'),
    downloadUrl: 'https://play.google.com/store/apps/details?id=com.casino.ca',
    changelog: [
      'Material You design updates',
      'Enhanced performance on Android 14',
      'New widget for quick game access',
      'Improved battery optimization',
      'Added support for foldable devices',
      'Bug fixes and stability improvements'
    ],
    minOsVersion: 'Android 7.0 (API level 24)',
    features: [
      'Fingerprint & Pattern Authentication',
      'Live Dealer Games',
      'Real-time Jackpot Tracking',
      'Push Notifications',
      'Offline Game Mode',
      'Dark Theme',
      'Google Pay Integration',
      'Android Auto Support',
      'Wear OS Companion',
      'Google Assistant Integration'
    ],
    fileSize: '89.3 MB',
    screenshots: [
      '/images/mobile/android-screenshot-1.jpg',
      '/images/mobile/android-screenshot-2.jpg',
      '/images/mobile/android-screenshot-3.jpg',
      '/images/mobile/android-screenshot-4.jpg',
      '/images/mobile/android-screenshot-5.jpg'
    ],
    rating: 4.6,
    reviewCount: 23156,
    isCurrentVersion: true,
    securityFeatures: [
      'End-to-end encryption',
      'Biometric authentication',
      'SSL/TLS security',
      'PCI DSS compliance',
      'Two-factor authentication',
      'Google Play Protect'
    ],
    supportedDevices: [
      'Phones with Android 7.0+',
      'Tablets with Android 7.0+',
      'Foldable devices',
      'Android TV boxes',
      'Chromebooks with Play Store'
    ]
  }
};

interface MobileVersionPageProps {
  params: Promise<{ version: string }>;
}

export async function generateMetadata({ params }: MobileVersionPageProps): Promise<Metadata> {
  const { version } = await params;
  const appVersion = appVersions[version as keyof typeof appVersions];
  
  if (!appVersion) {
    return {
      title: 'Mobile App Version Not Found | Casino.ca',
      description: 'The requested mobile app version could not be found.'
    };
  }
  
  const platformName = appVersion.platform === 'ios' ? 'iPhone & iPad' : 'Android';
  
  return {
    title: `Casino.ca Mobile App for ${platformName} | Version ${appVersion.version} | Download Now`,
    description: `Download Casino.ca mobile app v${appVersion.version} for ${platformName}. ${appVersion.features.slice(0, 3).join(', ')} and more. Rated ${appVersion.rating}/5 by ${appVersion.reviewCount.toLocaleString()} users.`,
    keywords: `casino mobile app, ${appVersion.platform} casino app, mobile casino, casino games app, ${platformName} gambling app`,
    openGraph: {
      title: `Casino.ca Mobile App - ${platformName}`,
      description: `Download v${appVersion.version} for the ultimate mobile casino experience`,
      type: 'website',
      images: [{
        url: appVersion.screenshots[0],
        width: 1200,
        height: 630,
        alt: `Casino.ca ${platformName} App`
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Casino.ca Mobile App - ${platformName}`,
      description: `Download v${appVersion.version} for the ultimate mobile casino experience`,
      images: [appVersion.screenshots[0]],
    },
    alternates: {
      canonical: `/mobile/${version}`,
    },
  };
}

export default async function MobileVersionPage({ params }: MobileVersionPageProps) {
  const { version } = await params;
  const appVersion = appVersions[version as keyof typeof appVersions];
  
  if (!appVersion) {
    notFound();
  }
  
  const platformName = appVersion.platform === 'ios' ? 'iPhone & iPad' : 'Android';
  const storeIcon = appVersion.platform === 'ios' ? '🍎' : '🤖';
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-CA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };
  
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">☆</span>);
    }
    
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">☆</span>);
    }
    
    return stars;
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* App Header */}
        <div className="mb-8">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-4xl font-bold">
              {storeIcon}
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Casino.ca Mobile App
              </h1>
              <div className="flex items-center gap-4 mb-2">
                <span className="text-2xl font-semibold text-blue-600">
                  {platformName}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  v{appVersion.version}
                </span>
                {appVersion.isCurrentVersion && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Latest Version
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {renderStars(appVersion.rating)}
                  <span className="ml-2 text-gray-600">
                    {appVersion.rating} ({appVersion.reviewCount.toLocaleString()} reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Download Button */}
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg"
              onClick={() => window.open(appVersion.downloadUrl, '_blank')}
            >
              Download for {platformName}
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              View Screenshots
            </Button>
          </div>
        </div>
        
        {/* App Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {appVersion.version}
            </div>
            <div className="text-sm text-gray-600">Current Version</div>
          </Card>
          
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">
              {appVersion.fileSize}
            </div>
            <div className="text-sm text-gray-600">Download Size</div>
          </Card>
          
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">
              {appVersion.rating}
            </div>
            <div className="text-sm text-gray-600">User Rating</div>
          </Card>
          
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">
              {appVersion.reviewCount.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Reviews</div>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What's New */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What's New in v{appVersion.version}</h2>
              <p className="text-gray-600 mb-4">Released {formatDate(appVersion.releaseDate)}</p>
              
              <ul className="space-y-2">
                {appVersion.changelog.map((change, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-700">{change}</span>
                  </li>
                ))}
              </ul>
            </Card>
            
            {/* Features */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">App Features</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {appVersion.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                      ✨
                    </span>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Screenshots */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Screenshots</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {appVersion.screenshots.map((screenshot, index) => (
                  <div key={index} className="aspect-[9/16] bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src={screenshot} 
                      alt={`Casino.ca ${platformName} App Screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjM1NSIgdmlld0JveD0iMCAwIDIwMCAzNTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIzNTUiIGZpbGw9IiNGM0Y0RjYiLz48dGV4dCB4PSIxMDAiIHk9IjE3OCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiPkFwcCBTY3JlZW5zaG90PC90ZXh0Pjwvc3ZnPg==';
                      }}
                    />
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Security Features */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Security & Privacy</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {appVersion.securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">
                      🔒
                    </span>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* System Requirements */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">System Requirements</h3>
              
              <div className="space-y-3">
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Minimum OS Version</div>
                  <div className="text-gray-700">{appVersion.minOsVersion}</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 mb-1">File Size</div>
                  <div className="text-gray-700">{appVersion.fileSize}</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Last Updated</div>
                  <div className="text-gray-700">{formatDate(appVersion.releaseDate)}</div>
                </div>
                
                {appVersion.versionCode && (
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Version Code</div>
                    <div className="text-gray-700">{appVersion.versionCode}</div>
                  </div>
                )}
              </div>
            </Card>
            
            {/* Supported Devices */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Supported Devices</h3>
              
              <ul className="space-y-2">
                {appVersion.supportedDevices.map((device, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    {device}
                  </li>
                ))}
              </ul>
            </Card>
            
            {/* Other Platform */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Other Platforms</h3>
              
              {Object.entries(appVersions)
                .filter(([key]) => key !== version)
                .map(([key, otherVersion]) => {
                  const otherPlatformName = otherVersion.platform === 'ios' ? 'iPhone & iPad' : 'Android';
                  return (
                    <div key={key} className="border-b border-gray-100 pb-3 last:border-b-0">
                      <h4 className="font-medium text-gray-900 mb-1">
                        <a href={`/mobile/${key}`} className="hover:text-blue-600">
                          {otherPlatformName} App
                        </a>
                      </h4>
                      <p className="text-sm text-gray-600">Version {otherVersion.version}</p>
                      <div className="flex items-center gap-1 mt-1">
                        {renderStars(otherVersion.rating).slice(0, 5)}
                        <span className="text-sm text-gray-600 ml-1">
                          {otherVersion.rating}
                        </span>
                      </div>
                    </div>
                  );
                })
              }
              
              <Button variant="outline" className="w-full mt-4">
                View All Platforms
              </Button>
            </Card>
            
            {/* Download CTA */}
            <Card className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              <h3 className="text-xl font-bold mb-2">Start Playing Today!</h3>
              <p className="mb-4 text-blue-100">
                Join thousands of players enjoying the ultimate mobile casino experience.
              </p>
              <Button 
                className="w-full bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => window.open(appVersion.downloadUrl, '_blank')}
              >
                Download Now
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for build optimization
export async function generateStaticParams() {
  return Object.keys(appVersions).map((version) => ({
    version,
  }));
}
