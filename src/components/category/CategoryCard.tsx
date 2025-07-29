'use client';

import Link from 'next/link';

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  gameCount: number;
  subcategories: string[];
  topGames: string[];
  image: string;
  icon: string;
  popularityRank: number;
  featured: boolean;
  rtp: string;
  volatility: string;
  providers: string[];
}

interface CategoryCardProps {
  category: Category;
  featured?: boolean;
}

export function CategoryCard({ category, featured = false }: CategoryCardProps) {
  const cardClasses = featured 
    ? "bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-2 border-purple-400 dark:border-purple-600" 
    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700";

  return (
    <Link href={`/categories/${category.slug}`}>
      <div className={`${cardClasses} rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 relative cursor-pointer group hover:scale-105`}>
        {featured && (
          <div className="absolute -top-3 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            ⭐ Popular
          </div>
        )}
        
        <div className="text-center mb-4">
          <div className="text-4xl mb-3">{category.icon}</div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {category.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
            {category.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="text-center">
            <span className="text-gray-500 dark:text-gray-400">Games</span>
            <div className="font-bold text-gray-900 dark:text-white text-lg">
              {category.gameCount.toLocaleString()}
            </div>
          </div>
          <div className="text-center">
            <span className="text-gray-500 dark:text-gray-400">RTP</span>
            <div className="font-bold text-green-600 dark:text-green-400 text-lg">
              {category.rtp}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Popular Subcategories:
          </h4>
          <div className="flex flex-wrap gap-1">
            {category.subcategories.slice(0, 3).map((sub, index) => (
              <span 
                key={index}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
              >
                {sub}
              </span>
            ))}
            {category.subcategories.length > 3 && (
              <span className="text-gray-500 dark:text-gray-400 text-xs">
                +{category.subcategories.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Top Games:
          </h4>
          <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
            {category.topGames.slice(0, 3).map((game, index) => (
              <li key={index} className="flex items-center">
                <span className="text-blue-500 mr-2">•</span>
                {game}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
          <span>Volatility: {category.volatility}</span>
          <span>#{category.popularityRank} Popular</span>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {category.providers.length} Providers
            </span>
            <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              Explore Games
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
