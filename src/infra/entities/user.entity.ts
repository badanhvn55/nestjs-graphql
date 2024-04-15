import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IUser } from 'src/domain/entities';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// import { TodoSchema } from './todo.entity';

@Entity('user')
@ObjectType('User')
export class UserSchema implements IUser {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: string;

    @Column({ unique: true })
    @Field()
    username: string;

    @Column()
    @Field()
    password: string;

    // @OneToMany(() => TodoSchema, (todo) => todo.user)
    // @Field(() => [TodoSchema])
    // todos?: TodoSchema[];
}
