import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BackEndDatabaseModule } from './back-end-database/back-end-database.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { contactList } from './back-end-database/entities/ContactList.entity';
import { messages } from './back-end-database/entities/Messages.entity';

@Module({
  imports: [BackEndDatabaseModule,
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'Sakshi@227',
      database:'kyaboltipublicdb',
      synchronize:true,
      entities:[contactList, messages]
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
