/*
  Warnings:

  - You are about to drop the column `userId` on the `contact` table. All the data in the column will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `contact` DROP FOREIGN KEY `Contact_userId_fkey`;

-- AlterTable
ALTER TABLE `contact` DROP COLUMN `userId`,
    ADD COLUMN `dateAdded` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `dateUpdated` DATETIME(3) NULL;

-- DropTable
DROP TABLE `user`;
