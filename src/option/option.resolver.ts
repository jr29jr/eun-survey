import { Resolver,Args,Mutation } from '@nestjs/graphql';
import { Option } from './entity/option.entity';
import { CreateOptionInput } from './option.createOptionInput.input';
import { OptionService } from './option.service';

@Resolver()
export class OptionResolver {
    constructor(private readonly optionService : OptionService) {}

    @Mutation(() => Option)
    async createOption(@Args(`createOptionInput`) createOptionInput: CreateOptionInput) {
      return await this.optionService.create(createOptionInput);
    }

}
