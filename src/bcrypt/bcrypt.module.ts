import { Module } from '@nestjs/common';
import { HashService } from './bcrypt.service';

@Module({
  providers: [HashService],
  exports: [HashService],
})
export class BcryptModule {}
