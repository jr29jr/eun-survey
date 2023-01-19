import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Option } from './entity/option.entity';
import { CreateOptionInput } from './option.createOptionInput.input';

@Injectable()
export class OptionService {
    constructor(
        @InjectRepository(Option)
        private optionRepository: Repository<Option>,
      ) {}

    //CreateOptionInput 옵션 정보를 받는다.
    async create(option:CreateOptionInput): Promise<Option> {
        return await this.optionRepository.save(option);
      }
}
