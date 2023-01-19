import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './entity/question.entitiy';
import { CreateQuestionInput } from './question.createQuestionInput.input';

@Injectable()
export class QuestionService {
    constructor(
        @InjectRepository(Question)
        private questionRepository: Repository<Question>,
      ) {}

      async create(question: CreateQuestionInput): Promise<Question> {
        return await this.questionRepository.save(question);
      }

}
