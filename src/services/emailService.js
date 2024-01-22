import nodemailer from "nodemailer";

//создаем объект-транспортер для отправки почты
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true если порт 465 для SSL, false для других не SSL
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false, // Разрешить самоподписанные сертификаты, эта конфигурация будет открывать соединение с TLS-сервером с самоподписанным или недействительным TLS-сертификатом
  },
});

// функция для отправки почты
export function send({ email, subject, html }) {
  return transporter.sendMail({
    // метод библиотеки nodemailer для отправки почты
    from: "Schema Questionnaire", // sender address
    to: email,
    subject,
    text: "",
    html,
  });
}

// функция для создания письма об авторизации, в ссылку добавляем authToken который при активации прочитаем из параметров
// адресной строки
// export function sendActivationLink(email, token) {
//   const link = `${process.env.CLIENT_URL}/activate/${token}`;

//   return send({
//     email, // сюда email пользователя который указан при ркгистрации
//     subject: "Account activation",
//     html: `
//       <h1>Account activation</h1>
//       <a href="${link}">${link}</a>
//     `,
//   });
// }

export function sendResult(email, user, userAnswers, lang) {
  return send({
    email, // сюда email пользователя который указан при ркгистрации
    subject: "Result Schema Questionnaire",
    html: `
      <h1>Result</h1>
    `,
  });
}

export const emailService = { send, sendResult };
