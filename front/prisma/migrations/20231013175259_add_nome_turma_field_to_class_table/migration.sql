/*
  Warnings:

  - Added the required column `nomeTurma` to the `Turma` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `turma` ADD COLUMN `nomeTurma` VARCHAR(191) NOT NULL;
