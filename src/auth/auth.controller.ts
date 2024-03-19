import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import User from 'src/users/entities/user.entity';
import { LocalGuard } from './local.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly jwtService: JwtService) {}

  @Post('login')
  @UseGuards(LocalGuard)
  async login(@Req() request: Request) {
    const user = request.user as User;

    const payload = {
      sub: user.id,
      username: `${user.firstName} ${user.lastName}`,
      iat: new Date().getTime(),
    };
    console.log(payload);

    console.log(user);

    const authToken = this.jwtService.sign(payload);
    return {
      authToken,
    };
  }
}
