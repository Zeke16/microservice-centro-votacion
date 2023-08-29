import { Test, TestingModule } from '@nestjs/testing';
import { CentroVotacionService } from './centro-votacion.service';

describe('CentroVotacionService', () => {
  let service: CentroVotacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CentroVotacionService],
    }).compile();

    service = module.get<CentroVotacionService>(CentroVotacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
