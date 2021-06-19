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

  // TODO: Fix
  // describe('getCalculted', () => {
  //   it('should return JSON value from 0.0 to 1', () => {
  //     const appController = app.get<AppController>(AppController);
  //     expect(appController.culculate()).toBe();
  //   });
  // });
});
