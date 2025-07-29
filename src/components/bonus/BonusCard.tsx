'use client';

import { RatingStars } from '@/components/ui/RatingStars';
import { Button } from '@/components/ui/Button';

interface Bonus {
  id: number;
  title: string;
  casino: string;
  casinoSlug: string;
  bonusType: string;
  amount: string;
  percentage: number;
  freeSpins: number;
  wagering: string;
  minDeposit: number;
  maxBonus: number;
  gameRestrictions: string;
  timeLimit: string;
  rating: number;
  featured: boolean;
  validUntil: string;
  terms: string;
  code?: string;
  description: string;
}

interface BonusCardProps {
  bonus: Bonus;
  featured?: boolean;
}

export function BonusCard({ bonus, featured = false }: BonusCardProps) {
  const cardClasses = featured 
    ? "bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-2 border-yellow-400 dark:border-yellow-600" 
    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700";

  return (
    <div className={`${cardClasses} rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 relative`}>
      {featured && (
        <div className="absolute -top-3 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          ⭐ Featured
        </div>
      )}
      
      {bonus.code && (
        <div className="absolute -top-3 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
          Code: {bonus.code}
        </div>
      )}

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-medium">
            {bonus.bonusType}
          </span>
          <RatingStars rating={bonus.rating} size="sm" />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {bonus.title}
        </h3>
        
        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3">
          <span>from </span>
          <a 
            href={`/casinos/${bonus.casinoSlug}`}
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium ml-1"
          >
            {bonus.casino}
          </a>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
          {bonus.description}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div>
          <span className="text-gray-500 dark:text-gray-400">Bonus Amount:</span>
          <div className="font-semibold text-gray-900 dark:text-white">{bonus.amount}</div>
        </div>
        <div>
          <span className="text-gray-500 dark:text-gray-400">Free Spins:</span>
          <div className="font-semibold text-gray-900 dark:text-white">{bonus.freeSpins}</div>
        </div>
        <div>
          <span className="text-gray-500 dark:text-gray-400">Wagering:</span>
          <div className="font-semibold text-gray-900 dark:text-white">{bonus.wagering}</div>
        </div>
        <div>
          <span className="text-gray-500 dark:text-gray-400">Min Deposit:</span>
          <div className="font-semibold text-gray-900 dark:text-white">${bonus.minDeposit}</div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-600 pt-4 mb-4">
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
          <span>Time Limit: {bonus.timeLimit}</span>
          <span>Valid until: {new Date(bonus.validUntil).toLocaleDateString()}</span>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Game Restrictions: {bonus.gameRestrictions}
        </div>
      </div>

      <div className="flex gap-3">
        <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold">
          Claim Bonus
        </Button>
        <Button 
          variant="outline" 
          className="px-4 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          T&Cs
        </Button>
      </div>

      <div className="mt-3 p-2 bg-gray-50 dark:bg-gray-700 rounded text-xs text-gray-600 dark:text-gray-400">
        {bonus.terms}
      </div>
    </div>
  );
}
