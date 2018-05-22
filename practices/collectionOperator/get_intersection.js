'use strict';

function get_intersection(collection_a, collection_b) {
  return collection_b.filter(elementFromB => collection_a.includes(elementFromB));
}

module.exports = get_intersection;
