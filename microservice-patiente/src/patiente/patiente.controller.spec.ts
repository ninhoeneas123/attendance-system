import { Test, TestingModule } from '@nestjs/testing';
import { PatienteController } from './patiente.controller';
import { PatienteService } from './patiente.service';

describe('PatienteController', () => {
  let controller: PatienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatienteController],
      providers: [PatienteService],
    }).compile();

    controller = module.get<PatienteController>(PatienteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
