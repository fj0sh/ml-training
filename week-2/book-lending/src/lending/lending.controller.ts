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

  @Get('dues')
  getDueBooks() {
    return this.lendingService.bookDueDates();
  }

  @Get('returned')
  showReturned() {
    return this.lendingService.showReturned();
  }

  @Post()
  borrowBooks(@Body() createLendingDto: CreateLendingDto) {
    return this.lendingService.borrowBooks(createLendingDto);
  }

  @Patch(':id')
  updateBook(
    @Param('id') id: number,
    @Body() updateLendingDto: UpdateLendingDto,
  ) {
    return this.lendingService.updateLending(+id, updateLendingDto);
  }

  @Patch('return/:id')
  returnBook(
    @Param('id') id: number,
    @Body() updateLendingDto: UpdateLendingDto,
  ) {
    return this.lendingService.returnBook(+id, updateLendingDto);
  }
}
