/*
  Warnings:

  - You are about to drop the column `userId` on the `interest` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `interest` DROP FOREIGN KEY `interest_ibfk_1`;

-- AlterTable
ALTER TABLE `interest` DROP COLUMN `userId`;

-- CreateTable
CREATE TABLE `_InterestToUser` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_InterestToUser_AB_unique`(`A`, `B`),
    INDEX `_InterestToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_InterestToUser` ADD FOREIGN KEY (`A`) REFERENCES `Interest`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_InterestToUser` ADD FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
