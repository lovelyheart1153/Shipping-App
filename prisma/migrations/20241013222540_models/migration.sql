-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Route` (
    `id` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `expectedArrivalDate` DATETIME(3) NOT NULL,
    `arrivalDate` DATETIME(3) NOT NULL,
    `status` ENUM('ARRIVED', 'IN_TRANSIT') NOT NULL DEFAULT 'IN_TRANSIT',
    `message` VARCHAR(191) NOT NULL,
    `shippmentId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Shippment` (
    `id` VARCHAR(191) NOT NULL,
    `trackingNumber` VARCHAR(191) NOT NULL,
    `fromCountry` VARCHAR(191) NOT NULL,
    `toCountry` VARCHAR(191) NOT NULL,
    `sendersName` VARCHAR(191) NOT NULL,
    `receiversName` VARCHAR(191) NOT NULL,
    `sendersAddress` VARCHAR(191) NOT NULL,
    `receiversAddress` VARCHAR(191) NOT NULL,
    `estimatedDeliveryDate` DATETIME(3) NOT NULL,
    `deliveryMode` ENUM('BY_SHIP', 'BY_AIR') NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Route` ADD CONSTRAINT `Route_shippmentId_fkey` FOREIGN KEY (`shippmentId`) REFERENCES `Shippment`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
