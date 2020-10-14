import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class createImages1602637354081 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'images',
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
            name: 'path',
            type: 'varchar',
          },
          {
            name: 'orphanage_id',
            type: 'uuid',
          },
        ],
        foreignKeys: [
          {
            name: 'image_orphanage_fk',
            columnNames: ['orphanage_id'],
            referencedTableName: 'orphanages',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('images');
    }
}
