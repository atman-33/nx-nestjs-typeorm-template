import { MigrationInterface, QueryRunner } from "typeorm";

export class Test11687689588932 implements MigrationInterface {
    name = 'Test11687689588932'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "REGIONS" DROP COLUMN "SYS_C00003_23062510:38:42$"`);
        await queryRunner.query(`ALTER TABLE "REGIONS" ADD CONSTRAINT "PK_e6360a7aed3df58712e3ba90597" PRIMARY KEY ("REGION_ID")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "REGIONS" DROP CONSTRAINT "PK_e6360a7aed3df58712e3ba90597"`);
        await queryRunner.query(`ALTER TABLE "REGIONS" ADD "SYS_C00003_23062510:38:42$" varchar2(255)`);
    }

}
