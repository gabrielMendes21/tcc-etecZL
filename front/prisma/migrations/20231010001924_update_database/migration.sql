/*
  Warnings:

  - You are about to drop the column `tipoAtividade` on the `atividade` table. All the data in the column will be lost.
  - You are about to drop the column `tipoUsuario` on the `usuario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `atividade` DROP COLUMN `tipoAtividade`;

-- AlterTable
ALTER TABLE `usuario` DROP COLUMN `tipoUsuario`;

-- CreateTable
CREATE TABLE `tipoUsuario` (
    `codTipoUsuario` INTEGER NOT NULL AUTO_INCREMENT,
    `tipoUsuario` VARCHAR(191) NOT NULL,
    `usuarioId` INTEGER NOT NULL,

    UNIQUE INDEX `tipoUsuario_usuarioId_key`(`usuarioId`),
    PRIMARY KEY (`codTipoUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipoAtividade` (
    `codTipoAtividade` INTEGER NOT NULL AUTO_INCREMENT,
    `tipoAtividade` VARCHAR(191) NOT NULL,
    `atividadeId` INTEGER NOT NULL,

    UNIQUE INDEX `tipoAtividade_atividadeId_key`(`atividadeId`),
    PRIMARY KEY (`codTipoAtividade`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
