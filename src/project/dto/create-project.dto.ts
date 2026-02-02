import { ProjectStatus } from '@prisma/client';

export class CreateProjectDto {
  bookingId: string;
  status?: ProjectStatus
}
