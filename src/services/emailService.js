import fs from "fs";
import nodemailer from "nodemailer";
import { getEmailTranslate } from "../utils/pdf/translate.js";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export function sendResult(email, user, lang) {
  const userName = user.trim().split(" ").join("-");
  const { subject, html, text } = getEmailTranslate(lang);

  return transporter.sendMail({
    to: email,
    subject,
    text,
    html,
    attachments: [
      {
        filename: `${userName}.pdf`,
        content: fs.createReadStream(`./src/utils/pdf/result.pdf`),
      },
    ],
  });
}

export const emailService = { sendResult };
