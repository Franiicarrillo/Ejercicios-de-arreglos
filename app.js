// ejercicio1

function computeAverageLengthOfWords(word1, word2) {

   let total = (word1.length + word2.length)/2;

   return total;
}

module.exports = computeAverageLengthOfWords;


// ejercicio 2
function getNthElement(array, n) {

  if ( array.length < 0 ){
    return  undefined
  }
  return array [n]
}

module.exports = getNthElement;

// ejercicio 3
function convertDoubleSpaceToSingle(str) {
  let array = str.split ('  ');
  return array.join(' ')
}

module.exports = convertDoubleSpaceToSingle;


//ejercicio 4
function areValidCredentials(name, password) {
  let nameSize = name.length;
  let passwordSize = password.length;

  if(nameSize > 3 && passwordSize >= 8 ){
  return true }
  else {
    return false
  }
}

module.exports = areValidCredentials;

// ejercicio5

function findPairForSum(array, number) {
  for (var i =0 ; i<array.length ; i++) {
  for (var j=i ; j<array.length ; j++)
  if (array[i] + array[j] == number) {
       totalArray = [array[i], array[j]];
     }

    }

return totalArray
}
module.exports = findPairForSum;

// ejercicio6
