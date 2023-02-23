import {Module} from '@nestjs/common';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {PlayersController} from './players/players.controller';
import {PrismaService} from "./prisma.service";

@Module({
    imports: [],
    controllers: [AppController, PlayersController],
    providers: [AppService, PrismaService],
})
export class AppModule {
}
