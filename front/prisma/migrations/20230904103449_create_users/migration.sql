/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Escola" (
    "codEscola" SERIAL NOT NULL,
    "nomeEscola" TEXT NOT NULL,

    CONSTRAINT "Escola_pkey" PRIMARY KEY ("codEscola")
);

-- CreateTable
CREATE TABLE "Aluno" (
    "rm" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "turma" TEXT NOT NULL,
    "horasConcluidas" INTEGER NOT NULL,
    "horasAnuais" INTEGER NOT NULL,
    "escolaId" INTEGER NOT NULL,

    CONSTRAINT "Aluno_pkey" PRIMARY KEY ("rm")
);

-- CreateTable
CREATE TABLE "Coordenador" (
    "codCoordenador" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "tipoCoordenador" TEXT NOT NULL,
    "escolaId" INTEGER NOT NULL,

    CONSTRAINT "Coordenador_pkey" PRIMARY KEY ("codCoordenador")
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_email_key" ON "Aluno"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Coordenador_email_key" ON "Coordenador"("email");

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_escolaId_fkey" FOREIGN KEY ("escolaId") REFERENCES "Escola"("codEscola") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coordenador" ADD CONSTRAINT "Coordenador_escolaId_fkey" FOREIGN KEY ("escolaId") REFERENCES "Escola"("codEscola") ON DELETE RESTRICT ON UPDATE CASCADE;
