
import { Connection } from 'typeorm';

import { Employee } from "../entity/employee"
import { createConnection, getConnection} from "typeorm";

export class EmployeeService {
    
    async createEmployee(employee): Promise<Employee> {
        try {
            const connection: Connection = await createConnection()
            // await this.dbhelper.closeConnection()
            const inserted = await connection.getRepository(Employee).save(employee);
            if(inserted){
                return inserted;
            }
            return inserted;
        } finally {
            await getConnection().close();
        }
    }
    async getEmployee(): Promise<Employee[]> {
        try {
            const connection: Connection = await createConnection()
            const employees = await connection.getRepository(Employee).find()
            return employees;
        } finally {
            await getConnection().close();
        }
    }
    async getEmployeeByEmail(email): Promise<Employee[]> {
        try {
            const connection: Connection = await getConnection()
            const employees = await connection.getRepository(Employee).find({email:email})
            return employees;
        } finally {
            await getConnection().close();
        }
    }
}
