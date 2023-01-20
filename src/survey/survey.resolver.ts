import { Resolver,Mutation,Args,Query, ResolveField } from '@nestjs/graphql';
import { Int } from 'type-graphql';
import { CreateSurveyInput } from './dto/create-survey.input';
import { Survey } from './entity/survey.entity';
import { SurveyService } from './survey.service';
import { UpdateSurveyInput } from './dto/update-survey.input';

@Resolver()
export class SurveyResolver {
    constructor(private readonly surveyService: SurveyService) {}

    @Mutation(() => Survey)
    async createSurvey(@Args("inputList") createSurveyInput: CreateSurveyInput) {
      return await this.surveyService.create(createSurveyInput);
    }  

    @Mutation(() => Survey)
    async updateSurvey(@Args("updateInfo") updateInfo: UpdateSurveyInput) {
      return await this.surveyService.update(updateInfo.id,updateInfo);
    }  

    @Mutation(() => Survey)
    async removeSurvey(@Args('id', { type: () => Int }) id: number) {
      return await this.surveyService.delete(id);
    } 

    @Query(() => Survey)
    async getSurvey(@Args('id', { type: () => Int }) id: number) {
        return await this.surveyService.findOne(id);
    }

    @Query(() => [Survey])
    async getAll(){
        return await this.surveyService.findAll();
    }
}
