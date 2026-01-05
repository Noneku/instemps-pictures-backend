import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BcryptService } from './bcrypt/bcrypt.service';
import { BcryptModule } from './bcrypt/bcrypt.module';
import { AuthModule } from './auth/auth.module';
import {ThrottlerModule} from "@nestjs/throttler";

@Module({
  imports: [
      ThrottlerModule.forRoot([
        {
          name: 'short',
          ttl: 1000,
          limit: 3,
        },
        {
          name: 'medium',
          ttl: 10000,
          limit: 20,
        },
        {
          name: 'long',
          ttl: 60000,
          limit: 100,
        }
      ]),
      UsersModule,
    BcryptModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService, BcryptService],
})
export class AppModule {}
