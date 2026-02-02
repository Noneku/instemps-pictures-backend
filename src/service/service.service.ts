import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import PrismaService from '../database/prisma/prisma.service';

@Injectable()
export class ServiceService {
  constructor(private readonly prisma: PrismaService) {}

  create(createServiceDto: CreateServiceDto) {
    return this.prisma.service.create({
      data: {
        title: createServiceDto.title,
        description: createServiceDto.description,
        price: createServiceDto.price,
      }
    })
  }

  findAll() {
    return this.prisma.service.findMany({
      select: {
        title: true,
        description: true,
        price: true,
      }
    })
  }

  findOne(id: string) {
    return this.prisma.service.findUnique({
      where: {
        id: id
      },
      select: {
        title: true,
        description: true,
        price: true,
        createdAt: true,
        updatedAt: true,
      }
    })
  }

  update(id: string, updateServiceDto: UpdateServiceDto) {
    return this.prisma.service.update({
      where: {
        id: id,
      },
      data: {
        title: updateServiceDto.title,
        description: updateServiceDto.description,
        price: updateServiceDto.price,
      }
    })
  }

  remove(id: string) {
    return this.prisma.service.delete({
      where: {
        id: id,
      }
    })
  }
}
