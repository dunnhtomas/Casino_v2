import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { RatingStars } from '@/components/ui/RatingStars';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ServerStructuredData } from '@/components/StructuredData';
import { getBreadcrumbStructuredData } from '@/lib/structured-data';

// Mock data - In real app, this would come from CMS/database
const reviewsData = {
  'spin-casino-expert-review': {
    id: 1,
    title: 'Spin Casino Expert Review 2025',
    slug: 'spin-casino-expert-review',
    casino: 'Spin Casino',
    casinoSlug: 'spin-casino',
    rating: 4.7,
    reviewCount: 1247,
    author: 'Sarah Mitchell',
    authorBio: 'Senior Casino Analyst with 8+ years of experience reviewing online casinos',
    datePublished: '2025-01-15',
    dateUpdated: '2025-01-15',
    readTime: 12,
    summary: 'Spin Casino stands out as one of Canada\'s premier online gambling destinations, offering an exceptional gaming experience with over 700 games, generous bonuses, and top-tier security measures.',
    verdict: 'Excellent choice for Canadian players seeking a premium online casino experience with extensive game selection and reliable customer support.',
    pros: [
      'Huge selection of 700+ games from top providers',
      'Generous welcome bonus up to $1,000',
      'Excellent mobile compatibility',
      'Fast and secure payment processing',
      '24/7 customer support in multiple languages',
      'Licensed by Malta Gaming Authority',
      'Regular promotions and loyalty program'
    ],
    cons: [
      'Geographic restrictions in some provinces',
      'Withdrawal limits could be higher',
      'Live chat not always immediately available',
      'Bonus terms could be more favorable'
    ],
    breakdown: {
      gameSelection: { score: 4.8, review: 'Outstanding variety with slots, table games, and live dealer options from Microgaming, NetEnt, and Evolution Gaming.' },
      bonuses: { score: 4.6, review: 'Competitive welcome package and ongoing promotions, though wagering requirements are industry standard.' },
      security: { score: 4.9, review: 'Top-tier security with SSL encryption, MGA license, and responsible gambling tools.' },
      support: { score: 4.5, review: 'Good customer service with multiple contact methods, though response times vary.' },
      payments: { score: 4.7, review: 'Wide range of payment methods including Interac, with fast processing times.' },
      mobile: { score: 4.8, review: 'Excellent mobile experience with responsive design and dedicated apps.' }
    },
    featured: true,
    tags: ['Expert Review', 'Premium Casino', 'Mobile Friendly', 'Canadian Licensed']
  },
  'royal-vegas-comprehensive-analysis': {
    id: 2,
    title: 'Royal Vegas Comprehensive Analysis 2025',
    slug: 'royal-vegas-comprehensive-analysis',
    casino: 'Royal Vegas',
    casinoSlug: 'royal-vegas',
    rating: 4.5,
    reviewCount: 892,
    author: 'Michael Chen',
    authorBio: 'Professional gambling consultant and industry expert since 2015',
    datePublished: '2024-12-20',
    dateUpdated: '2025-01-08',
    readTime: 15,
    summary: 'Royal Vegas delivers a classic casino experience with a focus on traditional table games and slots, backed by years of industry experience and a solid reputation among Canadian players.',
    verdict: 'Solid choice for players who value stability and traditional casino gaming, with room for improvement in modern features.',
    pros: [
      'Established reputation since 2000',
      'Strong focus on table games',
      'Reliable customer support',
      'Comprehensive loyalty program',
      'Multiple payment options',
      'Regular player tournaments'
    ],
    cons: [
      'Dated website design',
      'Limited modern slot selection',
      'Slower mobile experience',
      'Higher minimum deposits',
      'Fewer promotional offers'
    ],
    breakdown: {
      gameSelection: { score: 4.3, review: 'Good selection focused on classics, but could use more modern titles and live dealer games.' },
      bonuses: { score: 4.2, review: 'Standard bonus offerings with loyalty program benefits for regular players.' },
      security: { score: 4.8, review: 'Excellent security record with proper licensing and player protection measures.' },
      support: { score: 4.4, review: 'Reliable customer service with knowledgeable staff, though limited hours.' },
      payments: { score: 4.5, review: 'Traditional payment methods with reliable processing, though fewer modern options.' },
      mobile: { score: 3.9, review: 'Functional mobile site but lacks the polish of newer casino platforms.' }
    },
    featured: false,
    tags: ['Established Casino', 'Table Games', 'Loyalty Program', 'Traditional']
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const review = reviewsData[slug as keyof typeof reviewsData];
  
  if (!review) {
    return { title: 'Review Not Found' };
  }

  return {
    title: `${review.title} - ${review.rating}/5 Stars | Casino.ca`,
    description: `${review.summary} Read our complete ${review.casino} review by ${review.author}. Rating: ${review.rating}/5 based on ${review.reviewCount} reviews.`,
    keywords: [
      `${review.casino.toLowerCase()} review`,
      'online casino review',
      'canadian casino',
      'expert review',
      review.author.toLowerCase()
    ],
    openGraph: {
      title: `${review.title} - Expert Analysis`,
      description: review.summary,
      type: 'article',
    },
  };
}

export default async function ReviewPage({ params }: PageProps) {
  const { slug } = await params;
  const review = reviewsData[slug as keyof typeof reviewsData];

  if (!review) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://casino.ca' },
    { name: 'Reviews', url: 'https://casino.ca/reviews' },
    { name: review.title, url: `https://casino.ca/reviews/${review.slug}` }
  ];

  const structuredData = [
    getBreadcrumbStructuredData(breadcrumbs),
    {
      '@context': 'https://schema.org',
      '@type': 'Review',
      name: review.title,
      reviewBody: review.summary,
      itemReviewed: {
        '@type': 'Organization',
        name: review.casino,
        url: `https://casino.ca/casinos/${review.casinoSlug}`
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1
      },
      author: {
        '@type': 'Person',
        name: review.author
      },
      datePublished: review.datePublished,
      dateModified: review.dateUpdated
    }
  ];

  const averageScore = Object.values(review.breakdown).reduce((sum, item) => sum + item.score, 0) / Object.keys(review.breakdown).length;

  return (
    <>
      <ServerStructuredData data={structuredData} />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Breadcrumbs */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Home</Link></li>
                <li><span className="text-gray-400 mx-2">/</span></li>
                <li><Link href="/reviews" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Reviews</Link></li>
                <li><span className="text-gray-400 mx-2">/</span></li>
                <li><span className="text-gray-900 dark:text-white font-medium">{review.title}</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Review Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Expert Review
                  </span>
                  {review.featured && (
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{review.title}</h1>
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <RatingStars rating={review.rating} size="lg" />
                    <span className="text-2xl font-semibold">{review.rating}/5</span>
                  </div>
                  <span className="text-blue-200">Based on {review.reviewCount} reviews</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-blue-200">
                  <div>By {review.author}</div>
                  <div>•</div>
                  <div>{review.readTime} min read</div>
                  <div>•</div>
                  <div>Updated {new Date(review.dateUpdated).toLocaleDateString()}</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 rounded-xl p-6 mb-4">
                  <div className="text-xs font-semibold uppercase tracking-wide mb-2">Overall Score</div>
                  <div className="text-4xl font-bold mb-2">{averageScore.toFixed(1)}</div>
                  <RatingStars rating={averageScore} size="md" />
                  <div className="mt-4">
                    <Link href={`/casinos/${review.casinoSlug}`}>
                      <Button variant="secondary">
                        View {review.casino}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Review Summary */}
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Review Summary</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {review.summary}
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Our Verdict</h3>
                  <p className="text-blue-800 dark:text-blue-300">{review.verdict}</p>
                </div>
              </section>

              {/* Detailed Breakdown */}
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Detailed Analysis</h2>
                <div className="space-y-6">
                  {Object.entries(review.breakdown).map(([category, data]) => (
                    <div key={category} className="border-b border-gray-100 dark:border-gray-700 pb-4 last:border-0">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white capitalize">
                          {category.replace(/([A-Z])/g, ' $1').trim()}
                        </h3>
                        <div className="flex items-center gap-2">
                          <RatingStars rating={data.score} size="sm" />
                          <span className="font-semibold text-gray-900 dark:text-white">{data.score}/5</span>
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{data.review}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Pros and Cons */}
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Pros & Cons</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Pros
                    </h3>
                    <ul className="space-y-2">
                      {review.pros.map((pro, index) => (
                        <li key={index} className="text-gray-700 dark:text-gray-300 flex items-start">
                          <span className="text-green-500 mr-2 mt-1">+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-red-700 dark:text-red-400 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      Cons
                    </h3>
                    <ul className="space-y-2">
                      {review.cons.map((con, index) => (
                        <li key={index} className="text-gray-700 dark:text-gray-300 flex items-start">
                          <span className="text-red-500 mr-2 mt-1">-</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Reviewer Info */}
              <Card padding="lg">
                <>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">About the Reviewer</h3>
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">
                        {review.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{review.author}</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    {review.authorBio}
                  </p>
                </>
              </Card>

              {/* Review Stats */}
              <Card padding="lg">
                <>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Review Stats</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Overall Rating:</span>
                      <span className="text-gray-900 dark:text-white font-medium">{review.rating}/5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Total Reviews:</span>
                      <span className="text-gray-900 dark:text-white font-medium">{review.reviewCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Published:</span>
                      <span className="text-gray-900 dark:text-white font-medium">
                        {new Date(review.datePublished).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Read Time:</span>
                      <span className="text-gray-900 dark:text-white font-medium">{review.readTime} min</span>
                    </div>
                  </div>
                </>
              </Card>

              {/* Score Breakdown */}
              <Card padding="lg">
                <>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Score Breakdown</h3>
                  <div className="space-y-3">
                    {Object.entries(review.breakdown).map(([category, data]) => (
                      <div key={category} className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400 capitalize text-sm">
                          {category.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div 
                              className={`bg-blue-600 h-2 rounded-full`}
                              style={{ width: `${Math.round((data.score / 5) * 100)}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">{data.score}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              </Card>

              {/* Tags */}
              <Card padding="lg">
                <>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {review.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              </Card>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-6 text-white text-center">
                <h3 className="text-lg font-bold mb-2">Ready to Play?</h3>
                <p className="text-sm text-green-100 mb-4">
                  Visit {review.casino} and start your gaming experience today
                </p>
                <Button variant="secondary" fullWidth>
                  Visit {review.casino}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
