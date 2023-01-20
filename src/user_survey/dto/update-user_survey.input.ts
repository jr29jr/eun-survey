import { CreateUserSurveyInput } from './create-user_survey.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserSurveyInput extends PartialType(CreateUserSurveyInput) {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  user_id: number;

  @Field(() => Int)
  survey_id: number;
}
