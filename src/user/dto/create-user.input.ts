import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  nickname: string;

  @Field(() => String)
  passwrod: string;
}
