import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionInput } from './dto/create-question.input';
import { UpdateQuestionInput } from './dto/update-question.input';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  async create(createQuestionInput: CreateQuestionInput) {
    return await this.questionRepository.save(createQuestionInput);
  }

  async findOne(id: number) :  Promise<Question> {
    //findOne(id)를 아래처럼 바꿔라
    const result=await this.questionRepository.findOneBy({id});
    //없는 방에 접근하면 오류 처리해야한다.방법을 모르겠네?..

    return result;  
  }

  async update(id: number, updateQuestionInput: UpdateQuestionInput) {
    const result=await this.questionRepository.update(id,updateQuestionInput);
    if(result.affected === 0)
        throw new NotFoundException();
    return this.questionRepository.findOneBy({id});
  }

  async remove(id: number) {
    //정상적인 상황에서도 오류띄우는데 어케 해결하냐
    const result = await this.questionRepository.delete(id);
    console.log(result);
    if(result.affected === 0)
        throw new NotFoundException();
    return null;
  }
}
