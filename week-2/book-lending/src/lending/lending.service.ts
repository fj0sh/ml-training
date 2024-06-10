import { Injectable } from '@nestjs/common';
import { CreateLendingDto } from './dto/create-lending.dto';
import { UpdateLendingDto } from './dto/update-lending.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LendingService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllLending() {
    try {
      const res = this.prisma.lending.findMany({
        include: {
          book: {
            select: {
              copies: true,
            },
          },
        },
      });

      return res;
    } catch (error) {
      return error;
    }
  }
  async borrowBooks(createLendingDto) {
    try {
      return this.prisma.lending.create({ data: createLendingDto });
    } catch (error) {
      return error;
    }
  }

  async updateLending(id, updateLendingDto: UpdateLendingDto) {
    try {
      return this.prisma.lending.update({
        where: { id: id },
        data: updateLendingDto,
      });
    } catch (error) {
      return error;
    }
  }
  async returnBook(id, updateLendingDto: UpdateLendingDto) {
    try {
      const returnedAt = new Date().toISOString();
      return this.prisma.lending.update({
        where: { id: id },
        data: { ...updateLendingDto, returnedAt },
      });
    } catch (error) {
      return error;
    }
  }
}
