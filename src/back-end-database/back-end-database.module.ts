import { Module } from '@nestjs/common';
import { BackEndDatabaseService } from './back-end-database.service';
import { BackEndDatabaseController } from './back-end-database.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { contactList } from './entities/ContactList.entity';
import { message } from './entities/Messages.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([contactList, message])
  ],
  controllers: [BackEndDatabaseController],
  providers: [BackEndDatabaseService],
})
export class BackEndDatabaseModule {}
