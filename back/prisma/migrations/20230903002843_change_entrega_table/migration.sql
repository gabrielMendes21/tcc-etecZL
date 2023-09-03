-- AlterTable
ALTER TABLE `entrega` MODIFY `dataEntrega` DATETIME(3) NULL,
    MODIFY `entregue` BOOLEAN NOT NULL DEFAULT false;
