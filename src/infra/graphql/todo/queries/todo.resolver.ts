import { Inject } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { GET_TODO, GET_TODOS, IGetTodoUC, IGetTodosUC } from 'src/domain/contracts/use-cases';
import { GetTodoInput } from 'src/infra/entities/inputs/get-todo.input';
import { TodoSchema } from 'src/infra/entities/todo.entity';

@Resolver(() => TodoSchema)
export class TodoResolver {
    constructor(
        @Inject(GET_TODOS) private readonly getTodosUC: IGetTodosUC,
        @Inject(GET_TODO) private readonly getTodoUC: IGetTodoUC,
    ) {}

    @Query(() => [TodoSchema])
    async getTodos(): Promise<TodoSchema[]> {
        return this.getTodosUC.getTodos();
    }

    @Query(() => TodoSchema)
    async getTodo(@Args('getTodo') params: GetTodoInput): Promise<TodoSchema> {
        return this.getTodoUC.getTodo(params);
    }
}
