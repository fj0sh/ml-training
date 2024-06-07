/*
  Warnings:

  - You are about to alter the column `target` on the `goal` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `unit` to the `Goal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `goal` ADD COLUMN `unit` VARCHAR(191) NOT NULL,
    MODIFY `target` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `progress` MODIFY `value` VARCHAR(191) NOT NULL;
