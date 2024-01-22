import express from "express";

import { authController } from "../controllers/authController.js";
import { catchError } from "../middlewares/catchError.js";

export const authRouter = new express.Router();

authRouter.post("/login", catchError(authController.login));
authRouter.get("/refresh", catchError(authController.refresh));
