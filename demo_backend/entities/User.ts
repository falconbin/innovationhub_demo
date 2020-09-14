import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Department } from "./Department";
import { Project } from "./Project";

@Entity("user", { schema: "dbo" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nvarchar", { name: "name", length: 255 })
  name: string;

  @Column("nvarchar", { name: "gender", length: 255 })
  gender: string;

  @Column("int", { name: "age" })
  age: number;

  @OneToOne(() => Department, (department) => department.user)
  @JoinColumn([{ name: "departmentId", referencedColumnName: "id" }])
  department: Department;

  @ManyToOne(() => Project, (project) => project.users)
  @JoinColumn([{ name: "projectId", referencedColumnName: "id" }])
  project: Project;
}
