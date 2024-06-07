import { CreateGoalDto } from 'src/goal/dto/create-goal.dto';

export class CreateHabitDto {
  name: string;
  description?: string;
  goals: CreateGoalDto[];
}
