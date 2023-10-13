/*
  Warnings:

  - You are about to drop the column `escola` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the column `turma` on the `usuario` table. All the data in the column will be lost.
  - Added the required column `codEscola` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `codTurma` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Usuario_escola_idx` ON `usuario`;

-- AlterTable
ALTER TABLE `usuario` DROP COLUMN `escola`,
    DROP COLUMN `turma`,
    ADD COLUMN `codEscola` INTEGER NOT NULL,
    ADD COLUMN `codTurma` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Turma` (
    `codTurma` INTEGER NOT NULL AUTO_INCREMENT,
    `ano` INTEGER NOT NULL,
    `codEscola` INTEGER NOT NULL,

    INDEX `Turma_codEscola_idx`(`codEscola`),
    PRIMARY KEY (`codTurma`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Usuario_codEscola_idx` ON `Usuario`(`codEscola`);

-- CreateIndex
CREATE INDEX `Usuario_codTurma_idx` ON `Usuario`(`codTurma`);
