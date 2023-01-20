import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { QuestionService } from './question.service';
import { Question } from './entities/question.entity';
import { CreateQuestionInput } from './dto/create-question.input';
import { UpdateQuestionInput } from './dto/update-question.input';

@Resolver(() => Question)
export class QuestionResolver {
  constructor(private readonly questionService: QuestionService) {}

  @Mutation(() => Question)
  async createQuestion(@Args('createQuestionInput') createQuestionInput: CreateQuestionInput) {
    return await this.questionService.create(createQuestionInput);
  }

  @Query(() => Question)
  async getQuestion(@Args('id', { type: () => Int }) id: number) {
    return await this.questionService.findOne(id);
  }

  @Mutation(() => Question)
  async updateQuestion(@Args('updateQuestionInput') updateQuestionInput: UpdateQuestionInput) {
    return await this.questionService.update(updateQuestionInput.id, updateQuestionInput);
  }

  @Mutation(() => Question)
  async removeQuestion(@Args('id', { type: () => Int }) id: number) {
    return await this.questionService.remove(id);
  }
}
