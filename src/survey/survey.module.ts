import { Module } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyResolver } from './survey.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Survey } from './entity/survey.entity';
import { QuestionModule } from 'src/question/question.module';

@Module({
  imports: [TypeOrmModule.forFeature([Survey]),QuestionModule],
  exports: [TypeOrmModule],
  providers: [SurveyService, SurveyResolver]
})
export class SurveyModule {}
