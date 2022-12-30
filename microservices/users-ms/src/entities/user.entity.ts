import { User } from "@gregoris/core";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity( { name: 'users', schema: 'users_ms' })
export class UserEntity implements User {

    @PrimaryGeneratedColumn()
    public id: number = 0;

    @Column({ type: 'text' })
    public username: string = '';
}
