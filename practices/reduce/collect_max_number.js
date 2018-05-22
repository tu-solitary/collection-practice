'use strict';

function collect_max_number(collection) {
  return collection.reduce((max, element) => Math.max(max, element), collection[0])
}

module.exports = collect_max_number;
