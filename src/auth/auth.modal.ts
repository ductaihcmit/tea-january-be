import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Validate } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type AuthDocument = HydratedDocument<Auth>;

@Schema()
export class Auth {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: number;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
