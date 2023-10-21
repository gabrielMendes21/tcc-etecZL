/*
  Warnings:

  - You are about to drop the column `horasAnuais` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the column `horasConcluidas` on the `usuario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `usuario` DROP COLUMN `horasAnuais`,
    DROP COLUMN `horasConcluidas`;

-- CreateTable
CREATE TABLE `Horas` (
    `codHoras` INTEGER NOT NULL AUTO_INCREMENT,
    `horasAnuais` INTEGER NOT NULL,
    `horasConcluidas` INTEGER NOT NULL,
    `ano` INTEGER NOT NULL,
    `codAluno` INTEGER NOT NULL,

    INDEX `Horas_codAluno_idx`(`codAluno`),
    PRIMARY KEY (`codHoras`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
