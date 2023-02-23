import {PrismaClient} from '@prisma/client';
import {allPlayers} from "./players";

const prisma = new PrismaClient();

async function main() {
    await prisma.player.deleteMany();
    await prisma.dreamTeam.create({
        data: {
            name: 'My Dream Team',
        }
    });
    await prisma.player.createMany({
        data: allPlayers
    });
}

main()
    .then(() => {
        console.log('done');
        process.exit(0);
    }).catch(e => {
    console.error(e);
    process.exit(1);
}).finally(() => {
        prisma.$disconnect();
    }
)
