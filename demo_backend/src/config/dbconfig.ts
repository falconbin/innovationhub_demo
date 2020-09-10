import { createConnection, getConnection } from "typeorm";
import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';
import { User } from "../entity/user"
import { Department } from "../entity/department"
import { Project } from "src/entity/project";
import {
    Connection,
} from 'typeorm';

export class DBConfig {
    private readonly connectionOptions: SqlServerConnectionOptions;
    private connection: Connection;
    constructor(host: string, port: number, username: string, password: string, database: string) {
        if (!host || !port || !username || !password || !database) {
            throw new Error('Invalid connection parameters');
        }
        this.connectionOptions = {
            database,
            entities: [User, Department, Project],
            host,
            password,
            port,
            synchronize: true,
            type: 'mssql',
            username
        };
    }
    async getDbConnection(): Promise<Connection> {
        if(this.connection != null) {
            return this.connection;
        } else {
            this.connection = await createConnection(this.connectionOptions);
        }
        return this.connection;
    }
    async closeConnection(): Promise<void> {

        let connection = await getConnection();
        await connection.close();
    }
}

