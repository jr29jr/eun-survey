import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserAnswerInput {
  @Field(() => Int)
  user_id: number;

  @Field(() => Int)
  option_id: number;
}
