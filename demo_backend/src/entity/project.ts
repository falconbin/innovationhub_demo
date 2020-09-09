import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { User } from "./user";

@Entity()
export class Project {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    description: string;

    @OneToMany(type => User, user => user.project, {cascade: true})
    users: User[];
}