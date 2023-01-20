import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserSurveyInput {
  @Field(() => Int)
  user_id: number;

  @Field(() => Int)
  survey_id: number;
}
