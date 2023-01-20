import { CreateUserAnswerInput } from './create-user_answer.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserAnswerInput extends PartialType(CreateUserAnswerInput) {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  user_id: number;

  @Field(() => Int)
  option_id: number;
}
