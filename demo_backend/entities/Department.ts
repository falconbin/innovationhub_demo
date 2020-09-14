import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity("department", { schema: "dbo" })
export class Department {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nvarchar", { name: "departname", length: 255 })
  departname: string;

  @Column("nvarchar", { name: "description", length: 255 })
  description: string;

  @OneToOne(() => User, (user) => user.department)
  user: User;
}
