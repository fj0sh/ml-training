import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LendingService } from './lending.service';
import { CreateLendingDto } from './dto/create-lending.dto';
import { UpdateLendingDto } from './dto/update-lending.dto';
import { BookService } from 'src/book/book.service';

@Controller('lending')
export class LendingController {
  constructor(private readonly lendingService: LendingService) {}

  @Get()
  getAllLendings() {
    return this.lendingService.getAllLending();
  }

  @Post()
  borrowBooks(@Body() createLendingDto: CreateLendingDto) {
    return this.lendingService.borrowBooks(createLendingDto);
  }
}
