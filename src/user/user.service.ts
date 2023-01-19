import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entitiy';
import { CreateUserInput } from './user.createUserInput.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findById(id: number): Promise<User> {
    //findOne(id)를 아래처럼 바꿔라
    return this.userRepository.findOneBy({id});
  }

  async create(user: CreateUserInput): Promise<User> {
    return await this.userRepository.save(user);
  }

}
