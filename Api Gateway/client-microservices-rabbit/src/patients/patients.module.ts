import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports:[
    ClientsModule.register([
      {
        name: 'PATIENTES_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'patientes_queue',
          queueOptions: {
            durable: false,
            arguments: {
            },
          },

        },
      }
    ]),
  ],
  controllers: [PatientsController],
  providers: [PatientsService]
})
export class PatientsModule {}
