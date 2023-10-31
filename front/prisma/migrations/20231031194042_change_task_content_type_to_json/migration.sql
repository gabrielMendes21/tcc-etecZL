/*
  Warnings:

  - Made the column `conteudo` on table `entrega` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `entrega` MODIFY `conteudo` JSON NOT NULL;
