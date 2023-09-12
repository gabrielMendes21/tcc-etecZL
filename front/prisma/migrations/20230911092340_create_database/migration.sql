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

    UNIQUE INDEX `Aluno_email_key`(`email`),
    INDEX `Aluno_escolaId_idx`(`escolaId`),
    PRIMARY KEY (`rm`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Atividade` (
    `codAtividade` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `tipoAtividade` VARCHAR(191) NOT NULL,
    `anexos` VARCHAR(191) NOT NULL,
    `horasAtividade` INTEGER NOT NULL,
    `dataCriacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `prazoEntrega` DATETIME(3) NOT NULL,

    PRIMARY KEY (`codAtividade`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AlunoAtividade` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `entregue` BOOLEAN NOT NULL DEFAULT false,
    `conteudoEntega` VARCHAR(191) NULL,
    `alunoId` INTEGER NOT NULL,
    `atividadeId` INTEGER NOT NULL,

    INDEX `AlunoAtividade_alunoId_idx`(`alunoId`),
    INDEX `AlunoAtividade_atividadeId_idx`(`atividadeId`),
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

    UNIQUE INDEX `Coordenador_email_key`(`email`),
    INDEX `Coordenador_escolaId_idx`(`escolaId`),
    PRIMARY KEY (`codCoordenador`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
