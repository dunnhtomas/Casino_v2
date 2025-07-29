'use client';

import React, { useState } from 'react';
import { ServerStructuredData } from '@/components/StructuredData';
import { getReviewListStructuredData, getBreadcrumbStructuredData } from '@/lib/structured-data';
import { ReviewCard, Review } from '@/components/review/ReviewCard';
import { FilterSidebar } from '@/components/review/FilterSidebar';
import { SortDropdown } from '@/components/review/SortDropdown';



// Mock data - In real app, this would come from CMS/database
const reviewsData = [
  {
    id: 1,
    casino: 'Spin Casino',
    casinoSlug: 'spin-casino',
    rating: 4.8,
    expertRating: 4.9,
    playerRating: 4.7,
    reviewCount: 1247,
    headline: 'Outstanding All-Around Casino Experience',
    summary: 'Spin Casino excels in every category with exceptional game selection, fast payouts, and excellent customer support.',
    pros: [
      'Over 700 premium games',
      'Lightning-fast withdrawals',
      'Excellent mobile app',
      'Top-tier customer support',
      'Licensed by AGCO'
    ],
    cons: [
      'High wagering requirements',
      'Limited live chat hours',
      'Geographic restrictions'
    ],
    gameRating: 4.9,
    bonusRating: 4.5,
    safetyRating: 5.0,
    supportRating: 4.8,
    payoutRating: 4.7,
    datePublished: '2025-01-15',
    dateUpdated: '2025-01-20',
    author: 'Michael Chen',
    featured: true,
    verified: true,
    lastUpdated: '2025-01-20'
  },
  {
    id: 2,
    casino: 'Royal Vegas',
    casinoSlug: 'royal-vegas',
    rating: 4.6,
    expertRating: 4.7,
    playerRating: 4.5,
    reviewCount: 892,
    headline: 'Classic Casino with Modern Features',
    summary: 'Royal Vegas combines traditional casino elegance with cutting-edge gaming technology and generous bonuses.',
    pros: [
      'Established reputation since 2000',
      'Huge progressive jackpots',
      'VIP loyalty program',
      'Multiple payment options',
      'Regular promotions'
    ],
    cons: [
      'Older website design',
      'Slower customer support',
      'Limited live dealer games'
    ],
    gameRating: 4.5,
    bonusRating: 4.8,
    safetyRating: 4.9,
    supportRating: 4.2,
    payoutRating: 4.6,
    datePublished: '2025-01-10',
    dateUpdated: '2025-01-18',
    author: 'Sarah Johnson',
    featured: true,
    verified: true,
    lastUpdated: '2025-01-18'
  },
  {
    id: 3,
    casino: 'Jackpot City',
    casinoSlug: 'jackpot-city',
    rating: 4.7,
    expertRating: 4.8,
    playerRating: 4.6,
    reviewCount: 1156,
    headline: 'Jackpot Paradise for Slot Enthusiasts',
    summary: 'Jackpot City lives up to its name with massive progressive jackpots and an impressive collection of slot games.',
    pros: [
      'Massive progressive jackpots',
      'Excellent slot selection',
      'Mobile-optimized platform',
      'Quick registration process',
      'Generous welcome package'
    ],
    cons: [
      'Limited table game variety',
      'Complex bonus terms',
      'Withdrawal processing delays'
    ],
    gameRating: 4.8,
    bonusRating: 4.6,
    safetyRating: 4.8,
    supportRating: 4.5,
    payoutRating: 4.4,
    datePublished: '2025-01-12',
    dateUpdated: '2025-01-19',
    author: 'David Rodriguez',
    featured: false,
    verified: true,
    lastUpdated: '2025-01-19'
  },
  {
    id: 4,
    casino: 'Betway Casino',
    casinoSlug: 'betway-casino',
    rating: 4.3,
    expertRating: 4.4,
    playerRating: 4.2,
    reviewCount: 743,
    headline: 'Sports Betting Giant Enters Casino Market',
    summary: 'Betway leverages its sports betting expertise to create a solid casino platform with competitive offerings.',
    pros: [
      'Strong brand reputation',
      'Integrated sports betting',
      'Fast payouts to e-wallets',
      'Good game variety',
      'Regular promotions'
    ],
    cons: [
      'Newer to casino market',
      'Limited live dealer selection',
      'Basic loyalty program'
    ],
    gameRating: 4.2,
    bonusRating: 4.3,
    safetyRating: 4.6,
    supportRating: 4.4,
    payoutRating: 4.5,
    datePublished: '2025-01-08',
    dateUpdated: '2025-01-16',
    author: 'Lisa Wang',
    featured: false,
    verified: true,
    lastUpdated: '2025-01-16'
  },
  {
    id: 5,
    casino: 'LeoVegas',
    casinoSlug: 'leovegas',
    rating: 4.5,
    expertRating: 4.6,
    playerRating: 4.4,
    reviewCount: 967,
    headline: 'Mobile-First Casino Innovation',
    summary: 'LeoVegas pioneered mobile casino gaming and continues to set the standard for mobile optimization.',
    pros: [
      'Best-in-class mobile experience',
      'Award-winning platform',
      'Extensive live dealer section',
      'Fast registration and KYC',
      'Multiple software providers'
    ],
    cons: [
      'High minimum deposits',
      'Complex wagering requirements',
      'Limited customer support hours'
    ],
    gameRating: 4.7,
    bonusRating: 4.2,
    safetyRating: 4.7,
    supportRating: 4.3,
    payoutRating: 4.6,
    datePublished: '2025-01-14',
    dateUpdated: '2025-01-21',
    author: 'Robert Kim',
    featured: true,
    verified: true,
    lastUpdated: '2025-01-21'
  },
  {
    id: 6,
    casino: 'Casumo',
    casinoSlug: 'casumo',
    rating: 4.4,
    expertRating: 4.5,
    playerRating: 4.3,
    reviewCount: 654,
    headline: 'Gamified Casino Adventure',
    summary: 'Casumo transforms casino gaming into an adventure with unique gamification elements and engaging rewards.',
    pros: [
      'Unique gamification system',
      'No wagering requirements on some bonuses',
      'Quick withdrawal processing',
      'Innovative user interface',
      'Regular tournaments'
    ],
    cons: [
      'Limited traditional promotions',
      'Smaller game library',
      'Learning curve for new users'
    ],
    gameRating: 4.3,
    bonusRating: 4.6,
    safetyRating: 4.5,
    supportRating: 4.4,
    payoutRating: 4.7,
    datePublished: '2025-01-11',
    dateUpdated: '2025-01-17',
    author: 'Emma Thompson',
    featured: false,
    verified: true,
    lastUpdated: '2025-01-17'
  }
];

const breadcrumbs = [
  { name: 'Home', url: 'https://casino.ca' },
  { name: 'Reviews', url: 'https://casino.ca/reviews' }
];

const structuredData = [
  getReviewListStructuredData(reviewsData),
  getBreadcrumbStructuredData(breadcrumbs)
];

export default function ReviewsPage() {
  const [selectedFilters, setSelectedFilters] = useState({
    category: '',
    rating: null as number | null,
    author: ''
  });
  const [sortBy, setSortBy] = useState('newest');

  const handleFilterChange = (filterType: 'category' | 'rating' | 'author', value: string | number | null) => {
    setSelectedFilters((prev: typeof selectedFilters) => ({
      ...prev,
      [filterType]: value
    }));
  };

  // Transform review data to match Review interface
  const transformReview = (review: typeof reviewsData[0]): Review => ({
    id: review.id,
    title: review.headline,
    slug: review.casinoSlug,
    excerpt: review.summary,
    rating: review.rating,
    author: review.author,
    date: review.datePublished,
    category: 'Casino Review',
    readTime: '5 min',
    image: `/images/casinos/${review.casinoSlug}-logo.jpg`,
    featured: review.featured
  });

  const featuredReviews = reviewsData.filter(review => review.featured).map(transformReview);
  const regularReviews = reviewsData.filter(review => !review.featured).map(transformReview);
  const averageRating = reviewsData.reduce((sum, review) => sum + review.rating, 0) / reviewsData.length;
  const totalReviews = reviewsData.reduce((sum, review) => sum + review.reviewCount, 0);

  return (
    <>
      <ServerStructuredData data={structuredData} />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-700 text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Expert Casino Reviews
              </h1>
              <p className="text-xl md:text-2xl text-orange-100 mb-6">
                Unbiased expert reviews and real player ratings to help you choose the perfect casino
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">{reviewsData.length}</div>
                  <div className="text-sm text-orange-200">Expert Reviews</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">{totalReviews.toLocaleString()}+</div>
                  <div className="text-sm text-orange-200">Player Ratings</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">{averageRating.toFixed(1)}/5</div>
                  <div className="text-sm text-orange-200">Average Rating</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">Weekly</div>
                  <div className="text-sm text-orange-200">Updates</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Featured Reviews */}
          {featuredReviews.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                🔥 Editor&apos;s Choice
              </h2>
              <div className="grid gap-6 lg:grid-cols-3">
                {featuredReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} featured />
                ))}
              </div>
            </section>
          )}

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filter Sidebar */}
            <div className="lg:col-span-1">
              <FilterSidebar 
                filters={{
                  categories: ['casino-review', 'slot-review', 'bonus-review'],
                  ratings: [4, 3, 2, 1],
                  authors: ['Michael Chen', 'Sarah Johnson', 'David Wilson']
                }}
                selectedFilters={selectedFilters}
                onFilterChange={handleFilterChange}
              />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  All Casino Reviews ({reviewsData.length})
                </h2>
                <SortDropdown 
                  value={sortBy}
                  onChange={setSortBy}
                  options={[
                    { value: 'newest', label: 'Newest First' },
                    { value: 'rating', label: 'Highest Rated' },
                    { value: 'popular', label: 'Most Popular' }
                  ]}
                />
              </div>

              <div className="space-y-6">
                {regularReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>

              {/* Load More - Placeholder for pagination */}
              <div className="text-center mt-12">
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  Load More Reviews
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Review Information Section */}
        <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Review Process
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    Independent expert testing
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    Real money deposits and withdrawals
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    Customer support evaluation
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    Safety and licensing verification
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Rating Categories
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li><strong>Games (25%):</strong> Selection, quality, and software providers</li>
                  <li><strong>Bonuses (20%):</strong> Value, terms, and variety of offers</li>
                  <li><strong>Safety (25%):</strong> Licensing, security, and fair play</li>
                  <li><strong>Support (15%):</strong> Availability, response time, and quality</li>
                  <li><strong>Payouts (15%):</strong> Speed, methods, and processing times</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Why Trust Our Reviews?
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• 15+ years of industry experience</li>
                  <li>• No affiliate bias in ratings</li>
                  <li>• Regular review updates</li>
                  <li>• Transparent rating methodology</li>
                  <li>• Real player feedback integration</li>
                  <li>• Anonymous testing process</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
