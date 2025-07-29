'use client';

export function SortDropdown() {
  return (
    <div className="relative">
      <select 
        aria-label="Sort bonuses by"
        className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 pr-8 text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="featured">Featured First</option>
        <option value="amount-desc">Highest Bonus Amount</option>
        <option value="amount-asc">Lowest Bonus Amount</option>
        <option value="wagering-asc">Lowest Wagering</option>
        <option value="wagering-desc">Highest Wagering</option>
        <option value="rating-desc">Highest Rated</option>
        <option value="newest">Newest Bonuses</option>
        <option value="expiry">Expiring Soon</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
        </svg>
      </div>
    </div>
  );
}
