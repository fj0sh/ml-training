import { Injectable } from '@nestjs/common';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHabitDto } from 'src/habit/dto/create-habit.dto';

@Injectable()
export class GoalService {
  constructor(private readonly prisma: PrismaService) {}

  async setHabitGoal(createGoalDto: CreateGoalDto) {
    return await this.prisma.goal.create({ data: createGoalDto });
  }

  async editHabit(id, goalDto: UpdateGoalDto) {
    console.log(goalDto.target);

    try {
      return this.prisma.goal.update({
        where: { id: id },
        data: goalDto,
      });
    } catch (error) {
      return error;
    }
  }
}
