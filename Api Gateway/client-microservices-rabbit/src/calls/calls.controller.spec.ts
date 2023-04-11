import { ClientsModule, Transport } from '@nestjs/microservices';
import { Test, TestingModule } from '@nestjs/testing';
import { CallsController } from './calls.controller';
import { CallsService } from './calls.service';
import { CreateServicesDto } from './dto/create-call.dto';


describe('AppService', () => {

  let callsController: CallsController;
  let callsService: CallsService;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        // ClientsModule.register([
        //   {
        //     name: 'CALLS_SERVICE',
        //     transport: Transport.RMQ,
        //     options: {
        //       urls: ['amqp://localhost:5672'],
        //       queue: 'calls_queue',
        //       queueOptions: {
        //         durable: false,
        //         arguments: {
        //         },
        //       },

        //     },
        //   }
        // ]),
      ],
      controllers: [CallsController],
    }).compile();

    callsController = module.get<CallsController>(CallsController);
    callsService = module.get<CallsService>(CallsService);
  });

  it('should be defined', () => {
    expect(callsController).toBeDefined();
    expect(callsService).toBeDefined();
  });

  describe('create', () => {
    it('should create a new todo item successfully', async () => {
      // Arrange
      const body = {
        service: "consulta",
        description: "Revisao de rotina",
        idDoctor: "123456789",
        cpfPatient: "123456789"
      };

      // Act
      const result = await callsController.create(body);

      // Assert
      expect(result).toEqual('Atendimento criado com sucesso');
      expect(callsService.create).toHaveBeenCalledTimes(1);
      expect(callsService.create).toHaveBeenCalledWith(body);
    });
  })
});