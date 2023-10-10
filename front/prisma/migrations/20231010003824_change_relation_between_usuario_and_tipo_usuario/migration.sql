/*
  Warnings:

  - You are about to drop the column `usuarioId` on the `tipousuario` table. All the data in the column will be lost.
  - Added the required column `codTipoUsuario` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `tipoUsuario_usuarioId_key` ON `tipousuario`;

-- AlterTable
ALTER TABLE `tipousuario` DROP COLUMN `usuarioId`;

-- AlterTable
ALTER TABLE `usuario` ADD COLUMN `codTipoUsuario` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `Usuario_codTipoUsuario_idx` ON `Usuario`(`codTipoUsuario`);
