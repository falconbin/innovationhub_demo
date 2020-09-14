
import { Connection } from 'typeorm';

import { Employee } from "../entity/employee"
import { createConnection, getConnection } from "typeorm";

export class EmployeeService {

    async createEmployee(employee): Promise<Employee> {

        const connection: Connection = await getConnection()
        // await this.dbhelper.closeConnection()
        const inserted = await connection.getRepository(Employee).save(employee);
        if (inserted) {
            return inserted;
        }
        return inserted;
    }
    async getEmployee(): Promise<Employee[]> {

        const connection: Connection = await getConnection()
        // const employees = await connection.getRepository(Employee).find()
        const employees = await connection.getRepository(Employee).createQueryBuilder().getMany()
        return employees;

    }
    async getEmployeeByEmail(email): Promise<Employee[]> {
        const connection: Connection = await getConnection()
        const employees = await connection.getRepository(Employee).find({ email: email })
        return employees;
    }
    async getEmployeeByEidLike(eid): Promise<Employee[]> {
        const connection: Connection = await getConnection()
        const employees = await connection.getRepository(Employee).createQueryBuilder().
                          select("employee").from(Employee,"employee").where("employee.eid like %:eid%",{eid:eid})
                          .getMany()
        return employees;
    }
}
