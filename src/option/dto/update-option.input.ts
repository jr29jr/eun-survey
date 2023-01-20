import { CreateOptionInput } from './create-option.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOptionInput extends PartialType(CreateOptionInput) {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  question_id: number;

  @Field(() => String)
  content: string;

  @Field(() => Int)
  score: number;
}
