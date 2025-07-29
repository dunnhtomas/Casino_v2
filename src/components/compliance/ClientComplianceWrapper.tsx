'use client';

import { ReactNode } from 'react';
import { ComplianceProvider } from './ComplianceProvider';
import { ComplianceWrapper } from './ComplianceWrapper';

interface ClientComplianceWrapperProps {
  children: ReactNode;
}

export function ClientComplianceWrapper({ children }: ClientComplianceWrapperProps) {
  return (
    <ComplianceProvider>
      <ComplianceWrapper>
        {children}
      </ComplianceWrapper>
    </ComplianceProvider>
  );
}
