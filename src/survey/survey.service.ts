import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSurveyInput } from './dto/create-survey.input';
import { Survey } from './entity/survey.entity';
import { UpdateSurveyInput } from './dto/update-survey.input';
import { Question } from 'src/question/entities/question.entity';

@Injectable()
export class SurveyService {
    constructor(
        @InjectRepository(Survey)
        private surveyRepository: Repository<Survey>,

        @InjectRepository(Question)
        private questionRepository: Repository<Question>,

      ) {}
    
    async create(survey: CreateSurveyInput): Promise<Survey> {
        return await this.surveyRepository.save(survey);
    }
    
    async findOne(id: number): Promise<Survey> {
        //findOne(id)를 아래처럼 바꿔라
        const result=await this.surveyRepository.findOneBy({id});
        //없는 방에 접근하면 오류 처리해야한다.방법을 모르겠네?..
        
        return result;
    }  

    async findAll(){
        return await this.surveyRepository.find();
    }

    async update(id:number,survey: UpdateSurveyInput) {
        const result=await this.surveyRepository.update(id,survey);
        if(result.affected === 0)
            throw new NotFoundException();
        return this.surveyRepository.findOneBy({id});
    }

    async delete(id :number){
        //정상적인 상황에서도 오류띄우는데 어케 해결하냐
        const result = await this.surveyRepository.delete(id);
        console.log(result);
        if(result.affected === 0)
            throw new NotFoundException();
        return null;
    }
}
