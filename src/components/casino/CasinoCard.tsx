import Link from 'next/link';
import { RatingStars } from '@/components/ui/RatingStars';
import { Button } from '@/components/ui/Button';

interface Casino {
  id: number;
  name: string;
  slug: string;
  rating: number;
  bonus: string;
  features: string[];
  logo: string;
  pros: string[];
  cons: string[];
  minDeposit: number;
  payoutTime: string;
  license: string;
  established: number;
  games: number;
  software: string[];
}

interface CasinoCardProps {
  casino: Casino;
  rank: number;
}

export function CasinoCard({ casino, rank }: CasinoCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Header with Rank */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 text-white font-bold text-lg px-3 py-1 rounded-full">
              #{rank}
            </div>
            <div>
              <h3 className="text-xl font-bold">{casino.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <RatingStars rating={casino.rating} />
                <span className="text-sm text-blue-100">({casino.rating}/5)</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-blue-100">Est. {casino.established}</div>
            <div className="text-xs text-blue-200">{casino.license.substring(0, 20)}</div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left: Logo and Basic Info */}
          <div className="text-center md:text-left">
            <div className="w-32 h-20 mx-auto md:mx-0 mb-4 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400 text-sm">Logo</span>
            </div>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div><strong>Games:</strong> {casino.games}+</div>
              <div><strong>Min Deposit:</strong> ${casino.minDeposit}</div>
              <div><strong>Payout:</strong> {casino.payoutTime}</div>
            </div>
          </div>

          {/* Center: Bonus and Features */}
          <div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-4">
              <div className="text-xs font-semibold text-green-800 dark:text-green-400 uppercase tracking-wide mb-1">
                Welcome Bonus
              </div>
              <div className="text-lg font-bold text-green-900 dark:text-green-300">
                {casino.bonus}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Key Features:</h4>
              <div className="grid grid-cols-2 gap-1">
                {casino.features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Pros/Cons and CTA */}
          <div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <h4 className="text-xs font-semibold text-green-700 dark:text-green-400 mb-2 uppercase">Pros</h4>
                <ul className="space-y-1">
                  {casino.pros.slice(0, 2).map((pro, index) => (
                    <li key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                      <span className="text-green-500 mr-1">+</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-red-700 dark:text-red-400 mb-2 uppercase">Cons</h4>
                <ul className="space-y-1">
                  {casino.cons.slice(0, 2).map((con, index) => (
                    <li key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                      <span className="text-red-500 mr-1">-</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 text-center"
                aria-label={`Visit ${casino.name}`}
              >
                Visit Casino
              </Button>
              <Link 
                href={`/casinos/${casino.slug}`}
                className="block w-full text-center border border-gray-300 dark:border-gray-600 rounded-lg py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Read Review
              </Link>
            </div>
          </div>
        </div>

        {/* Software Providers */}
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">Software:</span>
            {casino.software.map((provider, index) => (
              <span 
                key={index}
                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
              >
                {provider}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
