import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateOptionInput{

    @Field()
    score: number;
  
    @Field()
    content: string;
  
    @Field()
    question_id: number;
}