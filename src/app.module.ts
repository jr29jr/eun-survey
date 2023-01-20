import { ApolloDriver,ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyModule } from './survey/survey.module';
import { Survey } from './survey/entity/survey.entity';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { QuestionModule } from './question/question.module';


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
    "entities": [Survey,User,'dist/**/*.entity.{ts,js}'],
    "synchronize": false
  }),SurveyModule, UserModule, QuestionModule],
  controllers: [],
  providers: []
})
export class AppModule {}
