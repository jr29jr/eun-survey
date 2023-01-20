import { Module } from '@nestjs/common';
import { UserAnswerService } from './user_answer.service';
import { UserAnswerResolver } from './user_answer.resolver';
import { UserAnswer } from './entities/user_answer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserAnswer])],
  exports: [TypeOrmModule],
  providers: [UserAnswerResolver, UserAnswerService]
})
export class UserAnswerModule {}
