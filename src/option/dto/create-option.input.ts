import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOptionInput {
  @Field(() => Int)
  question_id: number;

  @Field(() => String)
  content: string;

  @Field(() => Int)
  score: number;
}
