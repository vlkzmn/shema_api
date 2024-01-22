import bcrypt from "bcrypt";

import { ApiError } from "../exceptions/ApiError.js";
import { jwtService } from "../services/jwtService.js";
import { userService } from "../services/userService.js";

async function login(req, res, next) {
  const { password } = req.body;
  const user = await userService.getUser();

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw ApiError.BadRequest("Password is wrong");
  }

  await sendAuthentication(res, user);
}

async function refresh(req, res, next) {
  const { refreshToken } = req.cookies;

  const userData = jwtService.validateRefreshToken(refreshToken);

  if (!userData) {
    throw ApiError.Unauthorized();
  }

  const user = await userService.getByToken(refreshToken);

  if (!user) {
    throw ApiError.Unauthorized();
  }

  await sendAuthentication(res, user);
}

async function sendAuthentication(res, user) {
  const userData = userService.normalize(user);

  const accessToken = jwtService.generateAccessToken(userData);
  const refreshToken = jwtService.generateRefreshToken(userData);

  await userService.saveToken(refreshToken);

  res.cookie("refreshToken", refreshToken, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });

  res.send(accessToken);
}

export const authController = {
  login,
  refresh,
};
