import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { BcryptModule } from '../bcrypt/bcrypt.module';
import {PassportModule} from "@nestjs/passport";
import {JwtMiddleware} from "./middleware/jwt.middleware";

@Module({
  imports: [
    BcryptModule,
    UsersModule,
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [AuthService, JwtMiddleware],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
