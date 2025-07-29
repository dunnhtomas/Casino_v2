'use client';

import { cn } from '@/lib/utils';

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  showCount?: boolean;
  reviewCount?: number;
  className?: string;
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
}

export function RatingStars({
  rating,
  maxRating = 5,
  size = 'md',
  showValue = true,
  showCount = false,
  reviewCount,
  className,
  interactive = false,
  onRatingChange,
}: RatingStarsProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const handleStarClick = (starRating: number) => {
    if (interactive && onRatingChange) {
      onRatingChange(starRating);
    }
  };

  const renderStars = () => {
    const stars = [];
    
    for (let i = 1; i <= maxRating; i++) {
      const isFilled = i <= rating;
      const isPartial = i > rating && i - 1 < rating;
      const fillPercentage = isPartial ? ((rating - Math.floor(rating)) * 100) : 0;

      stars.push(
        <div
          key={i}
          className={cn(
            'relative',
            interactive && 'cursor-pointer hover:scale-110 transition-transform duration-150'
          )}
          onClick={() => handleStarClick(i)}
        >
          {/* Background star (empty) */}
          <svg
            className={cn(
              sizeClasses[size],
              'text-gray-300',
              interactive && 'hover:text-gray-400'
            )}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>

          {/* Foreground star (filled) */}
          {isFilled && (
            <svg
              className={cn(
                sizeClasses[size],
                'absolute inset-0 text-yellow-400',
                interactive && 'hover:text-yellow-500'
              )}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          )}

          {/* Partial star for half ratings */}
          {isPartial && (
            <svg
              className={cn(
                sizeClasses[size],
                'absolute inset-0 text-yellow-400',
                interactive && 'hover:text-yellow-500'
              )}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id={`partial-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset={`${fillPercentage}%`} stopColor="currentColor" />
                  <stop offset={`${fillPercentage}%`} stopColor="transparent" />
                </linearGradient>
              </defs>
              <path
                fill={`url(#partial-${i})`}
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          )}
        </div>
      );
    }

    return stars;
  };

  return (
    <div className={cn('flex items-center gap-2 sm:gap-3', className)}>
      {/* Stars container */}
      <div className="flex items-center gap-1">
        {renderStars()}
      </div>

      {/* Rating value */}
      {showValue && (
        <span className={cn(
          'font-semibold text-gray-700',
          textSizeClasses[size]
        )}>
          {rating.toFixed(1)}
        </span>
      )}

      {/* Review count */}
      {showCount && reviewCount !== undefined && (
        <span className={cn(
          'text-gray-500',
          size === 'sm' ? 'text-xs' : 'text-sm'
        )}>
          ({reviewCount.toLocaleString()} {reviewCount === 1 ? 'review' : 'reviews'})
        </span>
      )}
    </div>
  );
}

// Compact version for tight spaces
interface CompactRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'xs' | 'sm';
  className?: string;
}

export function CompactRating({ 
  rating, 
  maxRating = 5, 
  size = 'xs',
  className 
}: CompactRatingProps) {
  const sizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
  };

  const textSizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
  };

  return (
    <div className={cn('inline-flex items-center gap-1', className)}>
      <div className="flex">
        {Array.from({ length: maxRating }, (_, i) => (
          <svg
            key={i}
            className={cn(
              sizeClasses[size],
              i < rating ? 'text-yellow-400' : 'text-gray-300'
            )}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className={cn(
        'font-medium text-gray-600 ml-1',
        textSizeClasses[size]
      )}>
        {rating.toFixed(1)}
      </span>
    </div>
  );
}
