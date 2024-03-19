import { MigrationInterface, QueryRunner } from "typeorm";

export class AddFirstName1710436296466 implements MigrationInterface {
    name = 'AddFirstName1710436296466'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "name" character varying(255) NOT NULL`);
    }

}
