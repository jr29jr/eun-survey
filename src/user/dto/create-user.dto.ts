import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {
  @Field(() => String)
  nickname: string;

  @Field(() => String)
  passwrod: string;
}
