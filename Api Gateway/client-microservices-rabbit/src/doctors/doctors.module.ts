import { Module } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorsController } from './doctors.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { IsUniqueConstraint } from '../utils/pipes/validate-cpf-doctor.validator';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'DOCTOR_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'doctor_queue',
          noAck: true,
          queueOptions: {
            durable: false,
            maxAttempts: 5,
            // deadLetterExchange: "",
            // deadLetterRoutingKey: 'recovery-queue',
          },
        },
      }
    ]),
  ],
  controllers: [DoctorsController],
  providers: [DoctorsService, IsUniqueConstraint]
})
export class DoctorsModule { }
