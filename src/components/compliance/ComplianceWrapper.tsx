'use client';

import React, { useEffect, ReactNode } from 'react';
import { useCompliance } from './ComplianceProvider';
import { ConsentBanner } from './ConsentBanner';

interface ComplianceWrapperProps {
  children: ReactNode;
}

export function ComplianceWrapper({ children }: ComplianceWrapperProps) {
  const {
    consentGiven,
    geoBlocked,
    setConsentGiven,
    checkCompliance,
  } = useCompliance();

  useEffect(() => {
    checkCompliance();
  }, [checkCompliance]);

  const handleConsentAccept = () => {
    setConsentGiven(true);
  };

  const handleConsentDecline = () => {
    setConsentGiven(false);
  };

  // Show geo-blocking message if user is blocked
  if (geoBlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 text-center">
          <div className="w-16 h-16 mx-auto bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Access Restricted
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            We&apos;re sorry, but access to this website is not available in your region due to legal restrictions.
          </p>
          
          <p className="text-sm text-gray-500 dark:text-gray-400">
            If you believe this is an error, please contact our support team.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {children}
      
      {/* Consent Banner */}
      <ConsentBanner
        isVisible={!consentGiven}
        onAccept={handleConsentAccept}
        onDecline={handleConsentDecline}
      />
    </>
  );
}
