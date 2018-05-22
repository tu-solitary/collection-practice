function count_same_elements(collection) {
  const elementCountFromats = [/(\S)\-(\d+)/, /(\S)\[(\d+)\]/, /(\S):(\d+)/];

  return collection.map(element => {
    let matchedFormat = elementCountFromats.find(regExp => regExp.test(element));

    if(matchedFormat) {
      let execResult = matchedFormat.exec(element);
      return {
        name: execResult[1],
        summary: parseInt(execResult[2], 10),
      };
    } else {
      return {
        name: element,
        summary: 1,
      }
    }
  })
    .reduce((result, map) =>{
      let storedMap = result.find(j => j.name === map.name);
      if(storedMap) {
        storedMap.summary += map.summary;
      } else {
        result.push(map);
      }
      return result;
    }, []);
}

module.exports = count_same_elements;
