import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class LoginDto {
  @Field(() => String)
  user_id: string;

  @Field(() => String)
  password: string;

  @Field(() => Boolean)
  keepLogIn: boolean;
}
