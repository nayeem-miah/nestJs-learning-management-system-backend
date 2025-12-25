/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable prettier/prettier */

import { Body, Controller, Get, Param, Post, Request, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';
import { loginDto } from './dto/loginDto';
import type { Response } from 'express';
import { AuthGuard } from './auth.guard';
import { UserService } from '../user/user.service';

@Controller('auth')  // ? route -------> /auth/register
export class AuthController {
    // AuthService: AuthService;

    constructor(
        private readonly authService: AuthService,
        private readonly UserService: UserService

    ) {
        // this.AuthService = authService;
    }

    @Post('register')
    async register(@Body() registerUserDto: RegisterDto) {
        const result = await this.authService.registerUser(registerUserDto)
        return result;
    }


    @UseGuards(AuthGuard)
    @Get('/profile')
    async getProfile(@Request() req) {
        const userId = req.user.sub;

        const user = await this.authService.getProfileById(userId)

        return {
            message: "user profile get successfully",
            success: true,
            data: user
        }
    }


    @Get('/all-users')
    async getAll() {
        return await this.authService.getAllUser();
    }

    @Get("/:id")
    async getSingleUser(@Param('id') id: string) {
        return await this.authService.getSingleUsers(id);
    }

    @Post('/login')

    async login(
        @Body() loginDto: loginDto,
        @Res({ passthrough: true }) res: Response
    ) {
        const result = await this.authService.login(loginDto);


        res.cookie('access_token', result.access_token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return {
            message: 'login success',
            access_token: result.access_token,
            data: result.data,
        };
    }


}
