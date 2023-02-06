import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class loginDto {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  password: string;
}
