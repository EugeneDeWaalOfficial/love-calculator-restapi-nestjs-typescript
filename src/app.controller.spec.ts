import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });
  
  describe('getCalculted', () => {
    it('should return JSON value from 0.0 to 1', () => {
      const appService = app.get<AppService>(AppService);
      expect(appService.calculateString('James','Mary')).toBe(86);
    });
  });
});
