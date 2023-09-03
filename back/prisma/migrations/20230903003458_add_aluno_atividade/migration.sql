/*
  Warnings:

  - The primary key for the `entrega` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `entregue` on the `entrega` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `entrega` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Made the column `dataEntrega` on table `entrega` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `entrega` DROP PRIMARY KEY,
    DROP COLUMN `entregue`,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `dataEntrega` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `AlunoAtividade` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `alunoId` INTEGER NOT NULL,
    `atividadeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AlunoAtividade` ADD CONSTRAINT `AlunoAtividade_alunoId_fkey` FOREIGN KEY (`alunoId`) REFERENCES `Aluno`(`rm`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AlunoAtividade` ADD CONSTRAINT `AlunoAtividade_atividadeId_fkey` FOREIGN KEY (`atividadeId`) REFERENCES `Atividade`(`codAtividade`) ON DELETE RESTRICT ON UPDATE CASCADE;
