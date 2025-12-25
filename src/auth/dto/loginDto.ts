/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class loginDto {
    @IsString()
    email: string;

    @IsString()
    password: string;
}
