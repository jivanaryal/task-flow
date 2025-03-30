import "reflect-metadata";
import { DataSource } from "typeorm";

import dotenv from "dotenv";
import { User } from "./entities/User";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  port: Number(process.env.PORT),
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: ["src/migrations/*.ts"],
  subscribers: [],
});
