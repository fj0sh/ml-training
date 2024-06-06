import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTodos() {
    return this.todoService.getTodos();
  }

  @Get(':id')
  getOneTodo(@Param('id') id: number) {
    return this.todoService.getOneTodo(+id);
  }

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.createTodo(createTodoDto);
  }

  @Patch(':id')
  setTodoDone(@Param('id') id: number, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.setTodoDone(+id, updateTodoDto);
  }

  @Delete(':id')
  removeTodo(@Param('id') id: number) {
    return this.todoService.removeTodo(+id);
  }
}
