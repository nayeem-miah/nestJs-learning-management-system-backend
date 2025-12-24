/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import bcrypt from "bcrypt";
import { RegisterDto } from './dto/registerUser.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly UserService: UserService,
        private readonly jwtService: JwtService

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
}
