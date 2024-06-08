import { Injectable } from '@nestjs/common';
import { CreateProgressDto } from './dto/create-progress.dto';
import { UpdateProgressDto } from './dto/update-progress.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProgressService {
  constructor(private readonly prisma: PrismaService) {}

  async addHabitProgress(createProgressDto: CreateProgressDto) {
    return await this.prisma.progress.create({ data: createProgressDto });
  }

  async showTotalProgress() {
    return await this.prisma.progress.groupBy({
      by: 'unit',
    });
  }
}
