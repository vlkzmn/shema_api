import { emailService } from "../services/emailService.js";
import { resultService } from "../services/resultService.js";

async function recieveResult(req, res, next) {
  const { user, email, userAnswers, lang } = req.body;

  if (email.trim()) {
    await emailService.sendResult(email, user, userAnswers, lang);
  }

  await resultService.saveResult(user, userAnswers);

  res.sendStatus(201);
}

async function getAllResults(req, res, next) {
  const results = await resultService.getAll();

  res.send(results);
}

export const resultController = {
  recieveResult,
  getAllResults,
};
