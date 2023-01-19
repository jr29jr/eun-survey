import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateSUrveyInput {
    @Field()
    id : number;

    @Field()
    title: string;
}