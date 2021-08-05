/*
  Warnings:

  - A unique constraint covering the columns `[password]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `created_at` DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `password` VARCHAR(191),
    ADD COLUMN `update_at` DATETIME(3);

-- CreateIndex
CREATE UNIQUE INDEX `User.password_unique` ON `User`(`password`);
