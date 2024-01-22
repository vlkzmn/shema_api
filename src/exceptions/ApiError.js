// наш кастомный класс ошибок который наследуется от класса Error.
// в зависимости от ситуации мы будем создавать экземляры этого класса тем самым генерировать ошибки
// которые будет отлавливать catchError и передавать в errorMiddleware.
// ошибки будут генерироваться вызовом статических методов
export class ApiError extends Error {
  constructor(status, message, errors = {}) {
    super(message);

    this.status = status;
    this.errors = errors;
  }

  static BadRequest(message, errors) {
    return new ApiError(400, message, errors);
  }

  static Unauthorized() {
    return new ApiError(401, 'User is not authorized');
  }

  static NotFound() {
    return new ApiError(404, 'Not found');
  }
}