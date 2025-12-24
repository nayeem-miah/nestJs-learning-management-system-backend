/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterDto } from 'src/auth/dto/registerUser.dto';
import { User } from './schemas/userSchema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private UserModel: Model<User>) { }
    async createUser(registerUserDto: RegisterDto) {

        const exitsUser = await this.UserModel.findOne({ email: registerUserDto.email });

        if (exitsUser) {
            throw new Error("user already exits");
        }

        // * task store data in mongodb
        return await this.UserModel.create({
            fName: registerUserDto.fName,
            lName: registerUserDto.lName,
            email: registerUserDto.email,
            password: registerUserDto.password
        })
    }

    getAll() {
        return {
            message: "get all user success",
            data: { name: "Nayeem", email: "nayeem@gmail.com" }
        }
    }
}
