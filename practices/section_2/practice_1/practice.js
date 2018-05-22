function count_same_elements(collection) {
  return collection
    .reduce((result, element) => {
      let matchedMap = result.find(j => j.key === element);
      if (matchedMap) {
        matchedMap.count++;
      } else {
        result.push({key: element, count: 1});
      }
      return result;
    }, []);
}

module.exports = count_same_elements;
