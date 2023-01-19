import { Resolver,Args,Mutation,Query } from '@nestjs/graphql';
import { Int } from 'type-graphql/dist/scalars';
import { User } from './entity/user.entitiy';
import { CreateUserInput } from './user.createUserInput.input';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => User)
    async getUser(@Args('id', { type: () => Int }) id: number) {
        return this.userService.findById(id);
    }

    @Mutation(() => User)
    async createUser(@Args("inputList") createUserInput: CreateUserInput) {
      return await this.userService.create(createUserInput);
    }   
}
