import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';
import { Date, Document, SchemaTypes, Types } from 'mongoose';

export enum ServiceType {
    CONSULTA = 'consulta',
    REVISAO = 'revisão',
    TRIAGEM = 'triagem',
}

@Schema({
    collection: 'services-microservice',
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
})
export class Services {

    @Expose()
    @Prop({ type: String , enum:['consulta', 'revisao', 'triagem']})
    service: string;

    @Expose()
    @Prop({ type: Boolean, default: true })
    openService: boolean;

    @Expose()
    @Prop({ type: String, maxlength: 1000 })
    description: string;

    @Expose()
    @Prop({ type: String })
    date: string;

    @Expose()
    @Prop({ type: String })
    hour: string;

    @Expose()
    @Prop({ type: String , ref: 'doctor' })
    idDoctor: string;

    @Expose()
    @Prop({ type: String, ref: 'patient' })
    cpfPatient: string;
}
export const ServicesSchema =
    SchemaFactory.createForClass(Services);
export type ServicesDocument = Services & Document;
