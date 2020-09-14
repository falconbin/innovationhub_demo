import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./Question";

@Entity("category", { schema: "dbo" })
export class Category {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nvarchar", { name: "name", length: 255 })
  name: string;

  @ManyToMany(() => Question, (question) => question.categories)
  questions: Question[];
}
