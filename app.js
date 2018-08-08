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
function filterOddElements(arr) {
  var newArr = [];
  for(i=0; i<arr.length; i++){
    if(arr[i]%2===1) //se pregunta si el numero es impar
     newArr.push(arr[i]);// se agrega el elemento
  }
  return newArr;
}

module.exports = filterOddElements;

// ejercicio7

function findShortestWordAmongMixedElements(arr) {
  if (arr.length === 0) {
    return ""; // array esta vacio returna string vacio
  }
  let newArr = [];// se cumple la condicion de que no esta vacio y contiene algo
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {// se condiciona que el contenido del array que se guarde sea un string
      newArr.push(arr[i]);  //se guarda en newArr los array que cumplan la condicion de string
    }
  }
  if (newArr.length === 0) {
    return ""; // si el array nuevo esta vacio returna un string vacio
  }
  let shortArray = newArr[0];//guarda el index 0
  for (var x = 1; x < newArr.length; x++) {// va comparando el string del index 0 con el resto
    if (shortArray.length > newArr[x].length) { // compara si el index 0 es mas largo que el otro
      shortArray = newArr[x];
    }
  }
  return shortArray;
}


module.exports = findShortestWordAmongMixedElements;
//ejercicio 8
