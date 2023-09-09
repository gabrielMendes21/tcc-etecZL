-- CreateTable
CREATE TABLE "Atividade" (
    "codAtividade" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "tipoAtividade" TEXT NOT NULL,
    "anexos" TEXT NOT NULL,
    "horasAtividade" INTEGER NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "prazoEntrega" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Atividade_pkey" PRIMARY KEY ("codAtividade")
);

-- CreateTable
CREATE TABLE "AlunoAtividade" (
    "id" SERIAL NOT NULL,
    "entregue" BOOLEAN NOT NULL DEFAULT false,
    "conteudoEntega" TEXT,
    "alunoId" INTEGER NOT NULL,
    "atividadeId" INTEGER NOT NULL,

    CONSTRAINT "AlunoAtividade_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AlunoAtividade" ADD CONSTRAINT "AlunoAtividade_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno"("rm") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlunoAtividade" ADD CONSTRAINT "AlunoAtividade_atividadeId_fkey" FOREIGN KEY ("atividadeId") REFERENCES "Atividade"("codAtividade") ON DELETE RESTRICT ON UPDATE CASCADE;
