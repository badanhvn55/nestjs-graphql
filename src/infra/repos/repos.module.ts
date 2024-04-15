import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TODO_REPO } from 'src/domain/contracts/repos';
import { useClass } from 'src/utils';

import { TodoSchema } from '../entities/todo.entity';
import { TodoRepo } from './todo.repo';

@Module({
    imports: [TypeOrmModule.forFeature([TodoSchema])],
    providers: [useClass(TODO_REPO, TodoRepo)],
    exports: [TODO_REPO],
})
export class ReposModule {}
