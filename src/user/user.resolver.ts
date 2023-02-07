import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginDto } from './dto/login.dto';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserDto) {
    return await this.userService.create(createUserInput);
  }

  @Query(() => User)
  async logIn(@Args('loginDto') loginDto: LoginDto) {
    return await this.userService.login(loginDto);
  }

  //함수명말고 user로 쓰고싶으면 naming 하는거다
  //@Query(() => User, { name: 'user' })
  @Query(() => User)
  async getUser(@Args('user_id', { type: () => String }) user_id: string) {
    return await this.userService.findOne(user_id);
  }

  @Mutation(() => User)
  async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserDto) {
    return await this.userService.update(updateUserInput.user_id, updateUserInput);
  }

  @Mutation(() => User)
  async removeUser(@Args('id', { type: () => Int }) id: number) {
    return await this.userService.remove(id);
  }
}
