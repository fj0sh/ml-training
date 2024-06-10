import { Injectable } from '@nestjs/common';
import { CreateLendingDto } from './dto/create-lending.dto';
import { UpdateLendingDto } from './dto/update-lending.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LendingService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllLending() {
    return this.prisma.lending.findMany();
  }

  async borrowBooks(createLendingDto) {
    try {
      return this.prisma.lending.create({ data: createLendingDto });
    } catch (error) {
      return error;
    }
  }
}
