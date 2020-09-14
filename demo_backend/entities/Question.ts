import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./Category";

@Entity("question", { schema: "dbo" })
export class Question {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nvarchar", { name: "title", length: 255 })
  title: string;

  @Column("nvarchar", { name: "text", length: 255 })
  text: string;

  @ManyToMany(() => Category, (category) => category.questions)
  @JoinTable({
    name: "aaaaaa",
    joinColumns: [{ name: "questionId", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "categoryId", referencedColumnName: "id" }],
    schema: "dbo",
  })
  categories: Category[];
}
