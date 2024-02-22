import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitDatabase1708447215479 implements MigrationInterface {
  name = 'InitDatabase1708447215479';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."dogs_gender_enum" AS ENUM('male', 'female', 'other')`,
    );
    await queryRunner.query(
      `CREATE TABLE "dogs" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "race" character varying NOT NULL, "age" integer NOT NULL, "weight" numeric NOT NULL, "gender" "public"."dogs_gender_enum" NOT NULL DEFAULT 'other', "ownerId" integer, CONSTRAINT "PK_c0911b1d44db6cdd303c6d6afc9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "email" character varying NOT NULL, "address" character varying, "roleUid" integer, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "roles" ("uid" SERIAL NOT NULL, "name" character varying(50) NOT NULL, CONSTRAINT "PK_e34e06fe47bac0926ad12a67a77" PRIMARY KEY ("uid"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "dogs" ADD CONSTRAINT "FK_1661fdbf2ed1ae0d748307e0e01" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_1c1a626ffe54ea904cd54e282e3" FOREIGN KEY ("roleUid") REFERENCES "roles"("uid") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "FK_1c1a626ffe54ea904cd54e282e3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "dogs" DROP CONSTRAINT "FK_1661fdbf2ed1ae0d748307e0e01"`,
    );
    await queryRunner.query(`DROP TABLE "roles"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "dogs"`);
    await queryRunner.query(`DROP TYPE "public"."dogs_gender_enum"`);
  }
}
