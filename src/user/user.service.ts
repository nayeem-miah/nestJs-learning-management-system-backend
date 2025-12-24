/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/auth/dto/registerUser.dto';

@Injectable()
export class UserService {
    createUser(registerUserDto: RegisterDto) {


        // ? task store data in mongodb

        return {
            message: "User create successfully!!!",
            data: { registerUserDto }
        }
    }

    getAll() {
        return {
            message: "get all user success",
            data: { name: "Nayeem", email: "nayeem@gmail.com" }
        }
    }
}
