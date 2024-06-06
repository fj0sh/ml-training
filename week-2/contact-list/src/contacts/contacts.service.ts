import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContactsService {
  constructor(private readonly prisma: PrismaService) {}

  // async getAllContacts() {
  //   try {
  //     return await this.prisma.contact.findMany();
  //   } catch (error) {
  //     return error;
  //   }
  // }

  async searchContact(query: CreateContactDto) {
    let test = {};

    if (query.contactName) {
      test = { contactName: query.contactName };
      console.log(test);
    } else if (query.phoneNumber) {
      test = { phoneNumber: query.phoneNumber };
      console.log(test);
    } else if (query.id) {
      test = { id: query.id };
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

  async editContact() {
    try {
    } catch (error) {
      return error;
    }
  }
}
