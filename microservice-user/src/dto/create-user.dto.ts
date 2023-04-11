import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';
import { Date, Document, SchemaTypes, Types } from 'mongoose';


export class CreateUserDto {
    @Expose()
    @ApiProperty()
    @IsNotEmpty({ message: 'O campo name é obrigatório' })
    @Prop({ type: String, maxlength: 250 })
    @MaxLength(100, { message: 'O campo rua deve ter no máximo 100 caracteres' })
    name: string;

    @Expose()
    @ApiProperty()
    @IsEmail({}, { message: 'O campo email deve ser um email válido' })
    @Prop({ type: String, maxlength: 250 })
    email: string;


    @Expose()
    @ApiProperty()
    @IsNotEmpty({ message: 'O campo password é obrigatório' })
    @Prop({ type: String, maxlength: 8 })
    password: string;

}
