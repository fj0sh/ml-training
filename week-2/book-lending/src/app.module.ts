import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BookModule } from './book/book.module';
import { LendingModule } from './lending/lending.module';

@Module({
  imports: [PrismaModule, BookModule, LendingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
