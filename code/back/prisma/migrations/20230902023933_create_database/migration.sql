-- CreateTable
CREATE TABLE `Escola` (
    `codEscola` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeEscola` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`codEscola`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Aluno` (
    `rm` INTEGER NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `turma` VARCHAR(191) NOT NULL,
    `horasConcluidas` INTEGER NOT NULL,
    `horasAnuais` INTEGER NOT NULL,
    `escolaId` INTEGER NOT NULL,

    PRIMARY KEY (`rm`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Entrega` (
    `id` VARCHAR(191) NOT NULL,
    `dataEntrega` DATETIME(3) NOT NULL,
    `anexos` VARCHAR(191) NULL,
    `codAtividade` INTEGER NOT NULL,
    `alunoRm` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Atividade` (
    `codAtividade` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `tipoAtividade` VARCHAR(191) NOT NULL,
    `anexos` VARCHAR(191) NULL,
    `horasAtividade` INTEGER NOT NULL,
    `dataCriacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `prazoEntrega` DATETIME(3) NOT NULL,

    PRIMARY KEY (`codAtividade`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Correcao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dataCorrecao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `coordenadorId` INTEGER NOT NULL,
    `atividadeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SolicitacaoSuporte` (
    `codSolicitacao` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `mensagem` VARCHAR(191) NOT NULL,
    `dataCriacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `alunoId` INTEGER NOT NULL,

    PRIMARY KEY (`codSolicitacao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Resposta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dataResposta` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `resposta` VARCHAR(191) NOT NULL,
    `coordenadorId` INTEGER NOT NULL,
    `solicitacaoSuporteId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Coordenador` (
    `codCoordenador` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `tipoCoordenador` VARCHAR(191) NOT NULL,
    `escolaId` INTEGER NOT NULL,

    PRIMARY KEY (`codCoordenador`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Aluno` ADD CONSTRAINT `Aluno_escolaId_fkey` FOREIGN KEY (`escolaId`) REFERENCES `Escola`(`codEscola`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Entrega` ADD CONSTRAINT `Entrega_codAtividade_fkey` FOREIGN KEY (`codAtividade`) REFERENCES `Atividade`(`codAtividade`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Entrega` ADD CONSTRAINT `Entrega_alunoRm_fkey` FOREIGN KEY (`alunoRm`) REFERENCES `Aluno`(`rm`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Correcao` ADD CONSTRAINT `Correcao_coordenadorId_fkey` FOREIGN KEY (`coordenadorId`) REFERENCES `Coordenador`(`codCoordenador`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Correcao` ADD CONSTRAINT `Correcao_atividadeId_fkey` FOREIGN KEY (`atividadeId`) REFERENCES `Atividade`(`codAtividade`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SolicitacaoSuporte` ADD CONSTRAINT `SolicitacaoSuporte_alunoId_fkey` FOREIGN KEY (`alunoId`) REFERENCES `Aluno`(`rm`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Resposta` ADD CONSTRAINT `Resposta_coordenadorId_fkey` FOREIGN KEY (`coordenadorId`) REFERENCES `Coordenador`(`codCoordenador`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Resposta` ADD CONSTRAINT `Resposta_solicitacaoSuporteId_fkey` FOREIGN KEY (`solicitacaoSuporteId`) REFERENCES `SolicitacaoSuporte`(`codSolicitacao`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Coordenador` ADD CONSTRAINT `Coordenador_escolaId_fkey` FOREIGN KEY (`escolaId`) REFERENCES `Escola`(`codEscola`) ON DELETE RESTRICT ON UPDATE CASCADE;
