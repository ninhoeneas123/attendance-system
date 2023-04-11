import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';
import { Date, Document, SchemaTypes, Types } from 'mongoose';

@Schema({
  collection: 'user-microservice',
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Users {
  @Expose()
  @ApiProperty()
  @Prop({ type: String, maxlength: 250 })
  name: string;

  @Expose()
  @ApiProperty()
  @Prop({ type: String, maxlength: 250 })
  email: string;


  @Expose()
  @ApiProperty()
  @Prop({ type: String, maxlength: 8 })
  password: string;

}
export const UsersSchema =
  SchemaFactory.createForClass(Users);
export type UsersDocument = Users & Document;
