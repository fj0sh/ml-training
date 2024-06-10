import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllBooks() {
    return this.prisma.book.findMany();
  }

  async addBook(createBookDto) {
    return this.prisma.book.create({ data: createBookDto });
  }
}
