-- CreateTable
CREATE TABLE "VideoGame" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "genre" TEXT NOT NULL,
    "description" TEXT,
    "datePublished" TIMESTAMP(3),
    "price" DOUBLE PRECISION NOT NULL,
    "onSale" BOOLEAN NOT NULL,
    "storeUrl" TEXT,
    "boxArtUrl" TEXT,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "VideoGame_pkey" PRIMARY KEY ("id")
);
