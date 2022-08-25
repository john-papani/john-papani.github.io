const AverageComputation = ({ data }) => {
  const sum = data
    .filter((dataItem) => !isNaN(dataItem.Grade) && dataItem.Grade >= 5)
    .map((dataItem) => dataItem.Grade)
    .reduce((sum, newGrade) => sum + newGrade, 0);
  const count = data.filter(
    (dataItem) => !isNaN(dataItem.Grade) && dataItem.Grade >= 5
  ).length;
  
  const average = sum / count;
  return Math.round(average * 100) / 100;
};
export default AverageComputation;
