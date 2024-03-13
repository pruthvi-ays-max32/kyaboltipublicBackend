import { Module } from '@nestjs/common';
import { BackEndDatabaseService } from './back-end-database.service';
import { BackEndDatabaseController } from './back-end-database.controller';

@Module({
  controllers: [BackEndDatabaseController],
  providers: [BackEndDatabaseService],
})
export class BackEndDatabaseModule {}
