/*
  Warnings:

  - You are about to drop the column `fromCountry` on the `shippment` table. All the data in the column will be lost.
  - You are about to drop the column `toCountry` on the `shippment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `shippment` DROP COLUMN `fromCountry`,
    DROP COLUMN `toCountry`;
