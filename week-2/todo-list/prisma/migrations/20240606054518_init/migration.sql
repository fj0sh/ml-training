/*
  Warnings:

  - Made the column `content` on table `todo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `isCompleted` on table `todo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `todo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dateCreated` on table `todo` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `todo` MODIFY `content` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `isCompleted` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `title` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `dateCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
