import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Survey } from 'src/survey/entity/survey.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Question {

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  content : string;

  @Field(() => Int)
  @Column()
  survey_id : number;

}
