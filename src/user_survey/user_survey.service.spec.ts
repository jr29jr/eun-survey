import { Test, TestingModule } from '@nestjs/testing';
import { UserSurveyService } from './user_survey.service';

describe('UserSurveyService', () => {
  let service: UserSurveyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserSurveyService],
    }).compile();

    service = module.get<UserSurveyService>(UserSurveyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
