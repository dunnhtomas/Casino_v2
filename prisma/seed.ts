// @ts-ignore
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'online-slots' },
      update: {},
      create: {
        name: 'Online Slots',
        slug: 'online-slots',
        description: 'Best online slot casinos with thousands of games',
        metaTitle: 'Best Online Slot Casinos 2025',
        metaDescription: 'Discover the top online slot casinos with the biggest game libraries and best bonuses.',
        voiceSearchTags: ['slot machines', 'online slots', 'casino slots', 'slot games'],
      },
    }),
    prisma.category.upsert({
      where: { slug: 'live-casino' },
      update: {},
      create: {
        name: 'Live Casino',
        slug: 'live-casino',
        description: 'Live dealer casino games with real dealers',
        metaTitle: 'Best Live Casino Sites 2025',
        metaDescription: 'Experience authentic casino atmosphere with live dealers and real-time gaming.',
        voiceSearchTags: ['live casino', 'live dealer', 'real dealer games', 'live blackjack'],
      },
    }),
    prisma.category.upsert({
      where: { slug: 'crypto-casino' },
      update: {},
      create: {
        name: 'Crypto Casino',
        slug: 'crypto-casino',
        description: 'Bitcoin and cryptocurrency casinos',
        metaTitle: 'Best Crypto Casinos 2025',
        metaDescription: 'Top cryptocurrency casinos accepting Bitcoin, Ethereum, and other digital currencies.',
        voiceSearchTags: ['crypto casino', 'bitcoin casino', 'cryptocurrency gambling', 'bitcoin slots'],
      },
    }),
  ]);

  // Create top 10 mock casinos
  const casinos = await Promise.all([
    prisma.casino.upsert({
      where: { slug: 'royal-vegas-casino' },
      update: {},
      create: {
        name: 'Royal Vegas Casino',
        slug: 'royal-vegas-casino',
        description: 'Premium online casino with over 700 games and generous bonuses',
        logoUrl: 'https://via.placeholder.com/150x75/1E40AF/FFFFFF?text=Royal+Vegas',
        websiteUrl: 'https://royalvegascasino.com',
        rating: 4.8,
        reviewCount: 2847,
        licenseInfo: 'Malta Gaming Authority',
        established: 2000,
        metaTitle: 'Royal Vegas Casino Review 2025 - $1200 Welcome Bonus',
        metaDescription: 'Royal Vegas Casino offers over 700 games, generous bonuses, and 20+ years of trusted gaming.',
        voiceSearchTags: ['royal vegas casino', 'premium casino', 'malta licensed casino'],
        liveChat: true,
        mobileApp: true,
        cryptoSupport: false,
        vipProgram: true,
        categories: {
          create: [
            { category: { connect: { id: categories[0].id } } },
            { category: { connect: { id: categories[1].id } } },
          ],
        },
      },
    }),
    prisma.casino.upsert({
      where: { slug: 'spin-casino' },
      update: {},
      create: {
        name: 'Spin Casino',
        slug: 'spin-casino',
        description: 'Mobile-optimized casino with instant play games',
        logoUrl: 'https://via.placeholder.com/150x75/DC2626/FFFFFF?text=Spin+Casino',
        websiteUrl: 'https://spincasino.com',
        rating: 4.6,
        reviewCount: 1923,
        licenseInfo: 'Malta Gaming Authority',
        established: 2019,
        metaTitle: 'Spin Casino Review 2025 - Mobile Gaming Excellence',
        metaDescription: 'Spin Casino delivers premium mobile gaming with 400+ games and fast payouts.',
        voiceSearchTags: ['spin casino', 'mobile casino', 'instant play casino'],
        liveChat: true,
        mobileApp: true,
        cryptoSupport: true,
        vipProgram: true,
        categories: {
          create: [
            { category: { connect: { id: categories[0].id } } },
            { category: { connect: { id: categories[2].id } } },
          ],
        },
      },
    }),
    prisma.casino.upsert({
      where: { slug: 'jackpot-city-casino' },
      update: {},
      create: {
        name: 'Jackpot City Casino',
        slug: 'jackpot-city-casino',
        description: 'Home of progressive jackpots and slot tournaments',
        logoUrl: 'https://via.placeholder.com/150x75/F59E0B/FFFFFF?text=Jackpot+City',
        websiteUrl: 'https://jackpotcitycasino.com',
        rating: 4.7,
        reviewCount: 3156,
        licenseInfo: 'Malta Gaming Authority',
        established: 1998,
        metaTitle: 'Jackpot City Casino Review 2025 - Million Dollar Jackpots',
        metaDescription: 'Jackpot City Casino features progressive jackpots, 500+ games, and 25+ years of excellence.',
        voiceSearchTags: ['jackpot city casino', 'progressive jackpots', 'slot tournaments'],
        liveChat: true,
        mobileApp: true,
        cryptoSupport: false,
        vipProgram: true,
        categories: {
          create: [
            { category: { connect: { id: categories[0].id } } },
          ],
        },
      },
    }),
  ]);

  // Create bonuses for each casino
  await Promise.all([
    prisma.bonus.create({
      data: {
        title: 'Welcome Bonus Package',
        slug: 'royal-vegas-welcome-bonus',
        description: 'Get $1200 bonus + 120 free spins on your first 3 deposits',
        bonusType: 'WELCOME',
        amount: '$1200 + 120 Free Spins',
        wagering: '35x bonus',
        validUntil: new Date('2025-12-31'),
        metaTitle: 'Royal Vegas $1200 Welcome Bonus + 120 Free Spins',
        metaDescription: 'Claim your Royal Vegas welcome bonus with $1200 + 120 free spins on top slots.',
        voiceSearchTags: ['royal vegas bonus', 'welcome bonus', 'free spins bonus'],
        casinoId: casinos[0].id,
      },
    }),
    prisma.bonus.create({
      data: {
        title: 'Mobile Casino Bonus',
        slug: 'spin-casino-mobile-bonus',
        description: 'Exclusive mobile bonus for new players',
        bonusType: 'WELCOME',
        amount: '$1000 + 200 Free Spins',
        wagering: '40x bonus',
        validUntil: new Date('2025-12-31'),
        metaTitle: 'Spin Casino Mobile Bonus - $1000 + 200 Free Spins',
        metaDescription: 'Get exclusive mobile casino bonus at Spin Casino with $1000 + 200 free spins.',
        voiceSearchTags: ['spin casino bonus', 'mobile casino bonus', 'exclusive bonus'],
        casinoId: casinos[1].id,
      },
    }),
    prisma.bonus.create({
      data: {
        title: 'Jackpot Hunter Bonus',
        slug: 'jackpot-city-jackpot-bonus',
        description: 'Special bonus for progressive jackpot games',
        bonusType: 'WELCOME',
        amount: '$1600 + 100 Free Spins',
        wagering: '35x bonus',
        validUntil: new Date('2025-12-31'),
        metaTitle: 'Jackpot City $1600 Welcome Bonus + 100 Free Spins',
        metaDescription: 'Claim your Jackpot City bonus and hunt for million-dollar progressive jackpots.',
        voiceSearchTags: ['jackpot city bonus', 'progressive jackpot bonus', 'jackpot hunter'],
        casinoId: casinos[2].id,
      },
    }),
  ]);

  // Create reviews
  await Promise.all([
    prisma.review.create({
      data: {
        title: 'Royal Vegas Casino: A Premium Gaming Experience',
        slug: 'royal-vegas-casino-review',
        content: 'Royal Vegas Casino has been setting the standard for online gaming excellence for over two decades. With its impressive game library of 700+ titles, generous bonus packages, and commitment to player security, it continues to be a top choice for discerning players.',
        rating: 4.8,
        author: 'Casino Expert Team',
        status: 'PUBLISHED',
        metaTitle: 'Royal Vegas Casino Review 2025 - Expert Analysis & Rating',
        metaDescription: 'Comprehensive Royal Vegas Casino review covering games, bonuses, security, and more. Expert rating: 4.8/5.',
        voiceSearchTags: ['royal vegas review', 'casino review', 'royal vegas rating'],
        casinoId: casinos[0].id,
        publishedAt: new Date(),
      },
    }),
  ]);

  // Create FAQs
  await Promise.all([
    prisma.fAQ.create({
      data: {
        question: 'What is the best online casino in Canada?',
        answer: 'The best online casino depends on your preferences, but top-rated options include Royal Vegas Casino, Spin Casino, and Jackpot City Casino, all licensed and regulated for Canadian players.',
        category: 'General',
        order: 1,
        voiceSearchTags: ['best online casino canada', 'top casino canada', 'canadian casino'],
      },
    }),
    prisma.fAQ.create({
      data: {
        question: 'How do casino bonuses work?',
        answer: 'Casino bonuses are promotional offers that give you extra funds or free spins. Most bonuses have wagering requirements, meaning you need to play through the bonus amount a certain number of times before withdrawing winnings.',
        category: 'Bonuses',
        order: 2,
        voiceSearchTags: ['how casino bonuses work', 'casino bonus explained', 'wagering requirements'],
      },
    }),
    prisma.fAQ.create({
      data: {
        question: 'Are online casinos safe and secure?',
        answer: 'Licensed online casinos use advanced encryption technology and are regulated by gaming authorities to ensure player safety. Always check for valid licenses and SSL encryption before playing.',
        category: 'Security',
        order: 3,
        voiceSearchTags: ['online casino safety', 'casino security', 'safe online gambling'],
      },
    }),
  ]);

  console.log('✅ Database seeding completed successfully!');
  console.log(`Created ${categories.length} categories`);
  console.log(`Created ${casinos.length} casinos`);
  console.log('Created bonuses, reviews, and FAQs');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    // @ts-ignore
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
