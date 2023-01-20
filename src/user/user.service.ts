import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private surveyRepository: Repository<User>,
  ) {}

  create(createUserInput: CreateUserInput) {
    return this.surveyRepository.save(createUserInput);
  }

  findOne(id: number) {
    const result=this.surveyRepository.findOneBy({id});
    //없는 id접근하는 경우 처리하자/
    return result
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    const result=await this.surveyRepository.update(id,updateUserInput);
    if(result.affected === 0)
        throw new NotFoundException();
    return this.surveyRepository.findOneBy({id});
  }

  async remove(id: number) {
    //정상적인 상황에서도 오류띄우는데 어케 해결하냐
    const result = await this.surveyRepository.delete(id);
    console.log(result);
    if(result.affected === 0)
        throw new NotFoundException();
    return null;
  }
}
