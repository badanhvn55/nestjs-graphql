import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class GetTodoInput {
    @Field()
    @IsUUID()
    id: string;
}
