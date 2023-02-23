import {Module} from '@nestjs/common';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {PlayersController} from './players/players.controller';
import {PrismaService} from "./prisma.service";
import { DreamTeamController } from './dream-team/dream-team.controller';

@Module({
    imports: [],
    controllers: [AppController, PlayersController, DreamTeamController],
    providers: [AppService, PrismaService],
})
export class AppModule {
}
