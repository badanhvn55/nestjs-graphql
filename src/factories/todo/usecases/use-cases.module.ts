import { Module } from '@nestjs/common';
import { CreateTodoUC, DeleteTodoUC, GetTodoUC, GetTodosUC, UpdateTodoUC } from 'src/application/use-cases';
import { CREATE_TODO, DELETE_TODO, GET_TODO, GET_TODOS, UPDATE_TODO } from 'src/domain/contracts/use-cases';
import { ReposModule } from 'src/infra/repos';
import { useClass } from 'src/utils';

@Module({
    imports: [ReposModule],
    providers: [
        useClass(GET_TODOS, GetTodosUC),
        useClass(GET_TODO, GetTodoUC),
        useClass(CREATE_TODO, CreateTodoUC),
        useClass(UPDATE_TODO, UpdateTodoUC),
        useClass(DELETE_TODO, DeleteTodoUC),
    ],
    exports: [GET_TODOS, GET_TODO, CREATE_TODO, UPDATE_TODO, DELETE_TODO],
})
export class UseCasesModule {}
