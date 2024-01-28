import fs from "fs";
import PDFDocument from "pdfkit-table";
import { getTableData } from "./getTableData.js";
import { getPdfTranslate } from "./translate.js";

export const pdfCreate = async (user, userAnswers, lang) => {
  const tableData = getTableData(userAnswers, lang);
  const { title, shema, answers, sum, percent, sum5and6 } =
    getPdfTranslate(lang);

  const doc = new PDFDocument({ margin: 30, size: "A4" });

  doc.pipe(fs.createWriteStream(`./src/utils/pdf/result.pdf`));

  doc.font("./src/utils/pdf/Roboto-Regular.ttf").fontSize(20).text(
    `${title} ${user}`,
    {
      align: "center",
    },
    80
  );

  doc.text("", 0, 140);

  const table = {
    headers: [
      {
        label: shema,
        align: "left",
        headerColor: "#ff0000",
      },
      { label: answers, align: "center", headerColor: "#ff0000" },
      { label: sum, align: "center", headerColor: "#ff0000" },
      { label: percent, align: "center", headerColor: "#ff0000" },
      { label: sum5and6, align: "center", headerColor: "#ff0000" },
    ],

    rows: tableData,
  };

  doc.table(table, {
    columnsSize: [270, 80, 60, 70, 50],
    prepareHeader: () =>
      doc.font("./src/utils/pdf/Roboto-Bold.ttf").fontSize(12),
    prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
      doc.font("./src/utils/pdf/Roboto-Regular.ttf").fontSize(12);
      indexRow % 2 !== 0 && doc.addBackground(rectRow, "gray", 0.03);
    },
  });

  doc.end();
};
