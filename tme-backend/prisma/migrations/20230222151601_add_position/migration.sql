/*
  Warnings:

  - Added the required column `position` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Position" AS ENUM ('GK', 'DEF', 'MID', 'FWD');

-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "position" "Position" NOT NULL;
