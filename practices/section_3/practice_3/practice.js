function create_updated_collection(collection_a, object_b) {
  return collection_a.reduce((result, element) => {
    let storedMap = result.find(i => i.key === element);
    if (storedMap) {
      storedMap.count++;
    } else {
      result.push({key: element, count: 1});
    }
    return result;
  }, [])
    .map(a => {
      if (object_b.value.includes(a.key)) {
        return {key: a.key, count: a.count - Math.floor(a.count / 3)};
      } else {
        return a;
      }
    });
}

module.exports = create_updated_collection;
