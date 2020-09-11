import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Question {
    @Column()
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    title: string
    @Column()
    text: string
}