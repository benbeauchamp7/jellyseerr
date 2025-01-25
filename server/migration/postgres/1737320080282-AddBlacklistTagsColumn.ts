import type { MigrationInterface, QueryRunner } from 'typeorm';

export class AddBlacklistTagsColumn1737320080282 implements MigrationInterface {
  name = 'AddBlacklistTagsColumn1737320080282';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "blacklist" ADD blacktags character varying NOT NULL DEFAULT ''`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "blacklist" DROP COLUMN blacktags`);
  }
}
