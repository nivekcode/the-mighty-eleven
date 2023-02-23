import { Test, TestingModule } from '@nestjs/testing';
import { DreamTeamController } from './dream-team.controller';

describe('DreamTeamController', () => {
  let controller: DreamTeamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DreamTeamController],
    }).compile();

    controller = module.get<DreamTeamController>(DreamTeamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
