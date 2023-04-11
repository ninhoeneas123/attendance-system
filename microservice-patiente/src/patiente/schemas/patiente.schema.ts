import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document, SchemaTypes, Types } from 'mongoose';

@Schema({
    collection: 'patintes-microservice',
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
})
export class Patientes {

    @Prop({ type: String, required: true, maxlength: 100 })
    name: string;

    @Prop({ type: String, required: true, maxlength: 1000 })
    cpf: string;

    @Prop({ type: String, required: true, maxlength: 100 })
    email: string;

    @Prop({ type: String, required: true, maxlength: 100 })
    tel: string;
}
export const PatientesSchema = SchemaFactory.createForClass(Patientes);
export type PatientesDocument = Patientes & Document;
