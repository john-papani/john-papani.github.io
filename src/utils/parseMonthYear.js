export const parseMonthYear = (str) => {
  if (!str || str.includes("Present")) return new Date();
  const [monthStr, yearStr] = str.split(" ");
  const monthIndex = new Date(Date.parse(`${monthStr} 1`)).getMonth();
  const year = parseInt(yearStr, 10);
  return Number.isNaN(monthIndex) || Number.isNaN(year)
    ? new Date()
    : new Date(year, monthIndex);
};
