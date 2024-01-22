import { ApiError } from '../exceptions/ApiError.js';

// кастомное middleware для обработки ошибок, должно принимать 4 аргумента, первый из которых error
export function errorMiddleware(error, req, res, next) {
  if (error instanceof ApiError) {
    const { status, message, errors } = error;

    res.status(status).send({ message, errors });
    return;
  }

  console.log(error);

  res.status(500).send({
    message: 'Unexpected error',
  });
}
// проверяем, если ошибка это экземпляр нашего класса ошибок ApiError то возвращаем response
// со статусом и сообщением которые мы прописали в нашем классе
// если другая ошибка то возвращаем 500
