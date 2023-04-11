import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';


export class CreateUserDto {
    @Expose()
    @ApiProperty()
    @IsNotEmpty({ message: 'O campo name é obrigatório' })
    @MaxLength(100, { message: 'O campo rua deve ter no máximo 100 caracteres' })
    name: string;

    @Expose()
    @ApiProperty()
    @IsEmail({}, { message: 'O campo email deve ser um email válido' })
    email: string;


    @Expose()
    @ApiProperty()
    @IsNotEmpty({ message: 'O campo password é obrigatório' })
    password: string;

}
