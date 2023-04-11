import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsUnique } from "../../utils/pipes/validate-cpf-doctor.validator";

export class CreateDoctorDto {


    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    // @IsUnique({ message: 'Email already in use' })
    email: string;

    @IsString()
    @IsString()
    speciality: string;

    @IsString()
    @IsString()
    // @IsUnique({message:'Register already in use'})
    register: string;
}

