import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddFirstName1710437285877 implements MigrationInterface {
  name = 'AddFirstName1710437285877';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "firstName" character varying(255) NOT NULL DEFAULT ''`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "firstName"`);
  }
}
