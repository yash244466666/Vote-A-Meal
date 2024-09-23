// src/auth/auth.controller.ts
import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Response } from 'express';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login as an admin' })
  @ApiBody({ description: 'Admin login credentials', schema: { example: { username: 'admin', password: 'password' } } })
  @ApiResponse({ status: HttpStatus.OK, description: 'Login successful', schema: { example: { access_token: 'token' } } })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Invalid credentials', schema: { example: { message: 'Invalid credentials' } } })
  async login(@Body() body: any, @Res() res: Response) {
    const admin = await this.authService.validateAdmin(body.username, body.password);
    if (!admin) {
      return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Invalid credentials' });
    }

    const { access_token } = await this.authService.login(admin);
    res.cookie('access_token', access_token, { httpOnly: true });
    return res.status(HttpStatus.OK).json({ access_token });
  }
}