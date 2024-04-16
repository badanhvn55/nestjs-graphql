import { ITodo } from 'src/domain/entities';

export const GET_TODO = Symbol('GetTodoUC');

export interface IGetTodo {
    getTodo: (param: IGetTodo.Input) => Promise<IGetTodo.Output>;
}

export namespace IGetTodo {
    export type Input = Pick<ITodo, 'id'>;
    export type Output = ITodo;
}
