import { Module } from '@nestjs/common';
import { PatienteService } from './patiente.service';
import { PatienteController } from './patiente.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Patientes, PatientesSchema } from './schemas/patiente.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Patientes.name, schema: PatientesSchema },
    ]),
  ],
  controllers: [PatienteController],
  providers: [PatienteService]
})
export class PatienteModule {}