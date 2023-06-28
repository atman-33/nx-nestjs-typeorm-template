const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class Test1687954402267 {
    name = 'Test1687954402267'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "REGIONS" ADD "Note" varchar2(255)`);
        await queryRunner.query(`ALTER TABLE "REGIONS" ADD CONSTRAINT "PK_e6360a7aed3df58712e3ba90597" PRIMARY KEY ("REGION_ID")`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_5369db3bd33839fd3b0dd5525d1" FOREIGN KEY ("userId") REFERENCES "user" ("id")`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_5369db3bd33839fd3b0dd5525d1"`);
        await queryRunner.query(`ALTER TABLE "REGIONS" DROP CONSTRAINT "PK_e6360a7aed3df58712e3ba90597"`);
        await queryRunner.query(`ALTER TABLE "REGIONS" DROP COLUMN "Note"`);
    }
}
