/*
  Warnings:

  - Added the required column `entregue` to the `Entrega` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `entrega` ADD COLUMN `entregue` BOOLEAN NOT NULL;
