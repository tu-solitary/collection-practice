'use strict';
const average = require("../../../utils/numbers").average;

var even_group_calculate_average = function (collection) {
  let groupedNumbers = []

  collection
    .filter((e, index) => e % 2 === 0 && index % 2 === 1)
    .forEach(element => {
      let digits = element.toString().length;
      if (!groupedNumbers[digits]) groupedNumbers[digits] = [];
      groupedNumbers[digits].push(element);
    });
  if(groupedNumbers.length === 0) return [0];
  return groupedNumbers.reduce((result, element) => {
    if (element) {
      result.push(average(element));
    }
    return result;
  }, [])
};
module.exports = even_group_calculate_average;
