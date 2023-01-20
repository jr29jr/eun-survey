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
    private userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput) {
    return await this.userRepository.save(createUserInput);
  }

  async findOne(id: number) :Promise<User>{
    const result=await this.userRepository.findOneBy({id});
    //없는 id접근하는 경우 처리하자

    return result
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    const result=await this.userRepository.update(id,updateUserInput);
    if(result.affected === 0)
        throw new NotFoundException();
    return this.userRepository.findOneBy({id});
  }

  async remove(id: number) {
    //정상적인 상황에서도 null 리턴하는거 처리해야한다.
    const result = await this.userRepository.delete(id);
    console.log(result);
    if(result.affected === 0)
        throw new NotFoundException();
    return null;
  }
}
