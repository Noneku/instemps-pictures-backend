import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService} from '../database/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create(
      {
        data : {
          email: createUserDto.email,
          password: createUserDto.password,
        }
      }
    );
  }

  findAll() {
    return this.prisma.user.findMany()
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id: id
      }
    })
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: {
        id : id
      },
      data: {
          email: updateUserDto.email,
          password: updateUserDto.password,
          name: updateUserDto.name,
        surname: updateUserDto.surname
      }
    })
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
