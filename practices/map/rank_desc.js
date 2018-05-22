'use strict';
var rank_desc = function(collection){
  function descSortRule(a, b) {
    return a === b ? 0
      : a < b ? -1
        : 1;
  }
  return collection.sort(descSortRule);
};

module.exports = rank_desc;
