import { PartialType } from '@nestjs/swagger';
import { CreateServicesDto } from './create-call.dto';

export class UpdateCallDto extends PartialType(CreateServicesDto) {}
