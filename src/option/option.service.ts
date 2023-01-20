import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOptionInput } from './dto/create-option.input';
import { UpdateOptionInput } from './dto/update-option.input';
import { Option } from './entities/option.entity';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(Option)
    private optionRepository: Repository<Option>,
  ) {}
  
  async create(createOptionInput: CreateOptionInput) {
    return await this.optionRepository.save(createOptionInput);
  }

  async findOne(id: number) {
    const result=await this.optionRepository.findOneBy({id});
    //없는 id접근하는 경우 처리하자
    
    return result
  }

  async update(id: number, updateOptionInput: UpdateOptionInput) {
    const result=await this.optionRepository.update(id,updateOptionInput);
    if(result.affected === 0)
        throw new NotFoundException();
    return this.optionRepository.findOneBy({id});
  }

  async remove(id: number) {
    //정상적인 상황에서도 null 리턴하는거 처리해야한다.
    const result = await this.optionRepository.delete(id);
    console.log(result);
    if(result.affected === 0)
        throw new NotFoundException();
    return null;  
  }
}
