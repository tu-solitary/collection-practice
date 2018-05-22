function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter(elementFromA =>
    collection_b.indexOf(elementFromA) >=0);
}

module.exports = collect_same_elements;
