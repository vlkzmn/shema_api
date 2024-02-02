export function isUserValid(name) {
  const spaceTrimName = name.replace(/\s+/g, " ").trim();

  const regex = /^[a-zA-Zа-яА-Я]+(?:\s[a-zA-Zа-яА-Я]+)*$/;
  return regex.test(spaceTrimName) && spaceTrimName.length <= 40;
}

export function isEmailValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isAnswersValid(answers) {
  if (Array.isArray(answers)) {
    const isItemsNumber = answers.every((item) => typeof item === "number");
    return answers.length === 90 && isItemsNumber;
  }

  return false;
}
