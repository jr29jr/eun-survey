import { CreateUserDto } from './create-user.dto';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserDto extends PartialType(CreateUserDto) {
  @Field(() => String)
  user_id: string;

  @Field(() => String)
  nickname: string;
}
