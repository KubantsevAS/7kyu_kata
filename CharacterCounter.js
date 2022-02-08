function validateWord(s) {

                // object with number of each letter repeat 
                
  const checkWord = s.toLowerCase().split('').reduce(function(result, item){
    result[item] = (result[item] || 0) + 1;
    return result;
  },{}); 
  
                // Array of simular items
                
  const checkArray =[];
  for (let objectKey in checkWord){
    checkArray.push(checkWord[objectKey]);
  }
  
  return checkArray.map((item, index, array) => array[index] !== array[0] ? 0 : 1).find((item) => item == 0) == 0 ? false : true;
} 
