import { Injectable } from '@nestjs/common';
import { CreateContactList } from './dto/create-contactList.dto';
import { CreateMessages } from './dto/create-messages.dto';
import { UpdateContactListDto } from './dto/update-contactList.dto';
import { UpdateMessagesDto } from './dto/update-messages.dto';

@Injectable()
export class BackEndDatabaseService {
  create(CreateContactList: CreateContactList) {
    return 'This action adds a new backEndDatabase';
  }

  findAll() {
    return `This action returns all backEndDatabase`;
  }

  findOne(id: number) {
    return `This action returns a #${id} backEndDatabase`;
  }

  update(id: number, UpdateContactListDto: UpdateContactListDto) {
    return `This action updates a #${id} backEndDatabase`;
  }

  remove(id: number) {
    return `This action removes a #${id} backEndDatabase`;
  }


  // for messages
  

  createm(CreateMessages: CreateMessages) {
    return 'This action adds a new backEndDatabase';
  }

  findAllm() {
    return `This action returns all backEndDatabase`;
  }

  findOnem(id: number) {
    return `This action returns a #${id} backEndDatabase`;
  }

  updatem(id: number, UpdateMessagesDto: UpdateMessagesDto) {
    return `This action updates a #${id} backEndDatabase`;
  }

  removem(id: number) {
    return `This action removes a #${id} backEndDatabase`;
  }
}
