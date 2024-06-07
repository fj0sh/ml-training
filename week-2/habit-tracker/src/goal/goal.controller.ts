import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GoalService } from './goal.service';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';
import { CreateHabitDto } from 'src/habit/dto/create-habit.dto';

@Controller('goal')
export class GoalController {
  constructor(private readonly goalService: GoalService) {}

  @Post()
  setHabitGoal(@Body() createGoalDto: CreateGoalDto) {
    return this.goalService.setHabitGoal(createGoalDto);
  }

  @Patch(':id')
  editHabit(@Param('id') id: number, @Body() goalDto: UpdateGoalDto) {
    return this.goalService.editHabit(+id, goalDto);
  }
}
