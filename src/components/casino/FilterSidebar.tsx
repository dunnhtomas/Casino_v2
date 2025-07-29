'use client';

import { useState } from 'react';

export function FilterSidebar() {
  const [selectedFilters, setSelectedFilters] = useState({
    rating: '',
    gameType: '',
    paymentMethod: '',
    license: '',
    minDeposit: '',
  });

  const filters = {
    rating: [
      { value: '4.5', label: '4.5+ Stars' },
      { value: '4.0', label: '4.0+ Stars' },
      { value: '3.5', label: '3.5+ Stars' },
    ],
    gameType: [
      { value: 'slots', label: 'Slots' },
      { value: 'blackjack', label: 'Blackjack' },
      { value: 'roulette', label: 'Roulette' },
      { value: 'live-dealer', label: 'Live Dealer' },
    ],
    paymentMethod: [
      { value: 'visa', label: 'Visa' },
      { value: 'mastercard', label: 'Mastercard' },
      { value: 'interac', label: 'Interac' },
      { value: 'crypto', label: 'Cryptocurrency' },
    ],
    license: [
      { value: 'ontario', label: 'Ontario Licensed' },
      { value: 'malta', label: 'Malta Gaming Authority' },
      { value: 'uk', label: 'UK Gambling Commission' },
    ],
    minDeposit: [
      { value: '10', label: '$10 or less' },
      { value: '20', label: '$20 or less' },
      { value: '50', label: '$50 or less' },
    ],
  };

  const handleFilterChange = (category: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: prev[category as keyof typeof prev] === value ? '' : value,
    }));
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      rating: '',
      gameType: '',
      paymentMethod: '',
      license: '',
      minDeposit: '',
    });
  };

  const hasActiveFilters = Object.values(selectedFilters).some(filter => filter !== '');

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Rating Filter */}
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-3">Minimum Rating</h4>
          <div className="space-y-2">
            {filters.rating.map((option) => (
              <label key={option.value} className="flex items-center">
                <input
                  type="radio"
                  name="rating"
                  value={option.value}
                  checked={selectedFilters.rating === option.value}
                  onChange={(e) => handleFilterChange('rating', e.target.value)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Game Type Filter */}
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-3">Game Types</h4>
          <div className="space-y-2">
            {filters.gameType.map((option) => (
              <label key={option.value} className="flex items-center">
                <input
                  type="checkbox"
                  value={option.value}
                  checked={selectedFilters.gameType === option.value}
                  onChange={(e) => handleFilterChange('gameType', e.target.value)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Payment Method Filter */}
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-3">Payment Methods</h4>
          <div className="space-y-2">
            {filters.paymentMethod.map((option) => (
              <label key={option.value} className="flex items-center">
                <input
                  type="checkbox"
                  value={option.value}
                  checked={selectedFilters.paymentMethod === option.value}
                  onChange={(e) => handleFilterChange('paymentMethod', e.target.value)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* License Filter */}
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-3">License</h4>
          <div className="space-y-2">
            {filters.license.map((option) => (
              <label key={option.value} className="flex items-center">
                <input
                  type="radio"
                  name="license"
                  value={option.value}
                  checked={selectedFilters.license === option.value}
                  onChange={(e) => handleFilterChange('license', e.target.value)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Min Deposit Filter */}
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-3">Maximum Min Deposit</h4>
          <div className="space-y-2">
            {filters.minDeposit.map((option) => (
              <label key={option.value} className="flex items-center">
                <input
                  type="radio"
                  name="minDeposit"
                  value={option.value}
                  checked={selectedFilters.minDeposit === option.value}
                  onChange={(e) => handleFilterChange('minDeposit', e.target.value)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Apply Button */}
      <div className="mt-6 lg:hidden">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
          Apply Filters
        </button>
      </div>
    </div>
  );
}
