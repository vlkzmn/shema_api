const schemasArray = {
  ua: [
    "Емоційна депривація",
    "Покинутість / Нестабільність",
    "Недовіра / Очікування жорстокого ставлення",
    "Соціальна відчуженість",
    "Дефективність / Сором'язливість",
    "Неуспішність",
    "Залежність / Безпорадність",
    "Вразливість",
    "Плутаність / Нерозвинена ідентичність",
    "Покірність",
    "Самопожертва",
    "Придушення емоцій",
    "Жорсткі стандарти / Прискіпливість",
    "Привілейованість / Грандіозність",
    "Недостатність самоконтролю",
    "Пошук схвалення",
    "Негативізм / Песимізм",
    "Пунітивність",
  ],
  en: [
    "Emotional Deprivation",
    "Abandonment",
    "Mistrust / Abuse",
    "Social Isolation",
    "Defectiveness / Shame",
    "Failure",
    "Dependence / Incompetence",
    "Vulnerability to Harm",
    "Enmeshment / Undeveloped Self",
    "Subjugation",
    "Self-Sacrifice",
    "Emotional Inhibition",
    "Unrelenting Standards / Hipercriticalness",
    "Entitlement / Grandiosity",
    "Insufficient Self-Control",
    "Approval Seeking",
    "Negativity / Pessimism",
    "Punitiveness",
  ],
  ru: [
    "Эмоциональная депривация",
    "Покинутость / Нестабильность",
    "Недоверие / Ожидание жестокого обращения",
    "Социальная отчужденность",
    "Дефективность / Стыдливость",
    "Неуспешность",
    "Зависимость / Беспомощность",
    "Уязвимость",
    "Спутаность / Неразвитая идентичность",
    "Покорность",
    "Самопожертвование",
    "Подавление эмоций",
    "Жесткие стандарты / Придирчивость",
    "Привелигированность / Грандиозность",
    "Недостаточность самоконтроля",
    "Поиск одобрения",
    "Негативизм / Пессимизм",
    "Пунитивность",
  ],
};

export function getShemas(lang) {
  return schemasArray[lang];
}

export function getPdfTranslate(lang) {
  const data = {};

  switch (lang) {
    case "ua":
      data.title = "Результат тестування для";
      data.shema = "Назва схеми";
      data.answers = "Відповіді";
      data.sum = "Сума";
      data.percent = "Відсоток";
      data.sum5and6 = "5 та 6";
      break;
    case "ru":
      data.title = "Результат тестирования для";
      data.shema = "Название схемы";
      data.answers = "Ответы";
      data.sum = "Cумма";
      data.percent = "Процент";
      data.sum5and6 = "5 и 6";
      break;
    default:
      data.title = "The test result for";
      data.shema = "Schema Name";
      data.answers = "Answers";
      data.sum = "Sum";
      data.percent = "Percentage";
      data.sum5and6 = "5 and 6";
  }

  return data;
}

export function getEmailTranslate(lang) {
  const data = {};

  switch (lang) {
    case "ua":
      data.subject = "Результат схемного опитувальника";
      data.html = `
       <h2>Результат тестування у прикріпленому до листа файлі.</h2>
      `;
      data.text = "Результат тестування у прикріпленому до листа файлі.";
      break;
    case "ru":
      data.subject = "Результат схемного опросника";
      data.html = `
       <h2>Результат тестирования в прикрепленном к письму файле.</h2>
      `;
      data.text = "Результат тестирования в прикрепленном к письму файле.";
      break;
    default:
      data.subject = "Schema Questionnaire Result";
      data.html = `
       <h2>The test result is in the file attached to the letter.</h2>
      `;
      data.text = "The test result is in the file attached to the letter.";
  }

  return data;
}
