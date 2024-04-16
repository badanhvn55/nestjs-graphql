import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import {
    CREATE_TODO,
    DELETE_TODO,
    ICreateTodoUC,
    IDeleteTodoUC,
    IUpdateTodoUC,
    UPDATE_TODO,
} from 'src/domain/contracts/use-cases';
import { CreateTodoInput, GetTodoInput } from 'src/infra/entities/inputs';
import { UpdateTodoInput } from 'src/infra/entities/inputs/update-todo.input';
import { TodoSchema } from 'src/infra/entities/todo.entity';

@Resolver(() => TodoSchema)
export class TodoMutation {
    constructor(
        @Inject(CREATE_TODO) private readonly createTodoUC: ICreateTodoUC,
        @Inject(UPDATE_TODO) private readonly updateTodoUC: IUpdateTodoUC,
        @Inject(DELETE_TODO) private readonly deleteTodoUC: IDeleteTodoUC,
    ) {}

    @Mutation(() => TodoSchema)
    async createTodo(@Args('createTodo') params: CreateTodoInput): Promise<TodoSchema> {
        return this.createTodoUC.createTodo(params);
    }

    @Mutation(() => TodoSchema)
    async updateTodo(@Args('updateTodo') params: UpdateTodoInput): Promise<TodoSchema> {
        return this.updateTodoUC.updateTodo(params);
    }

    @Mutation(() => TodoSchema)
    async deleteTodo(@Args('deleteTodo') params: GetTodoInput): Promise<TodoSchema> {
        return this.deleteTodoUC.deleteTodo(params);
    }
}
