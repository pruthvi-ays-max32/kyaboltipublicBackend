import { Injectable } from '@nestjs/common';
import { CreateContactList } from './dto/create-contactList.dto';
import { CreateMessages } from './dto/create-messages.dto';
import { UpdateContactListDto } from './dto/update-contactList.dto';
import { UpdateMessagesDto } from './dto/update-messages.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { contactList } from './entities/ContactList.entity';
import { Repository } from 'typeorm';
import { message } from './entities/Messages.entity';

@Injectable()
export class BackEndDatabaseService {

  // for contact table: 

  constructor(
    @InjectRepository(contactList) 
    private contactRepository:Repository<contactList>,

    @InjectRepository(message)
    private msgRepo:Repository<message>

  ) {}

  create(CreateContactList: CreateContactList) {
    return this.contactRepository.save(CreateContactList)
    // return 'This action adds a new backEndDatabase';
  }

  findAll(){
    return this.contactRepository.find({relations : ["sentMessages", "receivedMessages"]});
    // return `This action returns all Contacts`;
  }

  async findOne(id: number) {
    const scontact = await this.contactRepository.findOne({where : {id}, relations: ['sentMessages', 'receivedMessages']});
      if(!scontact){ 
        throw new Error(`error contact with ${id} not found`)
      }
     ;
      return scontact; 
    // return `This action returns a #${id} backEndDatabase`;
  }

  update(id: number, UpdateContactListDto: UpdateContactListDto) {
    return this.contactRepository.update(id, UpdateContactListDto)
    // return `This action updates a #${id} backEndDatabase`;
  } 

  async remove(id: number) {
    return await this.contactRepository.delete(id)
    // return `This action removes a #${id} backEndDatabase`;
  }


  // for messages

  createm(CreateMessages: CreateMessages) {
    return this.msgRepo.save(CreateMessages);
    // return 'This action adds a new backEndDatabase';
  }

  // findAllm() : Promise<message[]>{
  //   return this.msgRepo.find();
  //   // return `This action returns all backEndDatabase`;
  // }

  // findOnem(id: number) : Promise<message[]> { 
  //   const msg = this.msgRepo.find({
  //     where:{'msgId': id}
  //   });
  //   return msg
  //   // return `This action returns a #${msg} backEndDatabase`;
  // }

  // updatem(id: number, UpdateMessagesDto: UpdateMessagesDto) {
  //   return this.msgRepo.update(id, UpdateMessagesDto)
  //   // return `This action updates a #${id} backEndDatabase`;
  // }

  // async removem(id: number) {
  //   return await this.msgRepo.delete(id)
  //   // return `This action removes a #${id} backEndDatabase`;
  // }
}
