import { Module } from '@nestjs/common';
import { UserSurveyService } from './user_survey.service';
import { UserSurveyResolver } from './user_survey.resolver';
import { UserSurvey } from './entities/user_survey.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserSurvey])],
  exports: [TypeOrmModule],
  providers: [UserSurveyResolver, UserSurveyService]
})
export class UserSurveyModule {}
