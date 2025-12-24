/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';

@Controller('auth')  // ? route -------> /auth/register
export class AuthController {
    // AuthService: AuthService;

    constructor(private readonly authService: AuthService) {
        // this.AuthService = authService;
    }

    @Post('register')
    async register(@Body() registerUserDto: RegisterDto) {
        const result = await this.authService.registerUser(registerUserDto)
        return result;
    }

    @Get('/all-users')
    async getAll() {
        return await this.authService.getAllUser();
    }

    @Get("/:id")
    async getSingleUser(@Param('id') id: string) {
        return await this.authService.getSingleUsers(id);
    }
}
