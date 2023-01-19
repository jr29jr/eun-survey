import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Option {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column()
  score?: number;

  @Field()
  @Column()
  content?: string;

  //onetomany 처리해야한다.
  @Field( () => Int)
  @Column()
  question_id: number;
}