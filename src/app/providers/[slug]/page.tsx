import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { seoManager } from '@/lib/seo';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { RatingStars } from '@/components/ui/RatingStars';

// Mock data - In real app, this would come from database/CMS
const mockProviders = [
  {
    slug: 'evolution-gaming',
    name: 'Evolution Gaming',
    logo: '/images/providers/evolution-gaming.jpg',
    rating: 4.8,
    reviewCount: 2847,
    establishedYear: 2006,
    headquarters: 'Stockholm, Sweden',
    licenseAuthorities: ['Malta Gaming Authority', 'UK Gambling Commission', 'Alderney Gambling Control Commission'],
    specialties: ['Live Dealer Games', 'Game Shows', 'Roulette', 'Blackjack', 'Baccarat'],
    description: 'Evolution Gaming is the world&apos;s leading provider of live dealer casino games, offering an immersive gaming experience with professional dealers streaming from state-of-the-art studios.',
    gameCount: 500,
    popularGames: [
      { name: 'Lightning Roulette', type: 'Live Roulette', rtp: '97.30%' },
      { name: 'Crazy Time', type: 'Game Show', rtp: '96.08%' },
      { name: 'Dream Catcher', type: 'Money Wheel', rtp: '96.58%' },
      { name: 'Live Blackjack', type: 'Live Blackjack', rtp: '99.28%' },
      { name: 'Speed Baccarat', type: 'Live Baccarat', rtp: '98.94%' }
    ],
    features: [
      'HD Video Streaming',
      '24/7 Live Studios',
      'Multi-language Support',
      'Mobile Optimization',
      'Chat Functionality',
      'Multiple Camera Angles',
      'Advanced Game Statistics',
      'Tournament Features'
    ],
    awards: [
      '2023 Live Casino Supplier of the Year - EGR B2B Awards',
      '2022 Innovation in Casino Entertainment - ICE Awards',
      '2021 Live Casino Provider of the Year - Global Gaming Awards'
    ],
    partnerships: [
      'Bet365', 'William Hill', 'LeoVegas', 'Casumo', 'Mr Green'
    ],
    content: [
      {
        type: 'heading',
        text: 'About Evolution Gaming'
      },
      {
        type: 'paragraph',
        text: 'Founded in 2006, Evolution Gaming has established itself as the undisputed leader in live dealer casino games. With studios across Europe, North America, and Asia, Evolution provides authentic casino experiences to players worldwide through cutting-edge streaming technology and professional dealers.'
      },
      {
        type: 'heading',
        text: 'Game Portfolio'
      },
      {
        type: 'paragraph',
        text: 'Evolution&apos;s extensive portfolio includes classic table games like blackjack, roulette, and baccarat, as well as innovative game shows such as Crazy Time, Monopoly Live, and Deal or No Deal. Each game is designed with player engagement and entertainment value in mind.'
      }
    ]
  },
  {
    slug: 'netent',
    name: 'NetEnt',
    logo: '/images/providers/netent.jpg',
    rating: 4.7,
    reviewCount: 1923,
    establishedYear: 1996,
    headquarters: 'Stockholm, Sweden',
    licenseAuthorities: ['Malta Gaming Authority', 'UK Gambling Commission'],
    specialties: ['Video Slots', 'Progressive Jackpots', 'Mobile Games'],
    description: 'NetEnt is a premium supplier of digitally distributed gaming systems used by the world&apos;s most successful online casino operators.',
    gameCount: 200,
    popularGames: [
      { name: 'Starburst', type: 'Video Slot', rtp: '96.09%' },
      { name: 'Gonzo&apos;s Quest', type: 'Video Slot', rtp: '95.97%' },
      { name: 'Mega Fortune', type: 'Progressive Slot', rtp: '96.00%' }
    ],
    features: ['HTML5 Technology', 'Mobile First Design', 'Branded Content'],
    awards: ['2023 Slot Provider of the Year'],
    partnerships: ['Betsson', 'Kindred Group', 'Flutter Entertainment'],
    content: []
  }
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const provider = mockProviders.find(p => p.slug === slug);
  
  if (!provider) {
    return {
      title: 'Provider Not Found',
      description: 'The requested game provider could not be found.'
    };
  }

  return seoManager.generateMetadata({
    title: `${provider.name} - Games & Review | Casino.ca`,
    description: provider.description,
    keywords: [provider.name, ...provider.specialties, 'casino games', 'online casino'],
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString()
  });
}

export function generateStaticParams() {
  return mockProviders.map((provider) => ({
    slug: provider.slug,
  }));
}

export default async function ProviderDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const provider = mockProviders.find(p => p.slug === slug);

  if (!provider) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://casino.ca"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Providers",
        "item": "https://casino.ca/providers"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": provider.name,
        "item": `https://casino.ca/providers/${provider.slug}`
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": provider.name,
    "description": provider.description,
    "foundingDate": provider.establishedYear.toString(),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": provider.headquarters
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": provider.rating,
      "reviewCount": provider.reviewCount
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-casino-red">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/providers" className="hover:text-casino-red">Providers</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{provider.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Provider Header */}
            <Card className="mb-8">
              <div className="flex flex-col md:flex-row gap-6 p-6">
                <div className="md:w-48 flex-shrink-0">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <div className="w-32 h-16 mx-auto bg-gray-100 rounded flex items-center justify-center mb-4">
                      <span className="text-sm font-medium text-gray-600">{provider.name} Logo</span>
                    </div>
                    <h1 className="text-xl font-bold text-gray-900 mb-2">{provider.name}</h1>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <RatingStars rating={provider.rating} />
                      <span className="text-sm font-medium">{provider.rating}</span>
                    </div>
                    <p className="text-sm text-gray-600">{provider.reviewCount.toLocaleString()} reviews</p>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <span className="text-gray-600">Established:</span>
                      <span className="font-medium ml-2">{provider.establishedYear}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Headquarters:</span>
                      <span className="font-medium ml-2">{provider.headquarters}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Games:</span>
                      <span className="font-medium ml-2">{provider.gameCount}+</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Rating:</span>
                      <span className="font-medium ml-2">{provider.rating}/5</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {provider.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {provider.specialties.map((specialty, index) => (
                      <span 
                        key={index}
                        className="bg-casino-red text-white px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Popular Games */}
            <Card className="mb-8">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Games</h2>
                <div className="grid gap-4">
                  {provider.popularGames.map((game, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-casino-red transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{game.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{game.type}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-sm text-gray-600">RTP</span>
                          <div className="font-bold text-casino-red">{game.rtp}</div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Play Now</Button>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Features */}
            <Card className="mb-8">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {provider.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-casino-red rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Content */}
            {provider.content.length > 0 && (
              <Card>
                <div className="p-6">
                  <div className="prose prose-lg max-w-none">
                    {provider.content.map((section, index) => {
                      switch (section.type) {
                        case 'heading':
                          return (
                            <h2 key={index} className="text-2xl font-bold text-gray-900 mb-4">
                              {section.text}
                            </h2>
                          );
                        case 'paragraph':
                          return (
                            <p key={index} className="text-gray-700 leading-relaxed mb-6">
                              {section.text}
                            </p>
                          );
                        default:
                          return null;
                      }
                    })}
                  </div>
                </div>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* License Authorities */}
            <Card className="mb-6">
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Licensed By</h3>
                <div className="space-y-2">
                  {provider.licenseAuthorities.map((authority, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{authority}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Awards */}
            {provider.awards.length > 0 && (
              <Card className="mb-6">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Awards</h3>
                  <div className="space-y-3">
                    {provider.awards.map((award, index) => (
                      <div key={index} className="border-l-4 border-casino-red pl-3">
                        <p className="text-sm font-medium text-gray-900">{award}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            )}

            {/* Partnerships */}
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Key Partnerships</h3>
                <div className="space-y-2">
                  {provider.partnerships.map((partner, index) => (
                    <div key={index} className="text-sm text-gray-700">{partner}</div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
