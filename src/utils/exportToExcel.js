import * as XLSX from "xlsx";

const exportToExcel = async (title, worksheetname, data) => {
  if (!Array.isArray(data) || data.length === 0) {
    console.error("Invalid data provided for export.");
    return;
  }

  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(workbook, worksheet, worksheetname);

  XLSX.writeFile(workbook, `${title}.xlsx`);
};

export default exportToExcel;
