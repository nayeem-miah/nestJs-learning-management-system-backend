/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import bcrypt from "bcrypt";
import { RegisterDto } from './dto/registerUser.dto';

@Injectable()
export class AuthService {

    constructor(private readonly UserService: UserService) { }
    async registerUser(registerUserDto: RegisterDto) {
        const hasPass = await bcrypt.hash(registerUserDto.password, 10);

        // logic for user register
        return this.UserService.createUser({ ...registerUserDto, password: hasPass });
    }

    getAllUser() {
        return this.UserService.getAll()
    }
}
