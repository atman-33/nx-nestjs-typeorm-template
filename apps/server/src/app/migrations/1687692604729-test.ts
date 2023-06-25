// import { MigrationInterface, QueryRunner } from "typeorm";

// export class Test1687692604729 implements MigrationInterface {
//     name = 'Test1687692604729'

//     public async up(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query(`ALTER TABLE "REGIONS" DROP COLUMN "SYS_C00003_23062510:38:42$"`);
//         await queryRunner.query(`ALTER TABLE "REGIONS" ADD CONSTRAINT "PK_e6360a7aed3df58712e3ba90597" PRIMARY KEY ("REGION_ID")`);
//         await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_5369db3bd33839fd3b0dd5525d1" FOREIGN KEY ("userId") REFERENCES "user" ("id")`);
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_5369db3bd33839fd3b0dd5525d1"`);
//         await queryRunner.query(`ALTER TABLE "REGIONS" DROP CONSTRAINT "PK_e6360a7aed3df58712e3ba90597"`);
//         await queryRunner.query(`ALTER TABLE "REGIONS" ADD "SYS_C00003_23062510:38:42$" varchar2(255)`);
//     }

// }
