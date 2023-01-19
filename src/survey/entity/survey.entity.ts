import { Column, Entity, PrimaryGeneratedColumn,OneToMany } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Question } from 'src/question/entity/question.entitiy';

@ObjectType()
@Entity()
export class Survey {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  title:string;

  @Field(() => [Question])
  @OneToMany(() => Question, question => question.survey_id)
  questions?: Question[];
}