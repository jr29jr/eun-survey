import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserSurveyInput } from './dto/create-user_survey.input';
import { UpdateUserSurveyInput } from './dto/update-user_survey.input';
import { UserSurvey } from './entities/user_survey.entity';

@Injectable()
export class UserSurveyService {
  constructor(
    @InjectRepository(UserSurvey)
    private userServeyRepository: Repository<UserSurvey>,
  ) {}
  
  async create(createUserSurveyInput: CreateUserSurveyInput) {
    return await this.userServeyRepository.save(createUserSurveyInput);
  }

  async findOne(id: number) {
    const result=await this.userServeyRepository.findOneBy({id});
    //없는 id접근하는 경우 처리하자
    
    return result;
  }

  async findByUserId(id: number) {
    const result=await this.userServeyRepository.find({where : {user_id : id}});
    //없는 id접근하는 경우 처리하자
    
    return result;
  }

  async findBySurveyId(id: number) {
    const result=await this.userServeyRepository.find({where : {survey_id : id}});
    //없는 id접근하는 경우 처리하자
    
    return result;
  }

  async update(id: number, updateUserSurveyInput: UpdateUserSurveyInput) {
    const result=await this.userServeyRepository.update(id,updateUserSurveyInput);
    if(result.affected === 0)
        throw new NotFoundException();
    return this.userServeyRepository.findOneBy({id});
  }

  async remove(id: number) {
    //정상적인 상황에서도 null 리턴하는거 처리해야한다.
    const result = await this.userServeyRepository.delete(id);
    console.log(result);
    if(result.affected === 0)
        throw new NotFoundException();
    return null;
  }
}
