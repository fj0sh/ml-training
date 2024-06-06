import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContactsService {
  constructor(private readonly prisma: PrismaService) {}

  async searchContact(query: CreateContactDto) {
    let test = {};

    if (query.contactName) {
      test = { contactName: query.contactName };
      console.log(test);
    } else if (query.phoneNumber) {
      test = { phoneNumber: query.phoneNumber };
      console.log(test);
    } else if (query.id) {
      test = { id: Number(query.id) };
      console.log(test);
    }

    try {
      return await this.prisma.contact.findMany({
        where: test,
      });
    } catch (error) {
      return error;
    }
  }

  async createContact(createContactDto: CreateContactDto) {
    try {
      return await this.prisma.contact.create({ data: createContactDto });
    } catch (error) {
      return error;
    }
  }

  async editContact(id, updateContactDto: UpdateContactDto) {
    try {
      const dateUpdated = new Date().toISOString();
      return await this.prisma.contact.update({
        where: { id: id },
        data: { ...updateContactDto, dateUpdated },
      });
    } catch (error) {
      return error;
    }
  }

  async deleteContact(id) {
    try {
      return await this.prisma.contact.delete({ where: { id: id } });
    } catch (error) {
      return error;
    }
  }
}
