import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from 'src/question/entity/question.entitiy';
import { Repository } from 'typeorm';
import { Survey } from './entity/survey.entity';
import { CreateSurveyInput } from './survey.createSurveyInput.input';

@Injectable()
export class SurveyService {
    constructor(
        @InjectRepository(Survey)
        private surveyRepository: Repository<Survey>,
        
        @InjectRepository(Question)
        private questRepository: Repository<Question>,
      ) {}
    
    findById(id: number): Promise<Survey> {
    //findOne(id)를 아래처럼 바꿔라
        const survey=this.surveyRepository.findOneBy({id});
        this.getQuestions(id);
        return this.surveyRepository.findOneBy({id});
    }  

    async getQuestions(id: number): Promise<Question[]> {
        return await this.questRepository.find({ where: { survey_id: id } });
    }

    async create(survey: CreateSurveyInput): Promise<Survey> {
        return await this.surveyRepository.save(survey);
    }

    async delete(id :number): Promise<void> {
        await this.surveyRepository.delete(id);
    }
    
}
