import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserSurveyService } from './user_survey.service';
import { UserSurvey } from './entities/user_survey.entity';
import { CreateUserSurveyInput } from './dto/create-user_survey.input';
import { UpdateUserSurveyInput } from './dto/update-user_survey.input';

@Resolver(() => UserSurvey)
export class UserSurveyResolver {
  constructor(private readonly userSurveyService: UserSurveyService) {}

  @Mutation(() => UserSurvey)
  async createUserSurvey(@Args('createUserSurveyInput') createUserSurveyInput: CreateUserSurveyInput) {
    return await this.userSurveyService.create(createUserSurveyInput);
  }

  @Query(() => UserSurvey)
  async getUesrServey(@Args('id', { type: () => Int }) id: number) {
    return await this.userSurveyService.findOne(id);
  }

  @Mutation(() => UserSurvey)
  async updateUserSurvey(@Args('updateUserSurveyInput') updateUserSurveyInput: UpdateUserSurveyInput) {
    return await this.userSurveyService.update(updateUserSurveyInput.id, updateUserSurveyInput);
  }

  @Mutation(() => UserSurvey)
  async removeUserSurvey(@Args('id', { type: () => Int }) id: number) {
    return await this.userSurveyService.remove(id);
  }
}
