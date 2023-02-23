import {Body, Controller, Get, Patch} from '@nestjs/common';

import {PrismaService} from "../prisma.service";
import {UpdateDreamTeamDTO} from './dream-team.model';

@Controller('dream-team')
export class DreamTeamController {

    constructor(private prisma: PrismaService) {
    }

    @Get()
    getAllDreamTeams() {
        return this.prisma.dreamTeam.findFirst({
            include: {
                players: true
            }
        });
    }

    @Patch()
    async addPlayer(@Body() updateDreamTeamDTO: UpdateDreamTeamDTO) {
        const {playerId, playerIdToReplace} = updateDreamTeamDTO;
        if (playerIdToReplace) {
            await this.prisma.dreamTeam.update({
                where: {
                    id: 1
                },
                data: {
                    players: {
                        disconnect: {
                            id: playerIdToReplace
                        }
                    }
                }
            });
        }
        console.log('playerId', playerId);
        await this.prisma.dreamTeam.update({
            where: {
                id: 1
            },
            data: {
                players: {
                    connect: {
                        id: playerId
                    }
                }
            }
        });
    }
}
