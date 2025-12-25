/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import bcrypt from "bcrypt";
import { Model } from 'mongoose';
import { User } from 'src/user/schemas/userSchema';
import { UserService } from '../user/user.service';
import { loginDto } from './dto/loginDto';
import { RegisterDto } from './dto/registerUser.dto';

@Injectable()
export class AuthService {

    constructor(
        private readonly UserService: UserService,
        private readonly jwtService: JwtService,
        @InjectModel(User.name) private UserModule: Model<User>

    ) { }
    async registerUser(registerUserDto: RegisterDto) {

        const hasPass = await bcrypt.hash(registerUserDto.password, 10);

        // logic for user register
        const result = await this.UserService.createUser({ ...registerUserDto, password: hasPass });

        const payload = { sub: result._id, }

        const token = await this.jwtService.signAsync(payload)

        return { message: "user create successfully", access_token: token, data: result }
    }

    async getAllUser() {
        return await this.UserService.getAll()
    }

    async getSingleUsers(id: string) {
        const result = await this.UserService.getSingleUser(id)

        return { message: "get single user find success", data: result }
    }


    async login(loginDto: loginDto) {
        /**
         * 1. get email and password form body
         * 2. validate email and password
         * 3. generate token
         * 4. set token in cookie
         */

        const user = await this.UserModule.findOne({ email: loginDto.email });

        if (!user) {
            throw new Error("user not found");
        }

        const isMatch = await bcrypt.compare(loginDto.password, user.password);

        if (!isMatch) {
            throw new Error("password not match");
        }

        const payload = { sub: user._id, }

        const token = await this.jwtService.signAsync(payload)

        return { access_token: token, data: user }
    }
}
