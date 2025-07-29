import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Extract postback data from Keitaro
    const {
      campaign_id,
      click_id,
      conversion_amount,
      user_agent,
      ip_address,
      referer,
      country
    } = body;

    // Validate required fields
    if (!campaign_id) {
      return NextResponse.json(
        { error: 'Missing required field: campaign_id' },
        { status: 400 }
      );
    }

    // Store affiliate click record
    const affiliateRecord = await prisma.affiliateClick.create({
      data: {
        campaignId: campaign_id,
        clickId: click_id || null,
        userAgent: user_agent || null,
        ipAddress: ip_address || null,
        referer: referer || null,
        country: country || null,
        converted: !!conversion_amount,
        conversionAt: conversion_amount ? new Date() : null,
        revenue: conversion_amount ? parseFloat(conversion_amount) : null,
      }
    });

    return NextResponse.json({
      success: true,
      id: affiliateRecord.id,
      message: 'Postback recorded successfully'
    });

  } catch (error) {
    console.error('Postback error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const clickId = searchParams.get('click_id');
  
  if (!clickId) {
    return NextResponse.json(
      { error: 'Missing click_id parameter' },
      { status: 400 }
    );
  }

  try {
    const record = await prisma.affiliateClick.findFirst({
      where: { clickId }
    });

    if (!record) {
      return NextResponse.json(
        { error: 'Click record not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(record);

  } catch (error) {
    console.error('Query error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
