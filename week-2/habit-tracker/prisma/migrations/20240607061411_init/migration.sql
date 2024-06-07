/*
  Warnings:

  - You are about to alter the column `value` on the `progress` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `unit` to the `Progress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `progress` ADD COLUMN `unit` VARCHAR(191) NOT NULL,
    MODIFY `value` INTEGER NOT NULL;
