import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import {RegisterDto} from "./dto/register.dto";
import {Throttle} from "@nestjs/throttler";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Throttle({
    default: {
      limit: 5,
      ttl: 60000
    }
  })
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.logIn(loginDto);
  }

  @Throttle({
    default: {
      limit: 5,
      ttl: 60000
    }
  })
  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }
}
