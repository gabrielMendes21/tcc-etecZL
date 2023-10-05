-- CreateTable
CREATE TABLE `SolicitacaoSuporte` (
    `codSolicitacao` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `conteudo` VARCHAR(191) NOT NULL,
    `dataCriacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `codAluno` INTEGER NOT NULL,

    INDEX `SolicitacaoSuporte_codAluno_idx`(`codAluno`),
    PRIMARY KEY (`codSolicitacao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Resposta` (
    `codResposta` INTEGER NOT NULL AUTO_INCREMENT,
    `dataResposta` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `resposta` VARCHAR(191) NOT NULL,
    `codCoordenador` INTEGER NOT NULL,

    INDEX `Resposta_codCoordenador_idx`(`codCoordenador`),
    PRIMARY KEY (`codResposta`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Correcao` (
    `codCorrecao` INTEGER NOT NULL AUTO_INCREMENT,
    `dataCorrecao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `conteudo` VARCHAR(191) NOT NULL,
    `codCoordenador` INTEGER NOT NULL,
    `codEntrega` INTEGER NOT NULL,

    UNIQUE INDEX `Correcao_codEntrega_key`(`codEntrega`),
    INDEX `Correcao_codEntrega_idx`(`codEntrega`),
    INDEX `Correcao_codCoordenador_idx`(`codCoordenador`),
    PRIMARY KEY (`codCorrecao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
