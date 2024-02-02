import fs from "fs/promises";
import { emailService } from "../services/emailService.js";
import { resultService } from "../services/resultService.js";
import { pdfCreate } from "../utils/pdf/pdfCreate.js";
import {
  isAnswersValid,
  isEmailValid,
  isUserValid,
} from "../utils/validator.js";

async function recieveResult(req, res, next) {
  const { user, email, userAnswers, lang } = req.body;

  if (isUserValid(user) && isAnswersValid(userAnswers)) {
    if (isEmailValid(email)) {
      await pdfCreate(user, userAnswers, lang);

      await emailService.sendResult(email, user, lang);

      await fs.rm(`./src/utils/pdf/result.pdf`);
    }

    await resultService.saveResult(user, userAnswers);

    res.sendStatus(201);
  } else {
    res.sendStatus(400);
  }
}

async function getAllResults(req, res, next) {
  const results = await resultService.getAll();

  res.send(results);
}

export const resultController = {
  recieveResult,
  getAllResults,
};
