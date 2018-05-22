'use strict';
var rank_asc = function (collection) {
  function ascSortRule(a, b) {
    return a === b ? 0
      : a < b ? 1
        : -1;
  }
  return collection.sort(ascSortRule);
};

module.exports = rank_asc;
