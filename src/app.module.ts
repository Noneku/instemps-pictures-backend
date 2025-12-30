import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BcryptService } from './bcrypt/bcrypt.service';
import { BcryptModule } from './bcrypt/bcrypt.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, BcryptModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, BcryptService],
})
export class AppModule {}
