import { ApiError } from '../exceptions/ApiError.js';
import { jwtService } from '../services/jwtService.js';

export function authMiddleware(req, res, next) {
  const authHeader = req.headers['authorization']; // в request в headears в приложении добавлется поле
  // authorization: 'Bearer accessToken', токен который хранится в local storage, его отправляет браузер каждый раз
  // когда хочет получить доступ к данным только для активированых пользователей.
  // получаем поле authorization в переменную authHeader

  if (!authHeader) {
    throw ApiError.Unauthorized();
  }

  const [, accessToken] = authHeader.split(' '); // из строки 'Bearer accessToken' получаем значение accessToken

  if (!accessToken) {
    throw ApiError.Unauthorized();
  }

  const userData = jwtService.validateAccessToken(accessToken); // валедируем accessToken

  if (!userData) {
    throw ApiError.Unauthorized();
  } // на каждом этапе получения accessToken если не получили данные генерируем ошибку что пользователь не авторизован

  next(); // если все проверки и валидация успешны, передаем выполнение дальше
}