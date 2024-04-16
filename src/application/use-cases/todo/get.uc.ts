import { Inject } from '@nestjs/common';
import { ITodoRepo, TODO_REPO } from 'src/domain/contracts/repos';
import { IGetTodo } from 'src/domain/contracts/use-cases/todo';

export class GetTodoUC implements IGetTodo {
    constructor(@Inject(TODO_REPO) private readonly repo: ITodoRepo) {}

    async getTodo(param: IGetTodo.Input): Promise<IGetTodo.Output> {
        return this.repo.getTodo(param);
    }
}
