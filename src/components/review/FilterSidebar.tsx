'use client';

import { useState } from 'react';

export interface FilterOptions {
  categories: string[];
  ratings: number[];
  authors: string[];
}

interface FilterSidebarProps {
  filters: FilterOptions;
  selectedFilters: {
    category: string;
    rating: number | null;
    author: string;
  };
  onFilterChange: (filterType: keyof FilterSidebarProps['selectedFilters'], value: string | number | null) => void;
}

export function FilterSidebar({ filters, selectedFilters, onFilterChange }: FilterSidebarProps) {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllAuthors, setShowAllAuthors] = useState(false);

  const visibleCategories = showAllCategories ? filters.categories : filters.categories.slice(0, 6);
  const visibleAuthors = showAllAuthors ? filters.authors : filters.authors.slice(0, 6);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6 space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Filter Reviews
      </h3>

      {/* Category Filter */}
      <div>
        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
          Category
        </h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="category"
              value=""
              checked={selectedFilters.category === ''}
              onChange={(e) => onFilterChange('category', e.target.value)}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              All Categories
            </span>
          </label>
          {visibleCategories.map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedFilters.category === category}
                onChange={(e) => onFilterChange('category', e.target.value)}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300 capitalize">
                {category}
              </span>
            </label>
          ))}
          {filters.categories.length > 6 && (
            <button
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              {showAllCategories ? 'Show Less' : `Show ${filters.categories.length - 6} More`}
            </button>
          )}
        </div>
      </div>

      {/* Rating Filter */}
      <div>
        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
          Minimum Rating
        </h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="rating"
              value=""
              checked={selectedFilters.rating === null}
              onChange={() => onFilterChange('rating', null)}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              Any Rating
            </span>
          </label>
          {filters.ratings.map((rating) => (
            <label key={rating} className="flex items-center">
              <input
                type="radio"
                name="rating"
                value={rating}
                checked={selectedFilters.rating === rating}
                onChange={(e) => onFilterChange('rating', Number(e.target.value))}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300 flex items-center">
                {rating}+ Stars
                <span className="ml-1 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-3 h-3 ${
                        i < rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </span>
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Author Filter */}
      <div>
        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
          Author
        </h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="author"
              value=""
              checked={selectedFilters.author === ''}
              onChange={(e) => onFilterChange('author', e.target.value)}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              All Authors
            </span>
          </label>
          {visibleAuthors.map((author) => (
            <label key={author} className="flex items-center">
              <input
                type="radio"
                name="author"
                value={author}
                checked={selectedFilters.author === author}
                onChange={(e) => onFilterChange('author', e.target.value)}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                {author}
              </span>
            </label>
          ))}
          {filters.authors.length > 6 && (
            <button
              onClick={() => setShowAllAuthors(!showAllAuthors)}
              className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              {showAllAuthors ? 'Show Less' : `Show ${filters.authors.length - 6} More`}
            </button>
          )}
        </div>
      </div>

      {/* Clear Filters */}
      <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
        <button
          onClick={() => {
            onFilterChange('category', '');
            onFilterChange('rating', null);
            onFilterChange('author', '');
          }}
          className="w-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
}
