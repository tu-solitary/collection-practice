function count_same_elements(collection) {
  const elementCountFromat = /(\S)\-(\d+)/;
  return collection.map(element => {
    if(elementCountFromat.test(element)) {
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
    .reduce((result, map) =>{
      let storedMap = result.find(j => j.key === map.key)
      if(storedMap) {
        storedMap.count += map.count;
      } else {
        result.push(map);
      }
      return result;
    }, [])
}

module.exports = count_same_elements;
