import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ITodo, TodoStatus } from 'src/domain/entities';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// import { UserSchema } from './user.entity';

@Entity('todo')
@ObjectType('Todo')
export class TodoSchema implements ITodo {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: string;

    @Column()
    @Field()
    text: string;

    @Column({ default: TodoStatus.PENDING })
    @Field()
    status: TodoStatus;

    @Column({ default: new Date().toISOString() })
    @Field()
    createAt: string;

    // @ManyToOne(() => UserSchema, (user) => user.todos)
    // @Field(() => UserSchema)
    // user: UserSchema;
}
