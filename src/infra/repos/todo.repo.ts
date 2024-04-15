import { InjectRepository } from '@nestjs/typeorm';
import { ITodoRepo } from 'src/domain/contracts/repos';
import { ICreate } from 'src/domain/contracts/use-cases/todo';
import { ITodo } from 'src/domain/entities';
import { Repository } from 'typeorm';

import { TodoSchema } from '../entities/todo.entity';

export class TodoRepo implements ITodoRepo {
    constructor(@InjectRepository(TodoSchema) private readonly repo: Repository<TodoSchema>) {}

    async getAll(): Promise<ITodo[]> {
        return this.repo.find();
    }
    async create({ text }: ICreate.Input): Promise<ICreate.Output> {
        return this.repo.save({ text });
    }
}
