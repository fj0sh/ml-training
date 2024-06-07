/*
  Warnings:

  - You are about to drop the column `categoryId` on the `product` table. All the data in the column will be lost.
  - You are about to alter the column `type` on the `product_type` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.

*/
-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `product_categoryId_fkey`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `categoryId`,
    ADD COLUMN `productId` INTEGER NULL;

-- AlterTable
ALTER TABLE `product_type` MODIFY `type` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product_type`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
