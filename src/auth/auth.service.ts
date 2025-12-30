import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { BcryptService } from '../bcrypt/bcrypt.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private bcryptService: BcryptService,
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user  = await this.userService.findOne(email);

    if (!user) throw new UnauthorizedException('Invalid credentials');

    const ok = await this.bcryptService.compare(pass, user.password);
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

}
