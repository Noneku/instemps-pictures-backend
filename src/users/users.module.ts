import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '../database/prisma/prisma.module';
import { BcryptModule } from '../bcrypt/bcrypt.module';

@Module({
  imports: [PrismaModule, BcryptModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
