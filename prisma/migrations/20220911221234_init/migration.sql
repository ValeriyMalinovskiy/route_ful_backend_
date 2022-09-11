/*
  Warnings:

  - The primary key for the `Activity` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ActivityType` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Track` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `Activity` DROP FOREIGN KEY `Activity_typeId_fkey`;

-- DropForeignKey
ALTER TABLE `Activity` DROP FOREIGN KEY `Activity_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Track` DROP FOREIGN KEY `Track_id_fkey`;

-- DropForeignKey
ALTER TABLE `_UserFollows` DROP FOREIGN KEY `_UserFollows_A_fkey`;

-- DropForeignKey
ALTER TABLE `_UserFollows` DROP FOREIGN KEY `_UserFollows_B_fkey`;

-- AlterTable
ALTER TABLE `Activity` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `typeId` VARCHAR(191) NOT NULL,
    MODIFY `userId` VARCHAR(191) NOT NULL,
    MODIFY `trackId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `ActivityType` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Track` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `_UserFollows` MODIFY `A` VARCHAR(191) NOT NULL,
    MODIFY `B` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Activity` ADD CONSTRAINT `Activity_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `ActivityType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Activity` ADD CONSTRAINT `Activity_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Track` ADD CONSTRAINT `Track_id_fkey` FOREIGN KEY (`id`) REFERENCES `Activity`(`trackId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserFollows` ADD CONSTRAINT `_UserFollows_A_fkey` FOREIGN KEY (`A`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserFollows` ADD CONSTRAINT `_UserFollows_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
