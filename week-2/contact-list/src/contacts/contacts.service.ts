import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContactsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllContacts() {
    try {
      return await this.prisma.contact.findMany();
    } catch (error) {
      return error;
    }
  }

  async searchContact(query: CreateContactDto) {
    const { contactName, phoneNumber } = query;
    const where = {};

    if (contactName) where['name'] = contactName;
    if (phoneNumber) where['phone'] = phoneNumber;

    try {
      return await this.prisma.contact.findMany({ where });
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
