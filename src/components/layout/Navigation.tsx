'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGamesDropdownOpen, setIsGamesDropdownOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors">
              Casino.ca
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              
              <Link
                href="/casinos"
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Casinos
              </Link>
              
              <Link
                href="/bonuses"
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Bonuses
              </Link>

              {/* Games Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsGamesDropdownOpen(!isGamesDropdownOpen)}
                  className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                >
                  Games
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isGamesDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link href="/games" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">All Games</Link>
                      <Link href="/games/slots" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Slot Games</Link>
                      <Link href="/games/table-games" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Table Games</Link>
                      <Link href="/live-dealer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Live Dealer</Link>
                      <Link href="/jackpots" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Jackpots</Link>
                    </div>
                  </div>
                )}
              </div>
              
              <Link
                href="/reviews"
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Reviews
              </Link>

              {/* More Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                  className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                >
                  More
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isMoreDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link href="/guides" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Guides</Link>
                      <Link href="/news" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">News</Link>
                      <Link href="/promotions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Promotions</Link>
                      <Link href="/payments" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Payment Methods</Link>
                      <Link href="/mobile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mobile Casino</Link>
                      <Link href="/responsible-gambling" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Responsible Gambling</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Search & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search casinos..."
                className="bg-gray-100 text-gray-900 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
              />
              <svg
                className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <Link
              href="/bonuses"
              className="bg-red-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
            >
              Get Bonus
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-red-600 p-2"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-red-600">
                Home
              </Link>
              <Link href="/casinos" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600">
                Casinos
              </Link>
              <Link href="/bonuses" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600">
                Bonuses
              </Link>
              <Link href="/games" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600">
                Games
              </Link>
              <Link href="/reviews" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600">
                Reviews
              </Link>
              <Link href="/guides" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600">
                Guides
              </Link>
              <div className="pt-4">
                <Link
                  href="/bonuses"
                  className="block w-full text-center bg-red-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                >
                  Get Bonus
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}