function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter(elementFromA => collection_b[0].includes(elementFromA));
}

module.exports = collect_same_elements;
