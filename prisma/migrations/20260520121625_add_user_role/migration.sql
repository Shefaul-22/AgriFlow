-- AlterTable
ALTER TABLE `User` ADD COLUMN `role` ENUM('user', 'admin', 'seller', 'farmer') NOT NULL DEFAULT 'user';
