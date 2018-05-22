function create_updated_collection(collection_a, object_b) {
  const elementCountFromat = /(\S)\-(\d+)/;
  return collection_a.map(element => {
    if (elementCountFromat.test(element)) {
      let execResult = elementCountFromat.exec(element);
      return {
        key: execResult[1],
        count: parseInt(execResult[2], 10),
      };
    } else {
      return {
        key: element,
        count: 1,
      }

    }
  })
    .reduce((result, map) => {
      let storedMap = result.find(j => j.key === map.key)
      if (storedMap) {
        storedMap.count += map.count;
      } else {
        result.push(map);
      }
      return result;
    }, [])
    .map(j => {
      if (object_b.value.includes(j.key)) {
        j.count -= Math.floor(j.count / 3)
      }
      return j;
    })
}

module.exports = create_updated_collection;
