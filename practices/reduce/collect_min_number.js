'use strict';

function collect_min_number(collection) {
  return collection.reduce((max, element) => Math.min(max, element), collection[0])
}

module.exports = collect_min_number;

