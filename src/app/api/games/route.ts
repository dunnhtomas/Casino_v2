import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// Request validation schemas
const GameQuerySchema = z.object({
  search: z.string().optional(),
  category: z.string().optional(),
  provider: z.string().optional(),
  rtp: z.string().optional(), // minimum RTP
  volatility: z.enum(['low', 'medium', 'high']).optional(),
  hasDemo: z.string().optional(),
  limit: z.string().optional(),
  offset: z.string().optional(),
});

const GameCreateSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().optional(),
  category: z.string().min(1),
  provider: z.string().min(1),
  rtp: z.number().min(0).max(100).optional(),
  volatility: z.enum(['low', 'medium', 'high']).optional(),
  minBet: z.number().optional(),
  maxBet: z.number().optional(),
  hasDemo: z.boolean().default(true),
  imageUrl: z.string().url().optional(),
  isActive: z.boolean().default(true),
});

// Response types
interface GameResponse {
  id: string;
  name: string;
  slug: string;
  description?: string;
  category: string;
  provider: string;
  rtp?: number;
  volatility?: 'low' | 'medium' | 'high';
  minBet?: number;
  maxBet?: number;
  hasDemo: boolean;
  imageUrl?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  playCount?: number;
  averageRating?: number;
}

interface GamesListResponse {
  games: GameResponse[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
  categories: string[];
  providers: string[];
}

// GET /api/games - List games with filters
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = GameQuerySchema.parse(Object.fromEntries(searchParams));
    
    const limit = Math.min(parseInt(query.limit || '20'), 100);
    const offset = parseInt(query.offset || '0');
    const page = Math.floor(offset / limit) + 1;

    // Mock data - replace with actual Prisma queries
    const mockGames: GameResponse[] = [
      {
        id: '1',
        name: 'Starburst',
        slug: 'starburst',
        description: 'Classic NetEnt slot with expanding wilds',
        category: 'Slots',
        provider: 'NetEnt',
        rtp: 96.1,
        volatility: 'low',
        minBet: 0.10,
        maxBet: 100,
        hasDemo: true,
        imageUrl: 'https://example.com/games/starburst.png',
        isActive: true,
        createdAt: '2025-01-01T00:00:00Z',
        updatedAt: '2025-01-01T00:00:00Z',
        playCount: 150000,
        averageRating: 4.5,
      },
      {
        id: '2',
        name: 'Mega Moolah',
        slug: 'mega-moolah',
        description: 'Progressive jackpot slot with huge prizes',
        category: 'Progressive Slots',
        provider: 'Microgaming',
        rtp: 88.12,
        volatility: 'high',
        minBet: 0.25,
        maxBet: 6.25,
        hasDemo: true,
        imageUrl: 'https://example.com/games/mega-moolah.png',
        isActive: true,
        createdAt: '2025-01-01T00:00:00Z',
        updatedAt: '2025-01-01T00:00:00Z',
        playCount: 200000,
        averageRating: 4.7,
      },
      {
        id: '3',
        name: 'Live Blackjack',
        slug: 'live-blackjack',
        description: 'Professional live dealer blackjack',
        category: 'Table Games',
        provider: 'Evolution Gaming',
        rtp: 99.28,
        volatility: 'medium',
        minBet: 1,
        maxBet: 5000,
        hasDemo: false,
        imageUrl: 'https://example.com/games/live-blackjack.png',
        isActive: true,
        createdAt: '2025-01-01T00:00:00Z',
        updatedAt: '2025-01-01T00:00:00Z',
        playCount: 75000,
        averageRating: 4.8,
      },
    ];

    // Apply filters
    let filteredGames = mockGames;
    
    if (query.search) {
      const searchTerm = query.search.toLowerCase();
      filteredGames = filteredGames.filter(game => 
        game.name.toLowerCase().includes(searchTerm) ||
        game.description?.toLowerCase().includes(searchTerm) ||
        game.provider.toLowerCase().includes(searchTerm)
      );
    }

    if (query.category) {
      filteredGames = filteredGames.filter(game => 
        game.category.toLowerCase() === query.category?.toLowerCase()
      );
    }

    if (query.provider) {
      filteredGames = filteredGames.filter(game => 
        game.provider.toLowerCase() === query.provider?.toLowerCase()
      );
    }

    if (query.rtp) {
      const minRtp = parseFloat(query.rtp);
      filteredGames = filteredGames.filter(game => 
        game.rtp && game.rtp >= minRtp
      );
    }

    if (query.volatility) {
      filteredGames = filteredGames.filter(game => 
        game.volatility === query.volatility
      );
    }

    if (query.hasDemo) {
      const hasDemo = query.hasDemo.toLowerCase() === 'true';
      filteredGames = filteredGames.filter(game => 
        game.hasDemo === hasDemo
      );
    }

    // Pagination
    const total = filteredGames.length;
    const paginatedGames = filteredGames.slice(offset, offset + limit);
    const hasMore = offset + limit < total;

    // Get unique categories and providers for filters
    const categories = [...new Set(mockGames.map(game => game.category))];
    const providers = [...new Set(mockGames.map(game => game.provider))];

    const response: GamesListResponse = {
      games: paginatedGames,
      total,
      page,
      limit,
      hasMore,
      categories,
      providers,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Error fetching games:', error);
    
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

// POST /api/games - Create new game (admin only)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = GameCreateSchema.parse(body);

    // Mock response - replace with actual Prisma create
    const newGame: GameResponse = {
      id: Date.now().toString(),
      ...validatedData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json(newGame, { status: 201 });
  } catch (error) {
    console.error('Error creating game:', error);
    
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

// GET /api/games/[id] - Get single game (implement in [id]/route.ts)
// PUT /api/games/[id] - Update game (implement in [id]/route.ts)
// DELETE /api/games/[id] - Delete game (implement in [id]/route.ts)