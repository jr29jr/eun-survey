import { Resolver,Mutation,Args,Query } from '@nestjs/graphql';
import { Int } from 'type-graphql';
import { Survey } from './entity/survey.entity';
import { CreateSurveyInput } from './survey.createSurveyInput.input';
import { SurveyService } from './survey.service';

@Resolver()
export class SurveyResolver {
    constructor(private readonly surveyService: SurveyService) {}

    @Mutation(() => Survey)
    async createSurvey(@Args("inputList") createSurveyInput: CreateSurveyInput) {
      return await this.surveyService.create(createSurveyInput);
    }  

    @Mutation(() => Survey)
    async deleteSurvey(@Args('id', { type: () => Int }) id: number) {
      return await this.surveyService.delete(id);
    } 

    @Query(() => Survey)
    async getSurvey(@Args('id', { type: () => Int }) id: number) {
        return this.surveyService.findById(id);
    }    

}
