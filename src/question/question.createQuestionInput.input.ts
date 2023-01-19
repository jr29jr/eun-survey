import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateQuestionInput{
    @Field()
    content: string;

    @Field()
    survey_id : number
}
  