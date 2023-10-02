-- CreateTable
CREATE TABLE `Escola` (
    `codEscola` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeEscola` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`codEscola`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `codUsuario` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `turma` VARCHAR(191) NULL,
    `rm` INTEGER NULL,
    `horasConcluidas` INTEGER NULL,
    `horasAnuais` INTEGER NULL,
    `escola` INTEGER NULL,
    `tipoUsuario` VARCHAR(191) NOT NULL,

    INDEX `Usuario_escola_idx`(`escola`),
    PRIMARY KEY (`codUsuario`)
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
CREATE TABLE `Entrega` (
    `codEntrega` INTEGER NOT NULL AUTO_INCREMENT,
    `dataEntrega` DATETIME(3) NULL,
    `conteudo` VARCHAR(191) NULL,
    `entregue` BOOLEAN NOT NULL DEFAULT false,
    `codAluno` INTEGER NOT NULL,
    `codAtividade` INTEGER NOT NULL,

    INDEX `Entrega_codAluno_idx`(`codAluno`),
    INDEX `Entrega_codAtividade_idx`(`codAtividade`),
    PRIMARY KEY (`codEntrega`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
