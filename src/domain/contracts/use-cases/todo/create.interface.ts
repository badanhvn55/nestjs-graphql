import { ITodo } from 'src/domain/entities';

export const CREATE_TODO = Symbol('CreateUC');

export interface ICreate {
    create: (param: ICreate.Input) => Promise<ICreate.Output>;
}

export namespace ICreate {
    export type Input = Pick<ITodo, 'text'>;
    export type Output = ITodo;
}
