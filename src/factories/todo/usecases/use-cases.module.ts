import { Module } from '@nestjs/common';
import { CreateUC, GetAllUC } from 'src/application/use-cases/todo';
import { GetTodoUC } from 'src/application/use-cases/todo/get.uc';
import { CREATE_TODO, GET_ALL_TODOS, GET_TODO } from 'src/domain/contracts/use-cases/todo';
import { ReposModule } from 'src/infra/repos';
import { useClass } from 'src/utils';

@Module({
    imports: [ReposModule],
    providers: [useClass(GET_ALL_TODOS, GetAllUC), useClass(GET_TODO, GetTodoUC), useClass(CREATE_TODO, CreateUC)],
    exports: [GET_ALL_TODOS, GET_TODO, CREATE_TODO],
})
export class UseCasesModule {}
