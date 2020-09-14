import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm"
import { Question } from "./question.entity"

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @ManyToMany(type => Question, {cascade:true})
    @JoinTable({name:"aaaaaa"})
    questions: Question[]
}