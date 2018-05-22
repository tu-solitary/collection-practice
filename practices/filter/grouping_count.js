'use strict';

function grouping_count(collection) {
  return collection.reduce(function (result, element) {
    if (result[element]) {
      result[element]++;
    } else {
      result[element] = 1;
    }
    return result;
  }, {});
}

module.exports = grouping_count;
