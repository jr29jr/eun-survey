import { Resolver,Args,Mutation,Query } from '@nestjs/graphql';
import { Question } from './entity/question.entitiy';
import { CreateQuestionInput } from './question.createQuestionInput.input';
import { QuestionService } from './question.service';

@Resolver()
export class QuestionResolver {
    constructor(private readonly questionService: QuestionService) {}

    @Mutation(() => Question)
    async createQuestion(@Args("createQuestionInput") createQuestionInput: CreateQuestionInput) {
      return await this.questionService.create(createQuestionInput);
    }   

}
