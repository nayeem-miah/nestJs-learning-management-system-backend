/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Role } from '../user.types';

export type userDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({ required: true })
    fName: string;

    @Prop({ required: true })
    lName: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string

    @Prop({ default: Role.student })
    role: string
}

export const UserSchema = SchemaFactory.createForClass(User);
