import { Field, InputType } from '@nestjs/graphql';
import { IsUUID, Length } from 'class-validator';

@InputType()
export class UpdateTodoInput {
    @Field()
    @IsUUID()
    id: string;

    @Field()
    @Length(3, 100)
    text: string;
}
