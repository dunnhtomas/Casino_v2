'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
  defaultOpen?: string | string[];
  className?: string;
  searchable?: boolean;
}

export function FAQAccordion({
  items,
  allowMultiple = false,
  defaultOpen = [],
  className,
  searchable = false,
}: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(
    new Set(Array.isArray(defaultOpen) ? defaultOpen : [defaultOpen])
  );
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = searchable
    ? items.filter(
        (item) =>
          item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : items;

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      if (!allowMultiple) {
        newOpenItems.clear();
      }
      newOpenItems.add(id);
    }
    
    setOpenItems(newOpenItems);
  };

  const groupedItems = filteredItems.reduce((acc, item) => {
    const category = item.category || 'General';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as Record<string, FAQItem[]>);

  return (
    <div className={cn('w-full', className)}>
      {/* Search Bar */}
      {searchable && (
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-10 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm sm:text-base"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          {searchTerm && (
            <p className="mt-2 text-sm text-gray-600">
              {filteredItems.length} {filteredItems.length === 1 ? 'result' : 'results'} found
            </p>
          )}
        </div>
      )}

      {/* FAQ Items */}
      <div className="space-y-2">
        {Object.entries(groupedItems).map(([category, categoryItems]) => (
          <div key={category}>
            {/* Category Header (only show if there are multiple categories) */}
            {Object.keys(groupedItems).length > 1 && (
              <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6 first:mt-0">
                {category}
              </h3>
            )}
            
            {/* FAQ Items for this category */}
            <div className="space-y-2">
              {categoryItems.map((item) => (
                <FAQItem
                  key={item.id}
                  item={item}
                  isOpen={openItems.has(item.id)}
                  onToggle={() => toggleItem(item.id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {searchable && filteredItems.length === 0 && searchTerm && (
        <div className="text-center py-8">
          <svg
            className="mx-auto w-12 h-12 text-gray-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47.901-6.06 2.375l-.894-.448A9.965 9.965 0 0112 13.5c2.34 0 4.47.901 6.06 2.375l-.894.448A7.962 7.962 0 0112 15z"
            />
          </svg>
          <p className="text-gray-600">No FAQs found matching &quot;{searchTerm}&quot;</p>
          <button
            onClick={() => setSearchTerm('')}
            className="mt-2 text-sm text-brand-primary hover:text-brand-primary/80"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}

interface FAQItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ item, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <button
        onClick={onToggle}
        className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-inset rounded-lg"
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-sm sm:text-base font-semibold text-gray-900 pr-4">
            {item.question}
          </h3>
          <div className="flex-shrink-0">
            <svg
              className={cn(
                'w-5 h-5 text-gray-500 transition-transform duration-200',
                isOpen ? 'transform rotate-180' : ''
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </button>
      
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-4 sm:px-6 pb-4 sm:pb-5">
          <div className="pt-2 border-t border-gray-100">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Utility component for structured data
export function FAQStructuredData({ items }: { items: FAQItem[] }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
}
