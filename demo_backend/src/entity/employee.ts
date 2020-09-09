import {Entity, Column,PrimaryGeneratedColumn, OneToOne, JoinColumn,ManyToOne} from "typeorm";

@Entity()
export class Employee {
 
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    email: string;
    
    @Column()
    password: string;
}