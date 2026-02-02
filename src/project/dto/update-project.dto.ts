import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './create-project.dto';
import { ProjectStatus } from '@prisma/client';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  status?: ProjectStatus;
}
