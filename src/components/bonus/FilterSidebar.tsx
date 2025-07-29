'use client';

export function FilterSidebar() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Filter Bonuses</h3>
      
      {/* Bonus Type Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Bonus Type</h4>
        <div className="space-y-2">
          {[
            'Welcome Bonus',
            'No Deposit',
            'Free Spins',
            'Reload Bonus',
            'High Roller',
            'Cashback'
          ].map((type) => (
            <label key={type} className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 dark:bg-gray-700"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Wagering Requirements */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Wagering Requirements</h4>
        <div className="space-y-2">
          {[
            'No Wagering',
            'Up to 25x',
            '25x - 35x',
            '35x - 50x',
            'Over 50x'
          ].map((range) => (
            <label key={range} className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 dark:bg-gray-700"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{range}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Minimum Deposit */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Minimum Deposit</h4>
        <div className="space-y-2">
          {[
            'No Deposit',
            '$1 - $10',
            '$10 - $25',
            '$25 - $50',
            '$50+'
          ].map((range) => (
            <label key={range} className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 dark:bg-gray-700"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{range}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Game Restrictions */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Games Allowed</h4>
        <div className="space-y-2">
          {[
            'All Games',
            'Slots Only',
            'Table Games',
            'Live Dealer',
            'Specific Games'
          ].map((restriction) => (
            <label key={restriction} className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 dark:bg-gray-700"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{restriction}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Reset Filters */}
      <button className="w-full mt-4 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
        Reset All Filters
      </button>
    </div>
  );
}
