import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createTodo(createUserDto: CreateUserDto) {
    try {
      return await this.prisma.todo.create({ data: createUserDto });
    } catch (error) {
      error;
    }
  }

  async getTodos() {
    try {
      return await this.prisma.todo.findMany();
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.todo.findUnique({ where: { id: id } });
    } catch (error) {
      error;
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      return await this.prisma.todo.update({
        where: { id: id },
        data: updateUserDto,
      });
    } catch (error) {
      error;
    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
