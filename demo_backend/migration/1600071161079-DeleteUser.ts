import {MigrationInterface, QueryRunner} from "typeorm";

export class DeleteUser1600071161079 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`drop table [user]`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
