'use client';

import { useState } from 'react';

export function SortDropdown() {
  const [sortBy, setSortBy] = useState('rating');

  const sortOptions = [
    { value: 'rating', label: 'Highest Rated' },
    { value: 'bonus', label: 'Best Bonus' },
    { value: 'games', label: 'Most Games' },
    { value: 'payout', label: 'Fastest Payout' },
    { value: 'established', label: 'Most Established' },
    { value: 'alphabetical', label: 'A-Z' },
  ];

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="sort" className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Sort by:
      </label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
