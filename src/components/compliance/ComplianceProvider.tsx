'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

interface ComplianceState {
  consentGiven: boolean;
  geoBlocked: boolean;
}

interface ComplianceContextType extends ComplianceState {
  setConsentGiven: (consent: boolean) => void;
  setGeoBlocked: (blocked: boolean) => void;
  checkCompliance: () => Promise<void>;
}

const ComplianceContext = createContext<ComplianceContextType | undefined>(undefined);

const CONSENT_KEY = 'casino_consent_given';
const CONSENT_TIMESTAMP_KEY = 'casino_consent_timestamp';

// Consent expires after 365 days
const CONSENT_EXPIRY_DAYS = 365;

interface ComplianceProviderProps {
  children: ReactNode;
}

export function ComplianceProvider({ children }: ComplianceProviderProps) {
  const [state, setState] = useState<ComplianceState>({
    consentGiven: false,
    geoBlocked: false,
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const loadComplianceState = useCallback(() => {
    if (!isClient) return;
    
    try {
      // Check consent (localStorage with expiry)
      const consentTimestamp = localStorage.getItem(CONSENT_TIMESTAMP_KEY);
      const consentGiven = localStorage.getItem(CONSENT_KEY) === 'true';
      
      let validConsent = false;
      if (consentGiven && consentTimestamp) {
        const consentDate = new Date(parseInt(consentTimestamp));
        const expiryDate = new Date(consentDate.getTime() + (CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000));
        validConsent = new Date() < expiryDate;
        
        if (!validConsent) {
          // Clear expired consent
          localStorage.removeItem(CONSENT_KEY);
          localStorage.removeItem(CONSENT_TIMESTAMP_KEY);
        }
      }

      setState((prev: ComplianceState) => ({
        ...prev,
        consentGiven: validConsent,
      }));
    } catch (error) {
      console.error('Error loading compliance state:', error);
    }
  }, [isClient]);

  useEffect(() => {
    if (isClient) {
      loadComplianceState();
    }
  }, [isClient, loadComplianceState]);

  const setConsentGiven = (consent: boolean) => {
    setState((prev: ComplianceState) => ({ ...prev, consentGiven: consent }));
    
    if (!isClient) return;
    
    try {
      if (consent) {
        localStorage.setItem(CONSENT_KEY, 'true');
        localStorage.setItem(CONSENT_TIMESTAMP_KEY, Date.now().toString());
      } else {
        localStorage.removeItem(CONSENT_KEY);
        localStorage.removeItem(CONSENT_TIMESTAMP_KEY);
      }
    } catch (error) {
      console.error('Error saving consent state:', error);
    }
  };

  const setGeoBlocked = (blocked: boolean) => {
    setState((prev: ComplianceState) => ({ ...prev, geoBlocked: blocked }));
  };

  const checkCompliance = async () => {
    if (!isClient) return;
    
    try {
      // Check geo-blocking status from server
      const response = await fetch('/api/compliance/geo-check', {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setGeoBlocked(data.blocked || false);
      }
    } catch (error) {
      console.error('Error checking geo-compliance:', error);
    }
  };

  const contextValue: ComplianceContextType = {
    ...state,
    setConsentGiven,
    setGeoBlocked,
    checkCompliance,
  };

  return (
    <ComplianceContext.Provider value={contextValue}>
      {children}
    </ComplianceContext.Provider>
  );
}

export function useCompliance() {
  const context = useContext(ComplianceContext);
  if (context === undefined) {
    throw new Error('useCompliance must be used within a ComplianceProvider');
  }
  return context;
}
