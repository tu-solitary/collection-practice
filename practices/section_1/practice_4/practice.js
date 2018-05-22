function collect_same_elements(collection_a, collection_b) {
  return collection_a
    .filter(elementFromA => collection_b.value.includes(elementFromA.key))
    .map(element => element.key);
}

module.exports = collect_same_elements;
