import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { ServerStructuredData } from '@/components/StructuredData';
import { getHomePageStructuredData } from '@/lib/structured-data';
import { ClientComplianceWrapper } from '@/components/compliance/ClientComplianceWrapper';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    default: 'Casino.ca - Best Online Casinos in Canada 2025',
    template: '%s | Casino.ca',
  },
  description: 'Discover the best online casinos in Canada with expert reviews, exclusive bonuses, and trusted recommendations. Play safely at licensed Canadian casino sites.',
  keywords: [
    'online casino canada',
    'canadian casino',
    'casino bonuses',
    'slot games',
    'live casino',
    'casino reviews'
  ],
  authors: [{ name: 'Casino.ca Expert Team' }],
  creator: 'Casino.ca',
  publisher: 'Casino.ca',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://casino.ca'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://casino.ca',
    title: 'Casino.ca - Best Online Casinos in Canada',
    description: 'Expert reviews of the best online casinos in Canada with exclusive bonuses and trusted recommendations.',
    siteName: 'Casino.ca',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Casino.ca - Best Online Casinos in Canada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casino.ca - Best Online Casinos in Canada',
    description: 'Expert reviews of the best online casinos in Canada with exclusive bonuses.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredDataArray = getHomePageStructuredData();

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <ServerStructuredData data={structuredDataArray} />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ClientComplianceWrapper>
          {children}
        </ClientComplianceWrapper>
      </body>
    </html>
  );
}
