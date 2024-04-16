import { ITodo } from 'src/domain/entities';
import { UpdateTodoInput } from 'src/infra/entities/inputs/update-todo.input';

export const CREATE_TODO = Symbol('CREATE-TODO-UC');
export const GET_TODOS = Symbol('GET-TODOS-UC');
export const GET_TODO = Symbol('GET-TODO-UC');
export const UPDATE_TODO = Symbol('UPDATE-TODO-UC');
export const DELETE_TODO = Symbol('DELETE-TODO-UC');

// Create
export interface ICreateTodoUC {
    createTodo: (param: ICreateTodo.Input) => Promise<ICreateTodo.Output>;
}

export namespace ICreateTodo {
    export type Input = Pick<ITodo, 'text'>;
    export type Output = ITodo;
}

// Get all
export interface IGetTodosUC {
    getTodos: () => Promise<ITodo[]>;
}

export namespace IGetTodos {
    export type Output = ITodo[];
}

// Get single
export interface IGetTodoUC {
    getTodo: (param: IGetTodo.Input) => Promise<IGetTodo.Output>;
}

export namespace IGetTodo {
    export type Input = Pick<ITodo, 'id'>;
    export type Output = ITodo;
}

// Update
export interface IUpdateTodoUC {
    updateTodo: (param: IUpdateTodo.Input) => Promise<IUpdateTodo.Output>;
}

export namespace IUpdateTodo {
    export type Input = Pick<ITodo, keyof UpdateTodoInput>;
    export type Output = ITodo;
}

// Delete
export interface IDeleteTodoUC {
    deleteTodo: (param: IDeleteTodo.Input) => Promise<IDeleteTodo.Output>;
}

export namespace IDeleteTodo {
    export type Input = Pick<ITodo, 'id'>;
    export type Output = ITodo;
}
