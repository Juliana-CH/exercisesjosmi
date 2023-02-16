// . Crea una función que se llame getUniqueId y devuelva el número de milisegundos que hay desde 1970 utilizando la función getTime de Date
// Esta función NO debe ser un Arrow function

function getUniqueId () {
  return new Date().getTime();
}
getUniqueId();

//Ou:

const getUniqueIdArrow = () => {
  return new Date().getTime();
}
getUniqueIdArrow();




// . Crea una función que se llame isString con un parámetro y devuelva si dicho parámetro es una cadena de texto
// Esta función NO debe ser un Arrow function

function isString (texto) {
  return typeof texto === 'string';
}
isString('texto')

//Ou:
const isStringAnonymous = function (texto) {
  return typeof === 'string';
}

//Ou:
const isStringArrow = (texto) => {
  return typeof text === 'string';
}




// . Crea una función que se llame isEmpty con un parámetro y devuelva true si es una cadena de texto vacía.
// Esta función NO debe ser un Arrow function

function isEmpty (texto) {
  return texto === '';
}
  isEmpty('')

//Ou:

const isEmptyArrow = (texto) => {
  return texto === '';
}
  isEmptyArrow('')




// . Crea una función que se llame isValidText con un parámetro que te devuelva true si dicho parámetro 
//es un texto Y no está vacío llamando a las dos funciones anteriores.

function isValidText(texto) {
  return !isEmpty(texto) && isString(texto);   
}
isValidText('texto')

//Ou:

const isValidTextArrow = (texto) => {
  return !isEmpty(texto) && isString(texto);   
}
isValidTextArrow('texto')




// . Crea una función que se llame isNumber con un parámetro y devuelva si dicho parámetro es un número
// Esta función NO debe ser un Arrow function

function isNumber (number) {
  return typeof number === 'number';
}
isNumber(10)

//Ou:

const isNumberArrow = (number) => {
  return typeof number === 'number';
}
isNumberArrow(10)




// . Crea una función que se llame isGreatherThan10 con un parámetro y devuelva true si es mayor que 10
// Esta función NO debe ser un Arrow function

function isGreatherThan10(numberToCompare) {
  return numberToCompare > 10;
}
isGreatherThan10(100)

//Ou:

const isGreatherThan10Arrow = (numberToCompare) => {
  return numberToCompare > 10;
}
isGreatherThan10Arrow(100)



// . Crea una función que se llame isValidId con un parámetro que te devuelva true si dicho parámetro es un Número Y es mayor de 10 llamando a las dos funciones anteriores
// Esta función NO debe ser un Arrow function

function isValidId (number) {
  return isNumber(number) && isGreatherThan10(number);
}
isValidId(20)

//Ou:

const isValidIdArrow = (number) => {
  return isNumber(number) && isGreatherThan10(number);
}
isValidIdArrow(20)




// . Crea una función createTask con dós parámetros, un texto y un id único, y te devuelva un objeto con ambos parámetros.
// Esta función NO debe ser un Arrow function

function createTask(text, id) {
  return {
    text: text,
    id: id
  }
}

//Ou:

const createTaskArrow = (text, id) => {
  return {
    text: text,
    id: id
  }
}




// . Cambia la función anterior creando una nueva llamada createTaskWithTextValidation, que devuelva un string diciendo "Argumentos incorrectos" si el parámetro que guarda el texto no es una cadena de texto o está vacío
// Esta función NO debe ser un Arrow function

function createTaskWithTextValidation(text, id) {
  if(!isValidText(text)) {
    return 'Argumentos incorrectos';
  }
  return createTask(text, id); //chamando a função do exercício acima.
}

//Ou:

const createTaskWithTextValidationArrow = (text, id) => {
  if(!isValidTextArrow(text)) {
    return 'Argumentos incorrectos';
  }
  return createTaskArrow(text, id); //chamando a função do exercício acima.
}




// . Cambia la función anterior creando una nueva llamada createTaskWithValidation, para que además devuelva el string "Argumentos incorrectos" si el parámetro que guarda el ID no es un número y es menor o igual a 11
// Esta función NO debe ser un Arrow function

function createTaskWithValidation(id, taskName) {
  if (typeof id !== "number" || id <= 11) {
    return 'Argumentos incorrectos';
  }
  return isValidText(text, id)
}
createTaskWithTextValidation(4)

//Ou:

const createTaskWithTextValidationArrow = (id, taskName) => {
  if (typeof id !== "number" || id <= 11) {
    return 'Argumentos incorrectos';
  }
}
createTaskWithTextValidation(b)




// Crea todas las funciones anteriores como ARROW functions, y llámalas exactamente igual que las originales pero con el sufijo Arrow, por ejemplo getUniqueId sería getUniqueIdArrow
// Ok




// Recorre el array que está en la variable randomArray y te escriba en consola true si es el texto es válido utilizando isValidText

  const randomArray = [1, 2, '3', '4', '', 6, 7, '8'];
    for (let i = 0; i < randomArray.length; i++) {
    if (typeof randomArray[i] === 'string') {
    console.log(isValidText(randomArray[i]));
  }
}



// Recorre el array que está en la variable randomArray y te escriba en consola true si es el texto es válido utilizando isValidTextArrow

const randomArray = [1, 2, '3', '4', '', 6, 7, '8'];


// Crea una función que se llame generateRandomTasks con un parámetro, que te cree un array con el número de tasks. 