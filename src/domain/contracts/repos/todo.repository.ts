import { ITodo } from 'src/domain/entities';

import { ICreateTodo, IDeleteTodo, IGetTodo, IUpdateTodo } from '../use-cases';

export const TODO_REPO = Symbol('TODO-REPO');

export interface ITodoRepo {
    createTodo: (params: ICreateTodo.Input) => Promise<ICreateTodo.Output>;
    getTodos: () => Promise<ITodo[]>;
    getTodo: (params: IGetTodo.Input) => Promise<IGetTodo.Output>;
    updateTodo: (params: IUpdateTodo.Input) => Promise<IUpdateTodo.Output>;
    deleteTodo: (params: IDeleteTodo.Input) => Promise<IDeleteTodo.Output>;
}
