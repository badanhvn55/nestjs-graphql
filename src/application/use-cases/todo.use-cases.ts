import { Inject } from '@nestjs/common';
import { ITodoRepo, TODO_REPO } from 'src/domain/contracts/repos';
import {
    ICreateTodo,
    ICreateTodoUC,
    IDeleteTodo,
    IDeleteTodoUC,
    IGetTodo,
    IGetTodoUC,
    IGetTodos,
    IGetTodosUC,
    IUpdateTodo,
    IUpdateTodoUC,
} from 'src/domain/contracts/use-cases';

export class CreateTodoUC implements ICreateTodoUC {
    constructor(@Inject(TODO_REPO) private readonly repo: ITodoRepo) {}

    async createTodo(param: ICreateTodo.Input): Promise<ICreateTodo.Output> {
        return this.repo.createTodo(param);
    }
}

export class GetTodosUC implements IGetTodosUC {
    constructor(@Inject(TODO_REPO) private readonly repo: ITodoRepo) {}

    async getTodos(): Promise<IGetTodos.Output> {
        return this.repo.getTodos();
    }
}

export class GetTodoUC implements IGetTodoUC {
    constructor(@Inject(TODO_REPO) private readonly repo: ITodoRepo) {}

    async getTodo(param: IGetTodo.Input): Promise<IGetTodo.Output> {
        return this.repo.getTodo(param);
    }
}

export class UpdateTodoUC implements IUpdateTodoUC {
    constructor(@Inject(TODO_REPO) private readonly repo: ITodoRepo) {}

    async updateTodo(param: IUpdateTodo.Input): Promise<IUpdateTodo.Output> {
        return this.repo.updateTodo(param);
    }
}

export class DeleteTodoUC implements IDeleteTodoUC {
    constructor(@Inject(TODO_REPO) private readonly repo: ITodoRepo) {}

    async deleteTodo(param: IDeleteTodo.Input): Promise<IDeleteTodo.Output> {
        return this.repo.deleteTodo(param);
    }
}
