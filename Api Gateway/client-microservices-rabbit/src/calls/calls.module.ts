import { Module } from '@nestjs/common';
import { CallsService } from './calls.service';
import { CallsController } from './calls.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports:[
    ClientsModule.register([
      {
        name: 'CALLS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'calls_queue',
          queueOptions: {
            durable: false,
            arguments: {
            },
          },

        },
      }
    ]),
  ],
  controllers: [CallsController],
  providers: [CallsService]
})
export class CallsModule {}
