'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Card } from './Card';
import Image from 'next/image';
import { RatingStars } from './RatingStars';

interface ComparisonItem {
  id: string;
  name: string;
  image?: string;
  rating: number;
  reviewCount?: number;
  features: Record<string, string | number | boolean | ReactNode>;
  ctaText?: string;
  ctaUrl?: string;
  isRecommended?: boolean;
}

interface ComparisonTableProps {
  items: ComparisonItem[];
  features: Array<{
    key: string;
    label: string;
    type?: 'text' | 'number' | 'boolean' | 'rating' | 'component';
    sortable?: boolean;
  }>;
  className?: string;
  maxItems?: number;
  showCTA?: boolean;
}

export function ComparisonTable({
  items,
  features,
  className,
  maxItems = 6,
  showCTA = true,
}: ComparisonTableProps) {
  const displayItems = items.slice(0, maxItems);

  return (
    <div className={cn('w-full', className)}>
      {/* Mobile Stack View */}
      <div className="block lg:hidden space-y-4">
        {displayItems.map((item) => (
          <Card key={item.id} variant="casino" className="relative">
            {item.isRecommended && (
              <div className="absolute -top-2 left-4 bg-casino-gold text-casino-dark px-3 py-1 rounded-full text-xs font-semibold">
                Recommended
              </div>
            )}
            
            <div className="flex items-start gap-4 mb-4">
              {item.image && (
                <Image
                  src={item.image}
                  alt={`${item.name} logo`}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain bg-white rounded-lg border border-gray-200 p-2"
                />
              )}
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
                <RatingStars
                  rating={item.rating}
                  size="sm"
                  showCount={true}
                  reviewCount={item.reviewCount}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="space-y-3 mb-4">
              {features.map((feature) => (
                <div key={feature.key} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="text-sm font-medium text-gray-600">
                    {feature.label}
                  </span>
                  <span className="text-sm text-gray-900">
                    {renderFeatureValue(item.features[feature.key], feature.type)}
                  </span>
                </div>
              ))}
            </div>

            {showCTA && (
              <button
                className={cn(
                  'w-full py-3 px-4 rounded-lg font-semibold text-sm transition-colors duration-200',
                  item.isRecommended
                    ? 'bg-casino-gold text-casino-dark hover:bg-casino-gold/90'
                    : 'bg-casino-red text-white hover:bg-casino-red/90'
                )}
                onClick={() => item.ctaUrl && window.open(item.ctaUrl, '_blank')}
              >
                {item.ctaText || 'Visit Casino'}
              </button>
            )}
          </Card>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full bg-white rounded-xl shadow-card border border-gray-200">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-6 py-4 text-left">
                <span className="text-sm font-semibold text-gray-900">Casino</span>
              </th>
              {features.map((feature) => (
                <th key={feature.key} className="px-4 py-4 text-center">
                  <span className="text-sm font-semibold text-gray-900">
                    {feature.label}
                  </span>
                </th>
              ))}
              {showCTA && (
                <th className="px-6 py-4 text-center">
                  <span className="text-sm font-semibold text-gray-900">Action</span>
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {displayItems.map((item) => (
              <tr
                key={item.id}
                className={cn(
                  'hover:bg-gray-50 transition-colors duration-150',
                  item.isRecommended && 'bg-casino-gold/5 border-l-4 border-l-casino-gold'
                )}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={`${item.name} logo`}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain bg-white rounded-lg border border-gray-200 p-2"
                      />
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        {item.isRecommended && (
                          <span className="bg-casino-gold text-casino-dark px-2 py-1 rounded-full text-xs font-semibold">
                            Recommended
                          </span>
                        )}
                      </div>
                      <RatingStars
                        rating={item.rating}
                        size="sm"
                        showCount={true}
                        reviewCount={item.reviewCount}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </td>
                {features.map((feature) => (
                  <td key={feature.key} className="px-4 py-4 text-center text-sm text-gray-900">
                    {renderFeatureValue(item.features[feature.key], feature.type)}
                  </td>
                ))}
                {showCTA && (
                  <td className="px-6 py-4 text-center">
                    <button
                      className={cn(
                        'px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200',
                        item.isRecommended
                          ? 'bg-casino-gold text-casino-dark hover:bg-casino-gold/90'
                          : 'bg-casino-red text-white hover:bg-casino-red/90'
                      )}
                      onClick={() => item.ctaUrl && window.open(item.ctaUrl, '_blank')}
                    >
                      {item.ctaText || 'Visit'}
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function renderFeatureValue(
  value: string | number | boolean | ReactNode,
  type: string = 'text'
): ReactNode {
  if (value === null || value === undefined) {
    return <span className="text-gray-400">-</span>;
  }

  switch (type) {
    case 'boolean':
      return (
        <span className={cn(
          'inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold',
          value 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        )}>
          {value ? '✓' : '✗'}
        </span>
      );
    case 'rating':
      return typeof value === 'number' ? (
        <RatingStars rating={value} size="sm" showValue={false} />
      ) : value;
    case 'number':
      return typeof value === 'number' ? value.toLocaleString() : value;
    case 'component':
      return value;
    default:
      return value;
  }
}
