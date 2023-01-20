import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Survey } from './entity/survey.entity';
import { CreateSurveyInput } from './survey.createSurveyInput.input';
import { UpdateSUrveyInput } from './update-survey.input';

@Injectable()
export class SurveyService {
    constructor(
        @InjectRepository(Survey)
        private surveyRepository: Repository<Survey>,
      ) {}
    
    findById(id: number): Promise<Survey> {
    //findOne(id)를 아래처럼 바꿔라
        return this.surveyRepository.findOneBy({id});
    }  

    async create(survey: CreateSurveyInput): Promise<Survey> {
        return await this.surveyRepository.save(survey);
    }

    async update(id:number,survey: UpdateSUrveyInput): Promise<Survey> {
        return await this.surveyRepository.save(survey);
    }

    async delete(id :number){

        await this.surveyRepository.delete(id);
    }
    
}
