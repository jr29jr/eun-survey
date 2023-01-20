import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateQuestionInput {
  @Field(() => String)
  content : string;

  @Field(() => Int)
  survey_id : number;
}
