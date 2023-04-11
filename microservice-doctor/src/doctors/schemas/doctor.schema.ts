import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    collection: 'doctors-microservice',
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
})

export class Doctor {

    @Prop({ type: String, maxlength: 250 })
    name: string;

    @Prop({ type: String, maxlength: 250 })
    email: string;

    @Prop({ type: String, maxlength: 250 })
    specialty: string;

    @Prop({ type: String, maxlength: 250 })
    register: string;
}

export const DoctorSchema =
  SchemaFactory.createForClass(Doctor);
export type DoctorDocument = Doctor & Document;