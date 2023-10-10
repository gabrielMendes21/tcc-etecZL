/*
  Warnings:

  - You are about to drop the column `atividadeId` on the `tipoatividade` table. All the data in the column will be lost.
  - Added the required column `codTipoAtividade` to the `Atividade` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `tipoAtividade_atividadeId_key` ON `tipoatividade`;

-- AlterTable
ALTER TABLE `atividade` ADD COLUMN `codTipoAtividade` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tipoatividade` DROP COLUMN `atividadeId`;

-- CreateIndex
CREATE INDEX `Atividade_codTipoAtividade_idx` ON `Atividade`(`codTipoAtividade`);
