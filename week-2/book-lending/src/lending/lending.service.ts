import { Injectable } from '@nestjs/common';
import { CreateLendingDto } from './dto/create-lending.dto';
import { UpdateLendingDto } from './dto/update-lending.dto';

@Injectable()
export class LendingService {
  create(createLendingDto: CreateLendingDto) {
    return 'This action adds a new lending';
  }

  findAll() {
    return `This action returns all lending`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lending`;
  }

  update(id: number, updateLendingDto: UpdateLendingDto) {
    return `This action updates a #${id} lending`;
  }

  remove(id: number) {
    return `This action removes a #${id} lending`;
  }
}
