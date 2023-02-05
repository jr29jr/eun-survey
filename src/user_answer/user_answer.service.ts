import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { filter } from 'rxjs';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserAnswerInput } from './dto/create-user_answer.input';
import { UpdateUserAnswerInput } from './dto/update-user_answer.input';
import { UserAnswer } from './entities/user_answer.entity';

@Injectable()
export class UserAnswerService {
  constructor(
    @InjectRepository(UserAnswer)
    private userAnswerRepository: Repository<UserAnswer>,
  ) {}

  async create(createUserAnswerInput: CreateUserAnswerInput) {
    return await this.userAnswerRepository.save(createUserAnswerInput);
  }

  async findOne(id: number) {
    const result=await this.userAnswerRepository.findOneBy({id});
    console.log(result);
    //없는 id접근하는 경우 처리하자
    if(result === null)
      throw new NotFoundException();
    return result;
  }

  async findByUserId(id: number) {
    const result=await this.userAnswerRepository.find({where : {user_id : id}});
    return result;
  }

  async update(id: number, updateUserAnswerInput: UpdateUserAnswerInput) {
    const result=await this.userAnswerRepository.update(id,updateUserAnswerInput);
    if(result.affected === 0)
        throw new NotFoundException();
    return this.userAnswerRepository.findOneBy({id});
  }

  async remove(id: number) {
    //정상적인 상황에서도 null 리턴하는거 처리해야한다.
    const result = await this.userAnswerRepository.delete(id);
    console.log(result);
    if(result.affected === 0)
        throw new NotFoundException();
    return new User();
  }
}
