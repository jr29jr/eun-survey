import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class loginDto {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  password: string;
}
