import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSurveyInput } from './dto/create-survey.input';
import { Survey } from './entity/survey.entity';
import { UpdateSurveyInput } from './dto/update-survey.input';

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

    async update(id:number,survey: UpdateSurveyInput) {
        const result=await this.surveyRepository.update(id,survey);
        if(result.affected === 0)
            throw new NotFoundException();
        return this.surveyRepository.findOneBy({id});
    }

    async delete(id :number){
        const result = await this.surveyRepository.delete(id);
        console.log(result);
        if(result.affected === 0)
            throw new NotFoundException();
        return "success";
    }
    
}
