/*
 Warnings:
 - You are about to drop the `Todo` table. If the table is not empty, all the data it contains will be lost.
 */

-- DropTable

DROP TABLE `Todo`;

-- CreateTable

CREATE TABLE
    `Todos` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `todo_item` VARCHAR(255) NOT NULL,

PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;