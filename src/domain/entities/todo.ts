// import { IUser } from './user';

export enum TodoStatus {
    PENDING = 'PENDING',
    DONE = 'DONE',
}

export interface ITodo {
    id: string;
    text: string;
    status: TodoStatus;
    createAt: string;
    // user: IUser;
}
