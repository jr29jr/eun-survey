import { ApolloDriver,ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entitiy';
import { UserModule } from './user/user.module';
import { OptionModule } from './option/option.module';
import { SurveyModule } from './survey/survey.module';
import { QuestionModule } from './question/question.module';
import { Option } from './option/entity/option.entity';
import { Question } from './question/entity/question.entitiy';
import { Survey } from './survey/entity/survey.entity';


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
    "entities": [User,Option,Question,Survey,'dist/**/*.entity.{ts,js}'],
    "synchronize": false
  }), UserModule, OptionModule, SurveyModule, QuestionModule],
  controllers: [],
  providers: []
})
export class AppModule {}
