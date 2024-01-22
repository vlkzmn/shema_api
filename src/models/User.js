import { DataTypes } from "sequelize";
import { sequelize } from "../utils/db.js";

export const User = sequelize.define(
  "user",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    refreshToken: {
      type: DataTypes.STRING,
    },
  },
  {
    updatedAt: false,
  }
);
