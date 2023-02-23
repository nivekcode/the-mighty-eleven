import {Controller, Get} from '@nestjs/common';

import {PrismaService} from "../prisma.service";

@Controller('players')
export class PlayersController {

    constructor(private prisma: PrismaService){
    }

    @Get()
    findAll()  {
        return this.prisma.player.findMany();
    }
}
