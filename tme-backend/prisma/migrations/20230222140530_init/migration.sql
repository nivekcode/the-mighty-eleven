-- CreateEnum
CREATE TYPE "Club" AS ENUM ('Chelsea', 'Liverpool', 'ManCity', 'RealMadrid', 'Bayern', 'PSG', 'Napoli');

-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "club" "Club" NOT NULL,
    "dreamTeamId" INTEGER,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DreamTeam" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "DreamTeam_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_dreamTeamId_fkey" FOREIGN KEY ("dreamTeamId") REFERENCES "DreamTeam"("id") ON DELETE SET NULL ON UPDATE CASCADE;
