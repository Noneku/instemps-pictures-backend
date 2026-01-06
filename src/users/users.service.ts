import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService} from '../database/prisma/prisma.service';
import { BcryptService } from '../bcrypt/bcrypt.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly bcrypt: BcryptService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await this.bcrypt.hash(createUserDto.password);
    return this.prisma.user.create({
      data: {
        email: createUserDto.email,
        password: hashedPassword,
        name: createUserDto.name,
        surname: createUserDto.surname,
      },

      select: {
        email: true,
        password: false,
        name: true,
        surname: true,
      }
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      select: {
        email: true,
        password: false,
        name: true,
        surname: true,
      }
    });
  }

   findOneByEmailAuth(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email: email
      },
      select: {
        email: true,
        id: true,
        password: true,
        role: true
      }
    });
  }

  findOneByUuid(uuid: string) {
    return this.prisma.user.findUnique({
      where: {
        id: uuid
      },
      select: {
        email: true,
        id: true,
        role: true
      }
    })
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        email: updateUserDto.email,
        password: updateUserDto.password,
        name: updateUserDto.name,
        surname: updateUserDto.surname,
      },
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
