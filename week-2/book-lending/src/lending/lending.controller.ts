import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LendingService } from './lending.service';
import { CreateLendingDto } from './dto/create-lending.dto';
import { UpdateLendingDto } from './dto/update-lending.dto';

@Controller('lending')
export class LendingController {
  constructor(private readonly lendingService: LendingService) {}

  @Post()
  create(@Body() createLendingDto: CreateLendingDto) {
    return this.lendingService.create(createLendingDto);
  }

  @Get()
  findAll() {
    return this.lendingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lendingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLendingDto: UpdateLendingDto) {
    return this.lendingService.update(+id, updateLendingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lendingService.remove(+id);
  }
}
