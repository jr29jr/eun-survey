import { Injectable, NotFoundException, UseFilters } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async login(loginDto : LoginDto) : Promise<User>{
    //암호 확인하는 과정
    //비밀번호 찾는과정
    const user=await this.findOne(loginDto.user_id);

    //존재하지 않는 아이디일 경우
    if(user === null){
      throw new NotFoundException("존재하지 않는 id");
    }

    //아이디가 존재할 경우
    const match = await bcrypt.compare(loginDto.password,user.password);
    //일치할 경우
    if(match){
      //로그인 유지를 원하는지 확인한다.
      //둘다 쿠키에 저장하는 과정은 존재해야한다.
      if(loginDto.keepLogIn === true){
        //유지시간을 6개월로 하고 넘으면 휴면유저에 대한 처리를 하자
      }
      //유지시간을 6시간으로 하자.
      else{

      }
      //여기서 쿠키를 만들어서 넘겨줘야한다.
      console.log("성공");
    }
    //틀릴 경우
    else{
      console.log("실패");
    }
    return user;
  }
  async create(createUserDto: CreateUserDto) {
    //bcrupyt 암호화를 진행하자.
    const hash= await bcrypt.hash(createUserDto.password,10);
    //내부에서 저장하라고 권장한다.
    console.log(hash);
    //비밀번호 암호화해서 저장.
    createUserDto.password=hash;
    console.log(this.findOne(createUserDto.user_id));
    //아이디 존재하는지 확인하는 과정이 있어야한다.(중복 확인하는거 나중에 넣자)   
    
    return this.userRepository.save(createUserDto); 
  }
  //user_id로 찾는거다.
  async findOne(user_id: string) :Promise<User>{
    const result=await this.userRepository.findOneBy({user_id : user_id});
    //없는 id접근하는 경우 처리하자

    return result;
  }
  
  async update(user_id: string, updateUserInput: UpdateUserDto) {
    const result=await this.userRepository.update({user_id : user_id},updateUserInput);
    const id=3
    if(result.affected === 0)
        throw new NotFoundException();
    return await this.userRepository.findOneBy({user_id : user_id});
  }

  async remove(id: number) {
    //정상적인 상황에서도 null 리턴하는거 처리해야한다.
    const result = await this.userRepository.delete(id);
    console.log(result);
    return null;
  }
}