import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionResolver } from './question.resolver';
import { Question } from './entities/question.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Question])],
  exports: [TypeOrmModule],
  providers: [QuestionResolver, QuestionService]
})
export class QuestionModule {}
