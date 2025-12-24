/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';

@Controller('auth')  // ? route -------> /auth/register
export class AuthController {
    // AuthService: AuthService;

    constructor(private readonly authService: AuthService) {
        // this.AuthService = authService;
    }

    @Post('register')
    register(@Body() registerUserDto: RegisterDto) {
        const result = this.authService.registerUser(registerUserDto)
        return result;
    }

    @Get('/all-users')
    getAll() {
        return this.authService.getAllUser();
    }
}
