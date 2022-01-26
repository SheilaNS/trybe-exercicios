// FOREACH
const arrayNumeros = [1, 25, 30, 10, 5];

const loopComFor = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    console.log(`Elemento com for ${arr[i]}`);
    console.log(`Index com for ${i}`);
    console.log(`Array com for [${arr}]`);
  }
}

// loopComFor(arrayNumeros);

const loopComForEach = (arr) => {
  arr.forEach((elem, index, array) => {
    console.log(`Elemento com forEach ${elem}`);
    console.log(`Index com forEach ${index}`);
    console.log(`Array com forEach [${array}]`);
  });
}

loopComForEach(arrayNumeros);

// EVERY
const verificaTodos = arrayNumeros.every((elem) => elem % 2 === 0);
console.log(`Retorno do every() ${verificaTodos}`);

// SOME
const verificaAlgum = arrayNumeros.some((elem) => elem % 2 === 0);
console.log(`Retorno do some() ${verificaAlgum}`);

// FIND
const encontraUm = arrayNumeros.find((elem) => elem % 2 === 0);
console.log(`Retorno do find() ${encontraUm}`);

// SORT
const letras = ['a', 'k', 'o', 'd', 'q'];
console.log(`Array letras antes do sort [${letras}]`);
const emOrdem = letras.sort();
console.log(`Array letras depois do sort [${letras}]`);
console.log(`Array emOrdem [${emOrdem}]`);

console.log(`Array arrayNumeros antes do sort sem parâmetros [${arrayNumeros}]`);
const numerosEmOrdemSemParam = arrayNumeros.sort();
console.log(`Array arrayNumeros depois do sort sem parâmetros [${arrayNumeros}]`);
console.log(`Array numerosEmOrdem [${numerosEmOrdemSemParam}]`);

console.log(`Array arrayNumeros antes do sort com parâmetros [${arrayNumeros}]`);
const numerosEmOrdemComParam = arrayNumeros.sort((primeiro, segundo) => primeiro - segundo);
console.log(`Array arrayNumeros depois do sort com parâmetros [${arrayNumeros}]`);
console.log(`Array numerosEmOrdem [${numerosEmOrdemComParam}]`);

// FILTER
const arrayNumeros2 = [2, 3, 4, 5, 6, 7, 8];

const arrayFiltrado = arrayNumeros2.filter((elem) => elem % 2 === 0);
console.log(`Retorno do filter() [${arrayFiltrado}]`);

const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
];

const podeDirigir = users.filter((user) => user.isDriver);
console.log('Pode dirigir ', podeDirigir); // retorna a vaiável
console.log(`Pode dirigir ${podeDirigir}`); // retorna os elementos de dentro do array

const primeiraLetra = users.filter((user) => user.firstName[0] === 'M'); // esse método é case sensitive
console.log('Primeira letra M ', primeiraLetra);

const terceiraLetra = users.filter((user) => user.firstName[2] === 'r'); // esse método é case sensitive
console.log('Primeira letra r ', terceiraLetra);

const tiraUser = users.filter((user) => user.firstName !== 'Bart');
console.log('Tirei o Bart ', tiraUser);

// MAP
const primeiroNome = users.map((user) => user.firstName);
console.log('Lista só com o primeiro nome ', primeiroNome);

const podeDirigirNome = users.map((user) => {
  if (user.isDriver) {
    return user.firstName;
  }
});
console.log('Pode dirigir ', podeDirigirNome); // para arrumar essa array, é possível usar o filter antes do map

const podeDirigirNomeCorreto = users.filter((user) => user.isDriver).map((user) => ({ nome: user.firstName }));
console.log('Pode dirigir correto ', podeDirigirNomeCorreto);
