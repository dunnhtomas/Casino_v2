import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// Request validation schemas
const BonusQuerySchema = z.object({
  search: z.string().optional(),
  type: z.enum(['welcome', 'deposit', 'no-deposit', 'free-spins', 'cashback', 'reload']).optional(),
  casino: z.string().optional(),
  isActive: z.string().optional(),
  minAmount: z.string().optional(),
  maxAmount: z.string().optional(),
  limit: z.string().optional(),
  offset: z.string().optional(),
});

const BonusCreateSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().optional(),
  type: z.enum(['welcome', 'deposit', 'no-deposit', 'free-spins', 'cashback', 'reload']),
  casinoId: z.string().min(1),
  amount: z.number().optional(),
  percentage: z.number().min(0).max(100).optional(),
  maxAmount: z.number().optional(),
  wageringRequirement: z.number().min(1).optional(),
  minDeposit: z.number().optional(),
  freeSpins: z.number().optional(),
  validDays: z.number().min(1).optional(),
  terms: z.string().optional(),
  isActive: z.boolean().default(true),
  isExclusive: z.boolean().default(false),
  expiresAt: z.string().optional(),
});

// Response types
interface BonusResponse {
  id: string;
  title: string;
  slug: string;
  description?: string;
  type: 'welcome' | 'deposit' | 'no-deposit' | 'free-spins' | 'cashback' | 'reload';
  casinoId: string;
  casinoName?: string;
  amount?: number;
  percentage?: number;
  maxAmount?: number;
  wageringRequirement?: number;
  minDeposit?: number;
  freeSpins?: number;
  validDays?: number;
  terms?: string;
  isActive: boolean;
  isExclusive: boolean;
  expiresAt?: string;
  createdAt: string;
  updatedAt: string;
  claimCount?: number;
  successRate?: number;
}

interface BonusesListResponse {
  bonuses: BonusResponse[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
  types: string[];
  casinos: { id: string; name: string }[];
}

// Eligibility check function
function checkBonusEligibility(bonus: BonusResponse, userCountry?: string, previousClaims?: string[]) {
  const reasons: string[] = [];
  
  if (!bonus.isActive) {
    reasons.push('Bonus is no longer active');
  }
  
  if (bonus.expiresAt && new Date(bonus.expiresAt) < new Date()) {
    reasons.push('Bonus has expired');
  }
  
  if (previousClaims?.includes(bonus.id)) {
    reasons.push('You have already claimed this bonus');
  }
  
  // Add more eligibility checks based on your business logic
  
  return {
    eligible: reasons.length === 0,
    reasons: reasons,
  };
}

// GET /api/bonuses - List bonuses with filters
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = BonusQuerySchema.parse(Object.fromEntries(searchParams));
    
    const limit = Math.min(parseInt(query.limit || '20'), 100);
    const offset = parseInt(query.offset || '0');
    const page = Math.floor(offset / limit) + 1;

    // Mock data - replace with actual Prisma queries
    const mockBonuses: BonusResponse[] = [
      {
        id: '1',
        title: 'Welcome Bonus Package',
        slug: 'welcome-bonus-package',
        description: 'Get up to $1000 + 200 free spins on your first deposits',
        type: 'welcome',
        casinoId: '1',
        casinoName: 'Royal Vegas Casino',
        amount: 1000,
        percentage: 100,
        maxAmount: 1000,
        wageringRequirement: 35,
        minDeposit: 20,
        freeSpins: 200,
        validDays: 30,
        terms: 'Wagering requirements apply. 18+ only.',
        isActive: true,
        isExclusive: true,
        expiresAt: '2025-12-31T23:59:59Z',
        createdAt: '2025-01-01T00:00:00Z',
        updatedAt: '2025-01-01T00:00:00Z',
        claimCount: 1250,
        successRate: 78.5,
      },
      {
        id: '2',
        title: 'No Deposit Free Spins',
        slug: 'no-deposit-free-spins',
        description: '50 free spins on Starburst - no deposit required',
        type: 'no-deposit',
        casinoId: '2',
        casinoName: 'Spin Palace Casino',
        freeSpins: 50,
        wageringRequirement: 40,
        validDays: 7,
        terms: 'Maximum win $100. Wagering requirements apply.',
        isActive: true,
        isExclusive: false,
        createdAt: '2025-01-01T00:00:00Z',
        updatedAt: '2025-01-01T00:00:00Z',
        claimCount: 850,
        successRate: 65.2,
      },
      {
        id: '3',
        title: 'Weekend Reload Bonus',
        slug: 'weekend-reload-bonus',
        description: '50% reload bonus every weekend up to $500',
        type: 'reload',
        casinoId: '1',
        casinoName: 'Royal Vegas Casino',
        percentage: 50,
        maxAmount: 500,
        wageringRequirement: 30,
        minDeposit: 25,
        validDays: 3,
        terms: 'Available Fridays to Sundays. Wagering requirements apply.',
        isActive: true,
        isExclusive: false,
        createdAt: '2025-01-01T00:00:00Z',
        updatedAt: '2025-01-01T00:00:00Z',
        claimCount: 420,
        successRate: 82.1,
      },
    ];

    // Apply filters
    let filteredBonuses = mockBonuses;
    
    if (query.search) {
      const searchTerm = query.search.toLowerCase();
      filteredBonuses = filteredBonuses.filter(bonus => 
        bonus.title.toLowerCase().includes(searchTerm) ||
        bonus.description?.toLowerCase().includes(searchTerm) ||
        bonus.casinoName?.toLowerCase().includes(searchTerm)
      );
    }

    if (query.type) {
      filteredBonuses = filteredBonuses.filter(bonus => 
        bonus.type === query.type
      );
    }

    if (query.casino) {
      filteredBonuses = filteredBonuses.filter(bonus => 
        bonus.casinoId === query.casino
      );
    }

    if (query.isActive) {
      const isActive = query.isActive.toLowerCase() === 'true';
      filteredBonuses = filteredBonuses.filter(bonus => 
        bonus.isActive === isActive
      );
    }

    if (query.minAmount) {
      const minAmount = parseFloat(query.minAmount);
      filteredBonuses = filteredBonuses.filter(bonus => 
        bonus.amount && bonus.amount >= minAmount
      );
    }

    if (query.maxAmount) {
      const maxAmount = parseFloat(query.maxAmount);
      filteredBonuses = filteredBonuses.filter(bonus => 
        bonus.amount && bonus.amount <= maxAmount
      );
    }

    // Pagination
    const total = filteredBonuses.length;
    const paginatedBonuses = filteredBonuses.slice(offset, offset + limit);
    const hasMore = offset + limit < total;

    // Get unique types and casinos for filters
    const types = [...new Set(mockBonuses.map(bonus => bonus.type))];
    const casinos = [...new Set(mockBonuses.map(bonus => ({ 
      id: bonus.casinoId, 
      name: bonus.casinoName || 'Unknown Casino'
    })))];

    const response: BonusesListResponse = {
      bonuses: paginatedBonuses,
      total,
      page,
      limit,
      hasMore,
      types,
      casinos,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Error fetching bonuses:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid query parameters', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/bonuses - Create new bonus (admin only)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = BonusCreateSchema.parse(body);

    // Mock response - replace with actual Prisma create
    const newBonus: BonusResponse = {
      id: Date.now().toString(),
      ...validatedData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json(newBonus, { status: 201 });
  } catch (error) {
    console.error('Error creating bonus:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET /api/bonuses/[id] - Get single bonus (implement in [id]/route.ts)
// PUT /api/bonuses/[id] - Update bonus (implement in [id]/route.ts)
// DELETE /api/bonuses/[id] - Delete bonus (implement in [id]/route.ts)
// POST /api/bonuses/[id]/check-eligibility - Check bonus eligibility