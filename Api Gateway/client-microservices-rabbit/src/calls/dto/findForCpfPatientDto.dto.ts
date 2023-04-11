import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class FindForCpfPatientDto {

    @Expose()
    @IsNotEmpty()
    @IsString()
    cpf: string;
}

