import { Test, TestingModule } from '@nestjs/testing';
import { CentroVotacionController } from './centro-votacion.controller';

describe('CentroVotacionController', () => {
  let controller: CentroVotacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CentroVotacionController],
    }).compile();

    controller = module.get<CentroVotacionController>(CentroVotacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
