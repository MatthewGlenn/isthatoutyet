-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "productTitle" TEXT NOT NULL,
    "productType" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Release" (
    "id" TEXT NOT NULL,
    "releaseDate" TIMESTAMPTZ(3) NOT NULL,
    "platform" TEXT NOT NULL,
    "productType" TEXT NOT NULL,
    "productTitleId" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "Release_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VideoGame" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "score" INTEGER,
    "genre" TEXT,
    "description" TEXT,
    "datePublished" TIMESTAMP(3),
    "price" DOUBLE PRECISION,
    "onSale" BOOLEAN,
    "storeUrl" TEXT,
    "boxArtUrl" TEXT,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "VideoGame_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Release" ADD CONSTRAINT "Release_productTitleId_fkey" FOREIGN KEY ("productTitleId") REFERENCES "VideoGame"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
