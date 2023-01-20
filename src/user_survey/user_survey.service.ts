import { Injectable } from '@nestjs/common';
import { CreateUserSurveyInput } from './dto/create-user_survey.input';
import { UpdateUserSurveyInput } from './dto/update-user_survey.input';

@Injectable()
export class UserSurveyService {
  create(createUserSurveyInput: CreateUserSurveyInput) {
    return 'This action adds a new userSurvey';
  }

  findAll() {
    return `This action returns all userSurvey`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userSurvey`;
  }

  update(id: number, updateUserSurveyInput: UpdateUserSurveyInput) {
    return `This action updates a #${id} userSurvey`;
  }

  remove(id: number) {
    return `This action removes a #${id} userSurvey`;
  }
}
