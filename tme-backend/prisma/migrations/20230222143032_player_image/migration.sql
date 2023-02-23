/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `DreamTeam` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DreamTeam" DROP COLUMN "imageUrl";

-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "imageUrl" TEXT NOT NULL;
