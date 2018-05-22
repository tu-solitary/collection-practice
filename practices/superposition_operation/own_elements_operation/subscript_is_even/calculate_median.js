'use strict';
const median = require("../../../utils/numbers").median;

var calculate_median = function(collection){
  return median(collection.filter((element, index) => index % 2 === 1))
};

module.exports = calculate_median;
