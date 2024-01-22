import { Sequelize } from "sequelize";

// export const sequelize = new Sequelize({
//   dialect: 'postgres',
//   host: process.env.POSTGRES_HOST,
//   database: process.env.POSTGRES_DB,
//   username: process.env.POSTGRES_USER,
//   password: process.env.POSTGRES_PASSWORD,
//   logging: false, // отключает вывод в консоль каждый выполненный SQL-запрос
// });

export const sequelize = new Sequelize(process.env.ELEPHANT_SQL_URL);
