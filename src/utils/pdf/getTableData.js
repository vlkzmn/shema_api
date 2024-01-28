import { getShemas } from "./translate.js";

export const getTableData = (userAnswers, lang) => {
  const tableData = [];
  const schemas = getShemas(lang);

  for (let i = 0; i < 18; i++) {
    const answers = [];

    for (let j = i; j < 90; j = j + 18) {
      answers.push(userAnswers[j]);
    }

    const shema = schemas[i];
    const sum = answers.reduce((sum, item) => sum + item).toString();
    const percent = Math.floor(((sum - 5) / 25) * 100).toString();
    const sumFiveSix = answers
      .filter((item) => item > 4)
      .reduce((sum, item) => sum + item, 0)
      .toString();

    tableData.push([shema, answers.join("_"), sum, percent, sumFiveSix]);
  }

  return tableData;
};
