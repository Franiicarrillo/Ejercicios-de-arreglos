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
function findSmallestNumberAmongMixedElements(arr) {
  if (arr.length === 0) {
    return "";
  }
  let newArr = [];// se cumple la condicion de que no esta vacio y contiene algo
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {// se condiciona que el contenido del array que se guarde sea un number
      newArr.push(arr[i]);  //se guarda en newArr los array que cumplan la condicion de number
    }
  }
  if (newArr.length === 0) {
    return "";
}
  let shortArray = newArr[0];//guarda el index 0
  for (var x = 1; x < newArr.length; x++) {// va comparando el number del index 0 con el resto
    if (shortArray > newArr[x]) { // compara si el index 0 es mas largo que el otro
      shortArray = newArr[x];
    }
  }
  return shortArray;
}
module.exports = findSmallestNumberAmongMixedElements;

//ejercicio 9

function getLongestWordOfMixedElements(arr) {
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
  let longArray = newArr[0];//guarda el index 0
  for (var x = 1; x > newArr.length; x++) {// va comparando el string del index 0 con el resto
    if (longArray.length > newArr[x].length) { // compara si el index 0 es mas largo que el otro
      shortArray = newArr[x];
    }
  }
  return longArray;

}
module.exports = getLongestWordOfMixedElements;



// ejercicio 10

function getLargestNumberAmongMixedElements(arr)  {
  let newArr = [];
  for (var a = 0; a < arr.length; a++) {
  if (typeof arr[a] === 'number') {
  newArr.push(arr[a]);// si es numero se sube
    }
  }
  if (newArr.length === 0) {
  return 0;
  }
  var largestNum = newArr[0];
  for (var b = 1; b < newArr.length; b++) {
  if (newArr[b] > largestNum) {
  largestNum = newArr[b];
    }
  } return largestNum

}
module.exports = getLargestNumberAmongMixedElements;

// ----------------------- objetos -----------------------
// ejercicio 1

function addArrayProperty(obj, key, arr) {
    obj.key = arr; // se establece una nueva propiedad
    return obj;
}
module.exports = addArrayProperty;

// ejercicio2
function removeStringValuesLongerThan(num, obj) {

var propiedades = Object.keys(obj);//devuelve un array de las propiedades names de un objeto

for (i=0; i<propiedades.length;i++ ) {
  if( obj[propiedades[i]].length>num){ // si es mas grande que el "num"
     delete obj[propiedades[i]]; // se elimina
  }
}

return obj;

}
module.exports = removeStringValuesLongerThan;


// ejercicio 3
function getElementOfArrayProperty(obj, key, index) {
 if (Array.isArray(obj.key)) //Si el objeto es un Array, devuelve true; false, en cualquier otro caso.
return obj.key[index];


}
module.exports = getElementOfArrayProperty;

// ejercicio 4
const customerData = {
  Joe: {
    visits: 1,
  },
  Carol: {
    visits: 2,
  },
  Howard: {
    visits: 3,
  },
  Carrie: {
    visits: 4,
  },
};

function greetCustomer(firstName) {
  let greeting = '';

	let names = Object.keys(customerData);
	if(names.includes(firstName)===false){greeting+="Welcome! Is this your first time?";} // no se tiene datos ,  determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda
	else if(customerData[firstName].visits==1){greeting+="Welcome back, " +firstName+"! We're glad you liked us the first time!"}// si ha venido una vez
  else if(customerData[firstName].visits>1){greeting+="Welcome back, "+firstName+"! So glad to see you again!"}// si ha venido mas de una vez

  return greeting;
}


module.exports = greetCustomer;

// ejercicio 5
function transformFirstAndLast(array) {
let result = {};
result[array[0]] = array[array.length-1];
return result;

}

module.exports = transformFirstAndLast;

// ejercicio 6
function fromListToObject(array) {
let obj = {};

  for (var i = 0; i < array.length; i++){
      obj[array[i][0]] = array[i][1];
  }
  return obj;
}




module.exports = fromListToObject;

// ejercicio 7
function listAllValues(obj) {
let  newArr = Object.values(obj);//devuelve un array que contiene los valores de las propiedades enumerables de un objeto dad
return newArr;

}

module.exports = listAllValues;

// ejercicio 8

function transformEmployeeData(array) {
   let newArray = [];

  for (var a = 0; a < array.length; a++){
  let obj = {};
  for (var b = 0; b < array[a].length;b++){
  obj[array[a][b][0]] = array[a][b][1];
      }
      newArray.push(obj); // se agrega el nuevo elemento
  }
  return newArray;
}

module.exports = transformEmployeeData

// ejercicio 9
function convertObjectToList(obj) {
let Arr = [];

for(var prop in obj){ //itera sobre todas las propiedades de un objeto, en un orden arbitrario. Para cada una de las propiedades, se ejecuta la sentencia especificada
let newArr = [];
newArr.push(prop);
newArr.push(obj[prop]);

Arr.push(newArr);
  }
  return Arr;
}


module.exports = convertObjectToList;

// ejercicio 10
function getSumOfAllElementsAtProperty(obj, key) {

  let suma = 0;
  if ( Array.isArray(obj[key]) === false || obj[key].length < 1 ) { // si no es array devuelve 0 , si esta vacio devuelve 0
    return 0;
  }

  for ( var element in obj[key] ) { // itera en orden arbitrario
    suma += obj[key][element]; // suma todos los elementos del array
  }
  return suma;


}

module.exports = getSumOfAllElementsAtProperty;
