import { MigrationInterface, QueryRunner } from "typeorm";

export class CamelCaseLastName1710436007168 implements MigrationInterface {
    name = 'CamelCaseLastName1710436007168'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "lastname" TO "lastName"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "lastName" TO "lastname"`);
    }

}
