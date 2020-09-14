import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity("project", { schema: "dbo" })
export class Project {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nvarchar", { name: "name", length: 255 })
  name: string;

  @Column("nvarchar", { name: "description", length: 255 })
  description: string;

  @OneToMany(() => User, (user) => user.project)
  users: User[];
}
