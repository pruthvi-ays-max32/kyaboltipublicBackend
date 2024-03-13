import { Test, TestingModule } from '@nestjs/testing';
import { BackEndDatabaseService } from './back-end-database.service';

describe('BackEndDatabaseService', () => {
  let service: BackEndDatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BackEndDatabaseService],
    }).compile();

    service = module.get<BackEndDatabaseService>(BackEndDatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
