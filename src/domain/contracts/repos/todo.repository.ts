import { ITodo } from 'src/domain/entities';

import { ICreate } from '../use-cases/todo';

export const TODO_REPO = Symbol('TodoRepo');

export interface ITodoRepo {
    getAll: () => Promise<ITodo[]>;
    create: (params: ICreate.Input) => Promise<ICreate.Output>;
}
