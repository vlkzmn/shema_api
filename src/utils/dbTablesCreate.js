import "dotenv/config";
import { sequelize } from "./db.js";
// import "../models/User.js";
// import "../models/Result.js";

sequelize.sync({ force: true });
