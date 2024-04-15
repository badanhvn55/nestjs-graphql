import { Module } from '@nestjs/common';
import { TodoMutation } from 'src/infra/graphql/todo/mutations';
import { TodoResolver } from 'src/infra/graphql/todo/queries';

import { UseCasesModule } from './usecases';

@Module({
    imports: [UseCasesModule],
    providers: [TodoResolver, TodoMutation],
})
export class TodoModule {}
