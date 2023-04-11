import { PartialType } from '@nestjs/mapped-types'
import { CreatePatienteDto } from './create-patient.dto';

export class UpdatePatientDto extends PartialType(CreatePatienteDto) {}
