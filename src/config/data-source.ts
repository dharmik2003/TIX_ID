import { DataSource } from "typeorm";

interface ConfigType {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

const postgresConfig: ConfigType = {
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Dharmik123",
  database: "TIX_ID",
};

export const AppDataSource = new DataSource({
  ...postgresConfig,
  type: "postgres",
  entities: ["src/entities/*{.ts,.js}"],
  synchronize: true,
  logging: true,
  migrationsTableName: "migrationtable",
  migrations: ["src/migrations/*{.ts,.js}"],
});
