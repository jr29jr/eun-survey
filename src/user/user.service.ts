import { Injectable, NotFoundException, UseFilters } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserDto) {
    //bcrupyt 암호화를 진행하자.
    const hash= await bcrypt.hash(createUserInput.passwrod,10);
    console.log(hash);
    //비밀번호 암호화해서 저장.
    createUserInput.passwrod=hash;
    return await this.userRepository.save(createUserInput);
  }

  async findOne(id: number) :Promise<User>{
    const result=await this.userRepository.findOneBy({id});
    //없는 id접근하는 경우 처리하자

    return result;
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
    return null;
  }
}