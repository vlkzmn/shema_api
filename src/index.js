import "dotenv/config"; // подключение файла .env
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";

import { authRouter } from "./routes/authRouter.js";
import { resultRouter } from "./routes/resultRouter.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CLIENT_URL, //  определяет, какие домены имеют право делать запрос на сервер
    credentials: true, // указывает, может ли браузер включать куки в запрос
  })
);

app.use(cookieParser()); // стороннее middleware которое позволяет обрабатывать cookies во всех запросах
app.use(express.json());
app.use(authRouter);
app.use("/result", resultRouter);
app.use(errorMiddleware); // кастомное middleware для обработки ошибок, должен быть в конце после всех middleware

app.listen(PORT, () => console.log("Server is running"));
