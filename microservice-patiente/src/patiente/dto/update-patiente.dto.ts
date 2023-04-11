import { PartialType } from '@nestjs/mapped-types';
import { CreatePatienteDto } from './create-patiente.dto';

export class UpdatePatienteDto extends PartialType(CreatePatienteDto) {
  id: number;
}
