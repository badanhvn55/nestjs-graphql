import { Inject } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { GET_ALL_TODOS, GET_TODO, IGetAllTodos, IGetTodo } from 'src/domain/contracts/use-cases/todo';
import { GetTodoInput } from 'src/infra/entities/inputs/get-todo.input';
import { TodoSchema } from 'src/infra/entities/todo.entity';

@Resolver(() => TodoSchema)
export class TodoResolver {
    constructor(
        @Inject(GET_ALL_TODOS) private readonly todoService: IGetAllTodos,
        @Inject(GET_TODO) private readonly singleTodoService: IGetTodo,
    ) {}

    @Query(() => [TodoSchema])
    async getAll(): Promise<TodoSchema[]> {
        return this.todoService.getAll();
    }

    @Query(() => TodoSchema)
    async getTodo(@Args('getTodo') params: GetTodoInput): Promise<TodoSchema> {
        return this.singleTodoService.getTodo(params);
    }
}
