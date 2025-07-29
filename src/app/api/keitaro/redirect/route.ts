import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const campaignId = searchParams.get('campaign');

  if (!campaignId) {
    return NextResponse.json(
      { error: 'Campaign ID is required' },
      { status: 400 }
    );
  }

  try {
    // Track the click
    const clickData = {
      campaignId,
      userAgent: request.headers.get('user-agent'),
      referer: request.headers.get('referer'),
      ipAddress: request.headers.get('x-forwarded-for') || 
                 request.headers.get('x-real-ip'),
      // Add country detection logic here if needed
    };

    await prisma.affiliateClick.create({
      data: clickData,
    });

    // Construct Keitaro redirect URL
    const keitaroBaseUrl = process.env.KEITARO_BASE_URL || 'http://keitaro:80';
    const keitaroApiKey = process.env.KEITARO_API_KEY;
    
    const redirectUrl = new URL(`/click/${campaignId}`, keitaroBaseUrl);
    
    // Add tracking parameters
    if (clickData.userAgent) {
      redirectUrl.searchParams.set('ua', clickData.userAgent);
    }
    if (clickData.referer) {
      redirectUrl.searchParams.set('ref', clickData.referer);
    }
    if (clickData.ipAddress) {
      redirectUrl.searchParams.set('ip', clickData.ipAddress);
    }
    if (keitaroApiKey) {
      redirectUrl.searchParams.set('api_key', keitaroApiKey);
    }

    // Return redirect response
    return NextResponse.redirect(redirectUrl.toString(), 302);

  } catch (error) {
    console.error('Keitaro redirect error:', error);
    
    // Fallback redirect to a default casino or error page
    return NextResponse.redirect('https://casino.ca/error', 302);
  }
}
