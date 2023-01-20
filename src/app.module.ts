import { ApolloDriver,ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyModule } from './survey/survey.module';
import { Survey } from './survey/entity/survey.entity';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { QuestionModule } from './question/question.module';
import { Question } from './question/entities/question.entity';
import { OptionModule } from './option/option.module';
import { Option } from './option/entities/option.entity';
import { UserSurveyModule } from './user_survey/user_survey.module';
import { UserSurvey } from './user_survey/entities/user_survey.entity';
import { UserAnswerModule } from './user_answer/user_answer.module';
import { UserAnswer } from './user_answer/entities/user_answer.entity';


@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: 'schema.gql',
  }),TypeOrmModule.forRoot({
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "1234",
    "database": "food_survey",
    "entities": [Survey,User,Question,Option,UserSurvey,UserAnswer,'dist/**/*.entity.{ts,js}'],
    "synchronize": false
  }),SurveyModule, UserModule, QuestionModule, OptionModule, UserSurveyModule, UserAnswerModule],
  controllers: [],
  providers: []
})
export class AppModule {}
