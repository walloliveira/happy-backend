import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class createOrphanages1602629400391 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'orphanages',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'latitude',
            type: 'decimal',
            scale: 10,
            precision: 2,
            isNullable: false,
            default: 0,
          },
          {
            name: 'longitude',
            type: 'decimal',
            scale: 10,
            precision: 2,
            isNullable: false,
          },
          {
            name: 'about',
            type: 'text',
            isNullable: true,
            default: "''",
          },
          {
            name: 'instructions',
            type: 'text',
            isNullable: true,
            default: "''",
          },
          {
            name: 'opens_at_weekends',
            type: 'boolean',
            default: false,
          },
          {
            name: 'opening_hours',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('orphanages');
    }
}
