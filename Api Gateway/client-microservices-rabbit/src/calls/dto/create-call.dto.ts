import { Expose } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export enum ServiceType {
    CONSULTA = 'consulta',
    REVISAO = 'revisao',
    TRIAGEM = 'triagem',
}
export class CreateServicesDto {

    @Expose()
    @IsNotEmpty()
    @IsString() 
    service: string;

    @Expose()
    @IsNotEmpty()
    description: string;

    @Expose()
    @IsString()
    idDoctor: String;

    @Expose()
    @IsString()
    cpfPatient: String;

}

