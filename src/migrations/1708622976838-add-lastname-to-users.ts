import { MigrationInterface, QueryRunner } from "typeorm";

export class AddLastnameToUsers1708622976838 implements MigrationInterface {
    name = 'AddLastnameToUsers1708622976838'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "lasname" character varying(255) NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "lasname"`);
    }

}
