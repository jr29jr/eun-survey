import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Survey } from './entity/survey.entity';
import { CreateSurveyInput } from './survey.createSurveyInput.input';

@Injectable()
export class SurveyService {
    constructor(
        @InjectRepository(Survey)
        private userRepository: Repository<Survey>,
      ) {}
    
    async create(survey: CreateSurveyInput): Promise<Survey> {
        return await this.userRepository.save(survey);
    }
}
