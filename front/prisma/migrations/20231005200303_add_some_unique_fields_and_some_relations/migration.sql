/*
  Warnings:

  - A unique constraint covering the columns `[codSolicitacao]` on the table `Resposta` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rm]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `codSolicitacao` to the `Resposta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `resposta` ADD COLUMN `codSolicitacao` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Resposta_codSolicitacao_key` ON `Resposta`(`codSolicitacao`);

-- CreateIndex
CREATE INDEX `Resposta_codSolicitacao_idx` ON `Resposta`(`codSolicitacao`);

-- CreateIndex
CREATE UNIQUE INDEX `Usuario_email_key` ON `Usuario`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `Usuario_rm_key` ON `Usuario`(`rm`);
