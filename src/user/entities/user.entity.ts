import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()//이거 자동으로 안들어가네?
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field( () => String)
  @Column()
  user_id : string;

  @Field(() => String)
  @Column()
  nickname : string;

  @Field(() => String)
  @Column()
  password : string;
}
