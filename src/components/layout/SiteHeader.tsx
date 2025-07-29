'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';

interface NavigationItem {
  name: string;
  href: string;
  description?: string;
}

const mainNavigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Casinos', href: '/casinos', description: 'Browse top-rated online casinos' },
  { name: 'Games', href: '/games', description: 'Discover the best casino games' },
  { name: 'Bonuses', href: '/bonuses', description: 'Find exclusive casino bonuses' },
  { name: 'Guides', href: '/guides', description: 'Learn strategies and game rules' },
  { name: 'Reviews', href: '/reviews', description: 'Read expert casino reviews' },
  { name: 'Payments', href: '/payments', description: 'Payment methods & banking' },
  { name: 'Providers', href: '/providers', description: 'Software providers' },
  { name: 'News', href: '/news', description: 'Latest casino news & guides' },
  { name: 'Support', href: '/support', description: 'Help & customer support' },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-casino-red to-casino-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Casino.ca</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-casino-red dark:text-gray-300 dark:hover:text-casino-red transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button variant="primary" size="sm">
              Play Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-2 gap-2">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-casino-red hover:bg-gray-50 dark:text-gray-300 dark:hover:text-casino-red dark:hover:bg-gray-800 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="font-medium">{item.name}</div>
                  {item.description && (
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {item.description}
                    </div>
                  )}
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <Button variant="primary" size="sm" fullWidth>
                Play Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// Footer component for completeness
export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Casinos',
      links: [
        { name: 'Best Online Casinos', href: '/casinos' },
        { name: 'New Casinos', href: '/casinos?filter=new' },
        { name: 'Mobile Casinos', href: '/casinos?filter=mobile' },
        { name: 'Live Dealer', href: '/casinos?filter=live' },
      ]
    },
    {
      title: 'Games',
      links: [
        { name: 'Slot Games', href: '/games?category=slots' },
        { name: 'Table Games', href: '/games?category=table' },
        { name: 'Live Games', href: '/games?category=live' },
        { name: 'Jackpots', href: '/games?category=jackpots' },
      ]
    },
    {
      title: 'Information',
      links: [
        { name: 'Casino Reviews', href: '/reviews' },
        { name: 'Casino Bonuses', href: '/bonuses' },
        { name: 'Payment Methods', href: '/payments' },
        { name: 'News & Guides', href: '/news' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/support' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Cookie Policy', href: '/cookie-policy' },
        { name: 'Responsible Gambling', href: '/responsible-gambling' },
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-br from-casino-red to-casino-gold rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold">Casino.ca</span>
            </div>
            <div className="text-sm text-gray-400 text-center md:text-right">
              <p>&copy; {currentYear} Casino.ca. All rights reserved.</p>
              <p className="mt-1">Play responsibly. 18+ only.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
