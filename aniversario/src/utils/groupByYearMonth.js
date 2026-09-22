// utils/groupByYearMonth.js
export function groupByYearMonth(data) {
  const grouped = {};

  data.forEach(item => {
    const [day, month, year] = item.Fecha.split("-");
    const date = new Date(`${year}-${month}-${day}`);
    const yearNum = date.getFullYear();
    const monthName = date.toLocaleString("es-ES", { month: "long" });

    if (!grouped[yearNum]) grouped[yearNum] = {};
    if (!grouped[yearNum][monthName]) grouped[yearNum][monthName] = [];

    grouped[yearNum][monthName].push(item);
  });

  return grouped;
}
