import { User } from "../models/User.js";

function getUser() {
  return User.findOne({
    where: {
      name: "kato",
    },
  });
}

function getByToken(refreshToken) {
  return User.findOne({
    where: { refreshToken },
  });
}

function normalize({ name }) {
  return { name };
}

async function saveToken(refreshToken) {
  const user = await getUser();

  user.refreshToken = refreshToken;

  await user.save();
}

export const userService = {
  normalize,
  getUser,
  getByToken,
  saveToken,
};
