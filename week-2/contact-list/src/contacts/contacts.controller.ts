import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  searchContacts(@Query() query: CreateContactDto) {
    return this.contactsService.searchContact(query);
  }

  @Post()
  createContact(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.createContact(createContactDto);
  }

  @Patch(':id')
  editContacts(
    @Param('id') id: number,
    @Body() updateContactDto: UpdateContactDto,
  ) {
    return this.contactsService.editContact(+id, updateContactDto);
  }

  @Delete(':id')
  deleteContact(@Param('id') id: number) {
    return this.contactsService.deleteContact(+id);
  }
}
