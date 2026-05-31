/*
  Warnings:

  - You are about to drop the column `resetToken` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `resetTokenExp` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `resetToken`,
    DROP COLUMN `resetTokenExp`,
    ADD COLUMN `emailVerified` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `otp` VARCHAR(191) NULL,
    ADD COLUMN `otpExp` DATETIME(3) NULL;
