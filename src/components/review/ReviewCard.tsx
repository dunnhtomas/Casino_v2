'use client';

import Link from 'next/link';
import { RatingStars } from '@/components/ui/RatingStars';

export interface Review {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  rating: number;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  featured: boolean;
}

interface ReviewCardProps {
  review: Review;
  featured?: boolean;
  className?: string;
}

export function ReviewCard({ review, featured = false, className = '' }: ReviewCardProps) {
  return (
    <article className={`bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
            {review.category}
          </span>
        </div>
        {featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              Featured
            </span>
          </div>
        )}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
            {review.title}
          </h3>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <RatingStars rating={review.rating} size="sm" />
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {review.rating}/5
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {review.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-4">
            <span>By {review.author}</span>
            <span>{review.date}</span>
          </div>
          <span>{review.readTime} read</span>
        </div>
        
        <Link
          href={`/reviews/${review.slug}`}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm group"
        >
          Read Full Review
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
