import { IsString } from "class-validator";

export class CreatePatienteDto {

    @IsString()
    name: string;

    @IsString()
    cpf: string;

    @IsString()
    email: string;

    @IsString()
    tel: string;
}

