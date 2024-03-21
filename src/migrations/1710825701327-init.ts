import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserTable1710825701327 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
            length: "255",
          },
          {
            name: "phone_number",
            type: "varchar",
            length: "20",
          },
          {
            name: "email",
            type: "varchar",
            length: "255",
          },
          {
            name: "password",
            type: "varchar",
            length: "255",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user");
  }
}
