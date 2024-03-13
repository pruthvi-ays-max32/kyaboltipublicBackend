import { Test, TestingModule } from '@nestjs/testing';
import { BackEndDatabaseController } from './back-end-database.controller';
import { BackEndDatabaseService } from './back-end-database.service';

describe('BackEndDatabaseController', () => {
  let controller: BackEndDatabaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BackEndDatabaseController],
      providers: [BackEndDatabaseService],
    }).compile();

    controller = module.get<BackEndDatabaseController>(BackEndDatabaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
