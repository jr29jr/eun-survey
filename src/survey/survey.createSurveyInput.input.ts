import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateSurveyInput {
  @Field()
  title: string;

}