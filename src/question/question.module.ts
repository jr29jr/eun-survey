import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OptionModule } from 'src/option/option.module';
import { Question } from './entity/question.entitiy';
import { QuestionResolver } from './question.resolver';
import { QuestionService } from './question.service';

@Module({
  imports: [TypeOrmModule.forFeature([Question]),OptionModule],
  providers: [QuestionResolver, QuestionService]
})
export class QuestionModule {}
