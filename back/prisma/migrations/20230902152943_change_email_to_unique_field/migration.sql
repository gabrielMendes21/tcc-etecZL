/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Aluno` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Coordenador` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Aluno_email_key` ON `Aluno`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `Coordenador_email_key` ON `Coordenador`(`email`);
