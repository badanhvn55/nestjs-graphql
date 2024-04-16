import { ITodo } from 'src/domain/entities';

import { ICreate, IGetTodo } from '../use-cases/todo';

export const TODO_REPO = Symbol('TodoRepo');

export interface ITodoRepo {
    getAll: () => Promise<ITodo[]>;
    getTodo: (params: IGetTodo.Input) => Promise<IGetTodo.Output>;
    create: (params: ICreate.Input) => Promise<ICreate.Output>;
}
