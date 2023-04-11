import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Expose } from 'class-transformer';
import { IsEmail, IsMongoId, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { Date, Document, SchemaTypes, Types } from 'mongoose';

export enum ServiceType {
    CONSULTA = 'consulta',
    REVISAO = 'revisão',
    TRIAGEM = 'triagem',
}
export class CreateServicesDto {

    @Expose()
    @Prop({ type: ServiceType, required: true})
    @IsNotEmpty()
    service: ServiceType;

    @Expose()
    @IsNotEmpty()
    description: string;

    @Expose()
    @IsString()
    @IsOptional()
    date: Date;

    @Expose()
    @IsString()
    @IsOptional()
    hour: string;

    @Expose()
    @IsString()
    idDoctor: String;

    @Expose()
    @IsString()
    idPacient: String;

}

