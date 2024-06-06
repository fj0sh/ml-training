import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  async getTodos() {
    return await this.prisma.todo.findMany();
  }

  async getOneTodo(id) {
    try {
      return await this.prisma.todo.findUnique({ where: { id: id } });
    } catch (error) {
      return error;
    }
  }

  async createTodo(createTodoDto: CreateTodoDto) {
    try {
      return await this.prisma.todo.create({ data: createTodoDto });
    } catch (error) {
      return error;
    }
  }

  async setTodoDone(id: number, updateTodoDto: UpdateTodoDto) {
    try {
      await this.prisma.todo.update({
        where: { id: id },
        data: { ...updateTodoDto, isCompleted: true },
      });
      return `Todo number ${id} has been completed!!`;
    } catch (error) {
      return error;
    }
  }

  async removeTodo(id) {
    try {
      await this.prisma.todo.delete({ where: { id: id } });
      return `Todo number ${id} is Deleted`;
    } catch (error) {
      return error;
    }
  }
}
