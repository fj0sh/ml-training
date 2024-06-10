import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllBooks() {
    try {
      return this.prisma.book.findMany();
    } catch (error) {
      return error;
    }
  }

  async addBook(createBookDto) {
    try {
      return this.prisma.book.create({ data: createBookDto });
    } catch (error) {
      return error;
    }
  }

  async updateBook(id: number, updateBookDto: UpdateBookDto) {
    try {
      // const dateUpdated = new Date().toISOString();
      return this.prisma.book.update({
        where: { id: id },
        data: { ...updateBookDto },
      });
    } catch (error) {
      return error;
    }
  }
}
