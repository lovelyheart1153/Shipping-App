/*
  Warnings:

  - Added the required column `destination` to the `Shippment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `origin` to the `Shippment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `route` DROP FOREIGN KEY `Route_shippmentId_fkey`;

-- AlterTable
ALTER TABLE `route` MODIFY `message` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `shippment` ADD COLUMN `destination` VARCHAR(191) NOT NULL,
    ADD COLUMN `origin` VARCHAR(191) NOT NULL,
    MODIFY `content` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Route` ADD CONSTRAINT `Route_shippmentId_fkey` FOREIGN KEY (`shippmentId`) REFERENCES `Shippment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
