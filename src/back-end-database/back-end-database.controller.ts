import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BackEndDatabaseService } from './back-end-database.service';
import { CreateContactList } from './dto/create-contactList.dto';
import { CreateMessages } from './dto/create-messages.dto';
import { UpdateContactListDto } from './dto/update-contactList.dto';
import { UpdateMessagesDto } from './dto/update-messages.dto';

@Controller('back-end-database')
export class BackEndDatabaseController {
  constructor(private readonly backEndDatabaseService: BackEndDatabaseService) {}
  
  @Post('/addContact')
  create(@Body() CreateContactList: CreateContactList) {
    return this.backEndDatabaseService.create(CreateContactList);
  }

  @Get('/contactList')
  findAll() {
    return this.backEndDatabaseService.findAll();
  }

  @Get('Contact/:id')
  findOne(@Param('id') id: string) {
    return this.backEndDatabaseService.findOne(+id);
  }

  @Patch('Contact/:id')
  update(@Param('id') id: string, @Body() UpdateContactListDto: UpdateContactListDto) {
    return this.backEndDatabaseService.update(+id, UpdateContactListDto);
  }

  @Delete('Contact/:id')
  remove(@Param('id') id: string) {
    return this.backEndDatabaseService.remove(+id);
  }


  // for messages 

  @Post('/addmsg')
  createm(@Body() CreateMessages: CreateMessages) {
    return this.backEndDatabaseService.create(CreateMessages);
  }

  @Get('/allmsg')
  findAllm() {
    return this.backEndDatabaseService.findAll();
  }

  @Get('Contact/:id/msg')
  findOnem(@Param('id') id: string) {
    return this.backEndDatabaseService.findOne(+id);
  }

  @Patch('Contact/:id/msg')
  updatem(@Param('id') id: string, @Body() UpdateMessagesDto: UpdateMessagesDto) {
    return this.backEndDatabaseService.update(+id, UpdateMessagesDto);
  }

  @Delete('Contact/:id/msg')
  removem(@Param('id') id: string) {
    return this.backEndDatabaseService.remove(+id);
  }
}
