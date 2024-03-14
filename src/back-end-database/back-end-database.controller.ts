import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BackEndDatabaseService } from './back-end-database.service';
import { CreateContactList } from './dto/create-contactList.dto';
import { CreateMessages } from './dto/create-messages.dto';
import { UpdateContactListDto } from './dto/update-contactList.dto';
import { UpdateMessagesDto } from './dto/update-messages.dto';

@Controller('contacts')
export class BackEndDatabaseController {
  constructor(private readonly backEndDatabaseService: BackEndDatabaseService) {}
  
  @Post('/addContact')
  create(@Body() CreateContactList: CreateContactList) {
    return this.backEndDatabaseService.create(CreateContactList);
  }

  @Get()
  findAll() {
    return this.backEndDatabaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.backEndDatabaseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateContactListDto: UpdateContactListDto) {
    return this.backEndDatabaseService.update(+id, UpdateContactListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.backEndDatabaseService.remove(+id);
  }


  // for messages 

  @Post('/addmsg')
  createm(@Body() CreateMessages: CreateMessages) {
    return this.backEndDatabaseService.createm(CreateMessages);
  }

  // @Get('/allmsg')
  // findAllm(){
  //   return this.backEndDatabaseService.findAllm();
  // }

  // @Get('msg/:id')
  // findOnem(@Param('id') id: string) {
  //   return this.backEndDatabaseService.findOnem(+id);
  // }

  // @Patch('msg/:id')
  // updatem(@Param('id') id: string, @Body() UpdateMessagesDto: UpdateMessagesDto) {
  //   return this.backEndDatabaseService.updatem(+id, UpdateMessagesDto);
  // }

  // @Delete('msg/:id')
  // removem(@Param('id') id: string) {
  //   return this.backEndDatabaseService.removem(+id);
  // }
}
