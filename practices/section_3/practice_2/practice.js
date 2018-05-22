function create_updated_collection(collection_a, object_b) {
  return collection_a.map(a => {
    if(object_b.value.includes(a.key)) {
      return {key: a.key, count: a.count - Math.floor(a.count / 3)};
    } else {
      return a;
    }
  });
}

module.exports = create_updated_collection;
