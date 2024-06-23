import { Test, TestingModule } from '@nestjs/testing';
import { CommonUserController } from './common-user.controller';

describe('CommonUserController', () => {
  let controller: CommonUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommonUserController],
    }).compile();

    controller = module.get<CommonUserController>(CommonUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
