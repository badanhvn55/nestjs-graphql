import { ITodo } from './todo';

export interface IUser {
    id: string;
    username: string;
    password: string;
    todos?: ITodo[];
}

export interface IUserCreate {
    username: string;
    password: string;
}

export interface IUserWithPassword {
    id: string;
    username: string;
    todos?: ITodo[];
}
