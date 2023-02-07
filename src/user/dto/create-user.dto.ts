import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {

  @Field(() => String)
  user_id: string;

  @Field(() => String)
  nickname: string;

  @Field(() => String)
  password: string;
}
