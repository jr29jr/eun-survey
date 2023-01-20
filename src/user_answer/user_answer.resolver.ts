import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserAnswerService } from './user_answer.service';
import { UserAnswer } from './entities/user_answer.entity';
import { CreateUserAnswerInput } from './dto/create-user_answer.input';
import { UpdateUserAnswerInput } from './dto/update-user_answer.input';

@Resolver(() => UserAnswer)
export class UserAnswerResolver {
  constructor(private readonly userAnswerService: UserAnswerService) {}

  @Mutation(() => UserAnswer)
  async createUserAnswer(@Args('createUserAnswerInput') createUserAnswerInput: CreateUserAnswerInput) {
    return await this.userAnswerService.create(createUserAnswerInput);
  }


  @Query(() => UserAnswer)
  async getUserAnswer(@Args('id', { type: () => Int }) id: number) {
    return await this.userAnswerService.findOne(id);
  }

  @Mutation(() => UserAnswer)
  async updateUserAnswer(@Args('updateUserAnswerInput') updateUserAnswerInput: UpdateUserAnswerInput) {
    return await this.userAnswerService.update(updateUserAnswerInput.id, updateUserAnswerInput);
  }

  @Mutation(() => UserAnswer)
  async removeUserAnswer(@Args('id', { type: () => Int }) id: number) {
    return await this.userAnswerService.remove(id);
  }
}
