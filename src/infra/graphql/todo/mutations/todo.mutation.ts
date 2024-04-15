import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CREATE_TODO, ICreate } from 'src/domain/contracts/use-cases/todo';
import { CreateTodoInput } from 'src/infra/entities/inputs';
import { TodoSchema } from 'src/infra/entities/todo.entity';

@Resolver(() => TodoSchema)
export class TodoMutation {
    constructor(@Inject(CREATE_TODO) private readonly todoService: ICreate) {}

    @Mutation(() => TodoSchema)
    async create(@Args('createTodo') params: CreateTodoInput): Promise<TodoSchema> {
        return this.todoService.create(params);
    }
}
