import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateSurveyInput {
    @Field()
    id : number;

    @Field()
    title: string;
}