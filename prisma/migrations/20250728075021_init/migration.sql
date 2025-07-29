-- CreateEnum
CREATE TYPE "BonusType" AS ENUM ('WELCOME', 'NO_DEPOSIT', 'FREE_SPINS', 'RELOAD', 'CASHBACK', 'VIP');

-- CreateEnum
CREATE TYPE "ReviewStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

-- CreateTable
CREATE TABLE "casinos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "logoUrl" TEXT,
    "websiteUrl" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "reviewCount" INTEGER NOT NULL DEFAULT 0,
    "licenseInfo" TEXT,
    "established" INTEGER,
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "voiceSearchTags" TEXT[],
    "liveChat" BOOLEAN NOT NULL DEFAULT false,
    "mobileApp" BOOLEAN NOT NULL DEFAULT false,
    "cryptoSupport" BOOLEAN NOT NULL DEFAULT false,
    "vipProgram" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "casinos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bonuses" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "bonusType" "BonusType" NOT NULL,
    "amount" TEXT NOT NULL,
    "wagering" TEXT,
    "validUntil" TIMESTAMP(3),
    "termsUrl" TEXT,
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "voiceSearchTags" TEXT[],
    "casinoId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bonuses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "iconUrl" TEXT,
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "voiceSearchTags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "casino_categories" (
    "casinoId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "casino_categories_pkey" PRIMARY KEY ("casinoId","categoryId")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "author" TEXT NOT NULL,
    "status" "ReviewStatus" NOT NULL DEFAULT 'DRAFT',
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "voiceSearchTags" TEXT[],
    "casinoId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "publishedAt" TIMESTAMP(3),

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "faqs" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "category" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,
    "voiceSearchTags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "faqs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "affiliate_clicks" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "clickId" TEXT,
    "userAgent" TEXT,
    "ipAddress" TEXT,
    "referer" TEXT,
    "country" TEXT,
    "converted" BOOLEAN NOT NULL DEFAULT false,
    "conversionAt" TIMESTAMP(3),
    "revenue" DOUBLE PRECISION,
    "casinoId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "affiliate_clicks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "casinos_slug_key" ON "casinos"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "bonuses_slug_key" ON "bonuses"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "categories_slug_key" ON "categories"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "reviews_slug_key" ON "reviews"("slug");

-- AddForeignKey
ALTER TABLE "bonuses" ADD CONSTRAINT "bonuses_casinoId_fkey" FOREIGN KEY ("casinoId") REFERENCES "casinos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "casino_categories" ADD CONSTRAINT "casino_categories_casinoId_fkey" FOREIGN KEY ("casinoId") REFERENCES "casinos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "casino_categories" ADD CONSTRAINT "casino_categories_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_casinoId_fkey" FOREIGN KEY ("casinoId") REFERENCES "casinos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "affiliate_clicks" ADD CONSTRAINT "affiliate_clicks_casinoId_fkey" FOREIGN KEY ("casinoId") REFERENCES "casinos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
