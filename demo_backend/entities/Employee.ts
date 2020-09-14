import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("employee", { schema: "dbo" })
export class Employee {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nvarchar", { name: "email", length: 255 })
  email: string;

  @Column("nvarchar", { name: "password", length: 255 })
  password: string;
}
