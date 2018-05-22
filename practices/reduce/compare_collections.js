'use strict';

function compare_collections(collection_a, collection_b) {
  if(collection_a.length !== collection_b.length) return false;
  for(let index in collection_a) {
    if(collection_a[index] !== collection_b[index]) {
      return false;
    }
  }
  return true;
}

module.exports = compare_collections;


