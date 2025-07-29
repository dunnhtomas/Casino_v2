import { NextRequest, NextResponse } from 'next/server';

// List of blocked countries/regions (ISO 3166-1 alpha-2 codes)
const BLOCKED_COUNTRIES = [
  'US', // United States
  'FR', // France  
  'AU', // Australia
  'IT', // Italy
  'ES', // Spain
  'DE', // Germany
  'NL', // Netherlands
  'BE', // Belgium
  'DK', // Denmark
  'SE', // Sweden
  'NO', // Norway
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for API routes and static files
  if (pathname.startsWith('/api/') || 
      pathname.startsWith('/_next/') || 
      pathname.includes('.')) {
    return NextResponse.next();
  }

  // Affiliate flow - handle /go/:campaignId redirects
  if (pathname.startsWith('/go/')) {
    const campaignId = pathname.split('/go/')[1];
    if (campaignId) {
      // Get Keitaro URL from environment or use default
      const keitaroUrl = process.env.KEITARO_URL || 'https://keitaro.local';
      const redirectUrl = `${keitaroUrl}/click/${campaignId}`;
      
      // Add tracking parameters from query string
      const searchParams = request.nextUrl.searchParams;
      const trackingUrl = new URL(redirectUrl);
      
      // Forward relevant parameters to Keitaro
      searchParams.forEach((value: string, key: string) => {
        if (['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'source', 'utm_source', 'utm_medium', 'utm_campaign'].includes(key)) {
          trackingUrl.searchParams.set(key, value);
        }
      });

      return NextResponse.redirect(trackingUrl.toString(), 302);
    }
  }

  // Geo-blocking middleware (check first)
  const testGeoBlock = request.headers.get('x-geo-block');
  if (testGeoBlock === 'true') {
    return new NextResponse('Access denied due to geographical restrictions', { 
      status: 403,
      headers: {
        'Content-Type': 'text/plain',
      }
    });
  }

  // Check country from various headers
  const country = request.headers.get('cf-ipcountry') || // Cloudflare
                 request.headers.get('x-vercel-ip-country') || // Vercel
                 request.headers.get('x-country-code') || // Generic
                 null;

  // Block if country is in blocked list
  if (country && BLOCKED_COUNTRIES.includes(country.toUpperCase())) {
    return new NextResponse('Access denied due to geographical restrictions', { 
      status: 403,
      headers: {
        'Content-Type': 'text/plain',
        'X-Blocked-Country': country,
      }
    });
  }

  // Security headers
  const response = NextResponse.next();
  
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  response.headers.set('X-Geo-Country', country || 'unknown');

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (robots file)
     * - sitemap.xml (sitemap file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
