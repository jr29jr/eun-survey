import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OptionService } from './option.service';
import { Option } from './entities/option.entity';
import { CreateOptionInput } from './dto/create-option.input';
import { UpdateOptionInput } from './dto/update-option.input';

@Resolver(() => Option)
export class OptionResolver {
  constructor(private readonly optionService: OptionService) {}

  @Mutation(() => Option)
  async createOption(@Args('createOptionInput') createOptionInput: CreateOptionInput) {
    return await this.optionService.create(createOptionInput);
  }


  @Query(() => Option)
  async getOption(@Args('id', { type: () => Int }) id: number) {
    return await this.optionService.findOne(id);
  }

  @Mutation(() => Option)
  async updateOption(@Args('updateOptionInput') updateOptionInput: UpdateOptionInput) {
    return await this.optionService.update(updateOptionInput.id, updateOptionInput);
  }

  @Mutation(() => Option)
  async removeOption(@Args('id', { type: () => Int }) id: number) {
    return await this.optionService.remove(id);
  }
}
