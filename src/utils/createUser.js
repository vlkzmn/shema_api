import "dotenv/config";
import "../models/User.js";
import { User } from "../models/User.js";
import { Result } from "../models/Result.js";
import bcrypt from "bcrypt";

// const name = "kato";
// const password = "*****";
// const hash = await bcrypt.hash(password, 10);

// await User.create({
//   name,
//   password: hash,
// });

// const user = "name";
// const userAnswers = [
//   2, 5, 3, 4, 2, 3, 3, 5, 3, 3, 4, 4, 2, 5, 3, 6, 6, 2, 1, 4, 6, 4, 3, 1, 4, 4,
//   4, 4, 3, 2, 3, 2, 6, 5, 6, 4, 2, 5, 4, 4, 1, 4, 4, 1, 3, 4, 3, 6, 3, 6, 5, 6,
//   5, 3, 2, 5, 5, 5, 2, 2, 1, 4, 1, 4, 4, 5, 6, 2, 4, 6, 4, 1, 2, 2, 6, 6, 4, 2,
//   4, 4, 4, 4, 1, 4, 2, 4, 4, 6, 4, 1,
// ];

// await Todo.destroy({ where: { id } });

// await Result.create({
//   user,
//   userAnswers,
// });
