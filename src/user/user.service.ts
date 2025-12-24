/* eslint-disable prettier/prettier */
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterDto } from 'src/auth/dto/registerUser.dto';
import { User } from './schemas/userSchema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private UserModel: Model<User>) { }
    async createUser(registerUserDto: RegisterDto) {

        // const exitsUser = await this.UserModel.findOne({ email: registerUserDto.email });

        // if (exitsUser) {
        //     throw new Error("user already exits");
        // }

        try {
            // * task store data in mongodb
            return await this.UserModel.create({
                fName: registerUserDto.fName,
                lName: registerUserDto.lName,
                email: registerUserDto.email,
                password: registerUserDto.password
            })
        } catch (error: unknown) {
            console.log(error)
            const e = error as { code: number }
            if (e.code === 11000) {
                throw new ConflictException("Email already exits")
            }

            throw error;
        }
    }

    async getAll() {
        const users = await this.UserModel.find();

        return {
            message: "get all user success",
            data: users
        }
    }

    async getSingleUser(id: string) {
        return await this.UserModel.findOne({ _id: id })
    }
}
