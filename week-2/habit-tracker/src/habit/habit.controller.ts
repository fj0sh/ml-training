import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HabitService } from './habit.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';

@Controller('habit')
export class HabitController {
  constructor(private readonly habitService: HabitService) {}

  @Post()
  createHabit(@Body() createHabitDto: CreateHabitDto) {
    return this.habitService.createHabit(createHabitDto);
  }

  @Get()
  getHabit() {
    return this.habitService.getAllHabit();
  }

  @Get(':id')
  getSingleHabit(@Param('id') id: number) {
    return this.habitService.getSingleHabit(+id);
  }

  @Patch(':id')
  editHabit(@Param('id') id: number, @Body() habitDto: UpdateHabitDto) {
    return this.habitService.editHabit(+id, habitDto);
  }

  @Patch(':id')
  completeHabit(@Param('id') id: number, @Body() habitDto: UpdateHabitDto) {
    return this.habitService.editHabit(+id, habitDto);
  }

  @Delete(':id')
  deleteHabit(@Param('id') id: number) {
    return this.habitService.deleteHabit(+id);
  }
}
