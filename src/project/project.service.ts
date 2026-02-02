import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import PrismaService from '../database/prisma/prisma.service';

@Injectable()
export class ProjectService {
constructor(private readonly prisma: PrismaService) {}

  create(createProjectDto: CreateProjectDto) {
    return this.prisma.project.create({
      data: {
        bookingId: createProjectDto.bookingId,
        status: createProjectDto.status,
      }
    })
  }

  findAll() {
    return this.prisma.project.findMany({
      select: {
        id: true,
        status: true,
        createdAt: true,
        updatedAt: true,
        files: {
          select: {
            id: true,
            filename: true,
            url: true,
            createdAt: true,
          }
        }
      }
    })
  }

  findOne(id: string) {
    return this.prisma.project.findUnique({
      where: {
        id: id
      },
      select: {
        id: true,
        files: true,
        createdAt: true,
      }
    })
  }

  update(id: string, updateProjectDto: UpdateProjectDto) {
    return this.prisma.project.update({
      where: {
        id: id
      },
      data: {
        status: updateProjectDto.status,
      }
    })
  }

  remove(id: string) {
    return this.prisma.project.delete({
      where: {
        id: id
      },
    })
  }
}
