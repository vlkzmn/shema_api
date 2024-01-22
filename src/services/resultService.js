import { Result } from "../models/Result.js";

async function saveResult(user, userAnswers) {
  await Result.create({
    user,
    userAnswers,
  });
}

async function getAll() {
  return await Result.findAll({
    order: ["createdAt"],
  });
}

export const resultService = {
  saveResult,
  getAll,
};
