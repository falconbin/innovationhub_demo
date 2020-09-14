import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("employee", { schema: "dbo" })
export class Employee {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;
  @Column("nvarchar", { name: "eid", length: 255 })
  eid: String;

  @Column("nvarchar", { name: "role", length: 255 })
  role: String;

  @Column("nvarchar", { name: "belongto", length: 255 })
  belongto: String;

  @Column("nvarchar", { name: "email", length: 255 })
  email: string;

  @Column("nvarchar", { name: "password", length: 255 })
  password: string;
}
