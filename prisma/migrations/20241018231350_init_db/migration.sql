-- CreateEnum
CREATE TYPE "ArrivalStatus" AS ENUM ('ARRIVED', 'IN_TRANSIT');

-- CreateEnum
CREATE TYPE "DeliveryMode" AS ENUM ('BY_SHIP', 'BY_AIR');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Route" (
    "id" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "expectedArrivalDate" TIMESTAMP(3) NOT NULL,
    "arrivalDate" TIMESTAMP(3),
    "status" "ArrivalStatus" NOT NULL DEFAULT 'IN_TRANSIT',
    "message" TEXT,
    "shippmentId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Route_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shippment" (
    "id" TEXT NOT NULL,
    "trackingNumber" TEXT NOT NULL,
    "sendersName" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "receiversName" TEXT NOT NULL,
    "sendersAddress" TEXT NOT NULL,
    "receiversAddress" TEXT NOT NULL,
    "status" "ArrivalStatus" NOT NULL DEFAULT 'IN_TRANSIT',
    "estimatedDeliveryDate" TIMESTAMP(3) NOT NULL,
    "deliveryMode" "DeliveryMode" NOT NULL,
    "content" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Shippment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Route" ADD CONSTRAINT "Route_shippmentId_fkey" FOREIGN KEY ("shippmentId") REFERENCES "Shippment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
