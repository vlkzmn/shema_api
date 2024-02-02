import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.ELEPHANT_SQL_URL);
