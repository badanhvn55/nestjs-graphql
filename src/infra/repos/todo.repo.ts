import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ITodoRepo } from 'src/domain/contracts/repos';
import { ICreateTodo, IDeleteTodo, IGetTodo, IUpdateTodo } from 'src/domain/contracts/use-cases';
import { ITodo } from 'src/domain/entities';
import { Repository } from 'typeorm';

import { TodoSchema } from '../entities/todo.entity';

export class TodoRepo implements ITodoRepo {
    constructor(@InjectRepository(TodoSchema) private readonly repo: Repository<TodoSchema>) {}

    async getTodos(): Promise<ITodo[]> {
        return await this.repo.find();
    }

    async getTodo({ id }: IGetTodo.Input): Promise<IGetTodo.Output> {
        return await this.repo.findOne({ where: { id } });
    }

    async createTodo({ text }: ICreateTodo.Input): Promise<ICreateTodo.Output> {
        return await this.repo.save({ text });
    }

    async updateTodo({ id, text }: IUpdateTodo.Input): Promise<IUpdateTodo.Output> {
        const todo = await this.repo.findOne({ where: { id } });
        if (!todo) throw new NotFoundException('Todo does not exist');
        return await this.repo.save({ ...todo, id, text });
    }

    async deleteTodo({ id }: IDeleteTodo.Input): Promise<IDeleteTodo.Output> {
        const todo = await this.repo.findOne({ where: { id } });
        if (!todo) throw new NotFoundException('Todo does not exist');
        const todoDeleted = await this.repo.remove(todo);
        return { ...todoDeleted, id };
    }
}
