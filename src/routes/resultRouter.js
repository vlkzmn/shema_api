import express from "express";
import { resultController } from "../controllers/resultController.js";
import { catchError } from "../middlewares/catchError.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const resultRouter = new express.Router();

resultRouter.post("/", catchError(resultController.recieveResult));
resultRouter.get(
  "/",
  catchError(authMiddleware),
  catchError(resultController.getAllResults)
);
