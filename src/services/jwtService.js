import jwt from 'jsonwebtoken'; // подключаем библиотеку для генерации и валидации token 

function generateAccessToken(user) {
  return jwt.sign(user, process.env.JWT_ACCESS_SECRET, { expiresIn: '10m' });
  // первым параметром принимает объект с данными который будет зашифрован
  // вторым секретный ключ для шифрования
  // третим можно передать время жизни token 
}

function validateAccessToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    // для валидации передаем сам token и ключ которым шифровали, 
    // метод варификации возвращает объект который был передан при генерации
  } catch (error) {
    return null;
  }
}

function generateRefreshToken(user) {
  return jwt.sign(user, process.env.JWT_REFRESH_SECRET, { expiresIn: '60d' });
}

function validateRefreshToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
  } catch (error) {
    return null;
  }
}

export const jwtService = { 
  generateAccessToken,
  generateRefreshToken,
  validateAccessToken,
  validateRefreshToken,
};
