import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPasswordUsers1709829777697 implements MigrationInterface {
  name = 'AddPasswordUsers1709829777697';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "lasname"`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD "lastname" character varying(255) NOT NULL DEFAULT ''`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "password" character varying NOT NULL DEFAULT ''`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "lastname"`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD "lasname" character varying(255) NOT NULL DEFAULT ''`,
    );
  }
}
