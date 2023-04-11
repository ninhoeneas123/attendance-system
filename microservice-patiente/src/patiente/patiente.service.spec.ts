import { Test, TestingModule } from '@nestjs/testing';
import { PatienteService } from './patiente.service';

describe('PatienteService', () => {
  let service: PatienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatienteService],
    }).compile();

    service = module.get<PatienteService>(PatienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
