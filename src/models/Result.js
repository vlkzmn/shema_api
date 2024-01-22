import { DataTypes } from "sequelize";
import { sequelize } from "../utils/db.js";

export const Result = sequelize.define(
  "result",
  {
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userAnswers: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
    },
  },
  {
    updatedAt: false,
  }
);
