import { Test, TestingModule } from '@nestjs/testing';
import { UserSurveyResolver } from './user_survey.resolver';
import { UserSurveyService } from './user_survey.service';

describe('UserSurveyResolver', () => {
  let resolver: UserSurveyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserSurveyResolver, UserSurveyService],
    }).compile();

    resolver = module.get<UserSurveyResolver>(UserSurveyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
