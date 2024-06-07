import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HabitModule } from './habit/habit.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProgressModule } from './progress/progress.module';
import { GoalModule } from './goal/goal.module';

@Module({
  imports: [HabitModule, PrismaModule, GoalModule, ProgressModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
