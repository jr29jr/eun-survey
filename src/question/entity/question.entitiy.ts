import { Column, Entity, PrimaryGeneratedColumn,OneToMany } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Option } from 'src/option/entity/option.entity';

@ObjectType()
@Entity()
export class Question {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  content: string;

  @Field(() => Int)
  @Column()
  survey_id : number;
  
  @Field(() => [Option])
  @OneToMany(() => Option, option => option.question_id)
  options?: Option[];

}