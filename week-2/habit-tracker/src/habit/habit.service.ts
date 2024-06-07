import { Injectable } from '@nestjs/common';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HabitService {
  constructor(private readonly prisma: PrismaService) {}

  async createHabit(createHabitDto: CreateHabitDto) {
    try {
      return this.prisma.habit.create({
        data: {
          name: createHabitDto.name,
          description: createHabitDto.description,
          goals: {
            create: createHabitDto.goals.map((goal) => ({
              target: goal.target,
              unit: goal.unit,
              startDate: goal.startDate,
              endDate: goal.endDate,
            })),
          },
        },
        include: {
          goals: true,
        },
      });
    } catch (error) {
      return error;
    }
  }

  async getAllHabit() {
    try {
      return this.prisma.habit.findMany({
        include: {
          goals: true,
          progress: true,
        },
      });
    } catch (error) {
      return error;
    }
  }
}
