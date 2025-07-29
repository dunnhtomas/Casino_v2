'use client';

import { useState, useEffect } from 'react';
import { Button } from '../ui/Button';

interface ConsentBannerProps {
  onAccept: () => void;
  onDecline: () => void;
  isVisible: boolean;
}

export function ConsentBanner({ onAccept, onDecline, isVisible }: ConsentBannerProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Privacy & Cookie Consent
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              We use cookies and similar technologies to enhance your experience, analyze site traffic, 
              and for marketing purposes. By clicking &quot;Accept All&quot;, you consent to our use of cookies. 
              You can manage your preferences or learn more in our{' '}
              <a href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">
                Privacy Policy
              </a>
              {' '}and{' '}
              <a href="/cookie-policy" className="text-blue-600 dark:text-blue-400 hover:underline">
                Cookie Policy
              </a>
              .
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button
              onClick={onDecline}
              variant="outline"
              className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-2 text-sm font-medium transition-colors"
              aria-label="Decline cookies"
            >
              Decline
            </Button>
            <Button
              onClick={onAccept}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm font-medium transition-colors"
              aria-label="Accept all cookies"
            >
              Accept All
            </Button>
          </div>
        </div>
        
        <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
          <p>
            This includes essential, functional, analytics, and marketing cookies. 
            Your data helps us improve our services and show relevant content.
          </p>
        </div>
      </div>
    </div>
  );
}
