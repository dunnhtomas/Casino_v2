'use client';

import { useEffect } from 'react';

interface StructuredDataProps {
  data: object | object[];
}

export function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    // Add structured data to document head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(Array.isArray(data) ? data : [data], null, 2);
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(script);
    };
  }, [data]);

  return null; // This component doesn't render anything visually
}

// Server-side structured data component
interface ServerStructuredDataProps {
  data: object | object[];
}

export function ServerStructuredData({ data }: ServerStructuredDataProps) {
  const jsonData = Array.isArray(data) ? data : [data];
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonData, null, 2)
      }}
    />
  );
}
