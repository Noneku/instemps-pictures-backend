import {ConflictException, Injectable, UnauthorizedException} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {JwtService} from '@nestjs/jwt';
import {BcryptService} from '../bcrypt/bcrypt.service';
import {LoginDto} from "./dto/login.dto";
import {RegisterDto} from "./dto/register.dto";

@Injectable()
export class AuthService {
  constructor(
      private userService: UsersService,
      private jwtService: JwtService,
      private bcryptService: BcryptService,
  ) {
  }

  async logIn(loginDto: LoginDto): Promise<{ access_token: string }> {
    const user = await this.userService.findOneByEmailAuth(loginDto.email);

    if (!user) throw new UnauthorizedException('Invalid credentials');

    const ok = await this.bcryptService.compare(loginDto.password, user.password);
    if (!ok) throw new UnauthorizedException('Invalid credentials');

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(registerDto: RegisterDto) {
    const existingUser = await this.userService.findOneByEmailAuth(registerDto.email);

    if (existingUser) {
      throw new ConflictException('Email already in use');
    }else {
      return await this.userService.create(registerDto)
    }
  }
}
