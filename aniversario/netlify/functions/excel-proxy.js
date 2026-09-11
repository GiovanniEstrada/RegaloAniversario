const fetch = require("node-fetch");
const XLSX = require("xlsx");

exports.handler = async () => {
  const excelUrl = "https://docs.google.com/spreadsheets/d/1F1awuTSWpF-rXco6sHPYD5JGe4Ya_UPmbVItwiQ9oNM/export?format=xlsx"; // reemplaza con el ID real

  try {
    const response = await global.fetch(excelUrl);
    if (!response.ok) {
      return {
        statusCode: response.status,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "No se pudo descargar el Excel" })
      };
    }

    const buffer = await response.arrayBuffer();
    const workbook = XLSX.read(Buffer.from(buffer), { type: "buffer" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet);

    // Siempre devolvemos un arreglo
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Array.isArray(data) ? data : [])
    };
  } catch (err) {
    console.error("Error interno:", err);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Error leyendo Excel", detalle: err.message })
    };
  }
};
