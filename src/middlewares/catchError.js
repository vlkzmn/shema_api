// благодаря этому middleware нам не надо писать try / catch в каждом контроллере.
// в этот middleware мы передаем контроллер и если будет ошибка оно предаст ее в next()
// после чего express обработает ее с помощью кастомного errorMiddleware
export function catchError(action) {
  return async (req, res, next) => {
    try {
      await action(req, res, next)
    } catch (error) {
      next(error); // отловленную ошибку для асинхронных функций надо передавать в next()
    }
  };
}