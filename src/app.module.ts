import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BcryptService } from './bcrypt/bcrypt.service';
import { BcryptModule } from './bcrypt/bcrypt.module';

@Module({
  imports: [UsersModule, BcryptModule],
  controllers: [AppController],
  providers: [AppService, BcryptService],
})
export class AppModule {}
