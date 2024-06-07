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

  async getSingleHabit(id: number) {
    try {
      return this.prisma.habit.findUnique({
        where: { id: id },
        include: {
          goals: true,
          progress: true,
        },
      });
    } catch (error) {
      return error;
    }
  }

  async editHabit(id, habitDto: UpdateHabitDto) {
    try {
      return this.prisma.habit.update({
        where: { id: id },
        data: {
          name: habitDto.name,
          description: habitDto.description,
        },
      });
    } catch (error) {
      return error;
    }
  }

  async deleteHabit(id) {
    try {
      return this.prisma.habit.delete({
        where: { id: id },
      });
    } catch (error) {
      return error;
    }
  }
}
