'use strict';
var single_element = function(collection){
  let evenNumbers = collection.filter((element, index) => index % 2 === 1)
  let uniqueNumbers = new Set(); // 所有出现过的数字
  let result = []; // 唯一的数字
  evenNumbers.forEach((element, index) =>{
    if(!uniqueNumbers.has(element)) {
      uniqueNumbers.add(element);
      result.push(element)
    }  else {
      result.splice(result.indexOf(element), 1);
    }
  });
  return result;

};
module.exports = single_element;
