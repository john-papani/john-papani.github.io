const AverageComputation = ({ data }) => {
  const sum = data
    .filter((dataItem) => !isNaN(dataItem.Grade) && dataItem.Grade >= 5)
    .map((dataItem) => dataItem.Grade)
    .reduce((sum, newGrade) => sum + newGrade, 0);
  const count = data.filter(
    (dataItem) => !isNaN(dataItem.Grade) && dataItem.Grade >= 5
  ).length;
  
  const average = sum / count;
  return average;
};
export default AverageComputation;
