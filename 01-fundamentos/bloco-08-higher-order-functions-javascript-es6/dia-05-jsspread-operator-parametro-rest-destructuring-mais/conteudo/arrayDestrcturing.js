// 1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

[oi, funcao] = saudacoes;
funcao(oi);

// 2 - A seguir, temos alguns valores que estão descritos em variáveis
// incoerentes. Através da desestruturação de arrays, corrija os valores
// das variáveis.
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

/* 
  [comida, animal, bebida] = ['arroz', 'gato', 'água];
*/ 
console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas
// variáveis correspondentes ao seu verdadeiro tipo

const array = (...args) => args;
console.log(array(comida, animal, bebida));
const [animalCerto, bebidaCerto, comidaCerto] = array(comida, animal, bebida);
console.log(comidaCerto, animalCerto, bebidaCerto);

// 3 - array abaixo possui alguns números que não condizem com o conteúdo que ele
// deveria possuir. Através de array destructuring, faça com que existam apenas
// números pares na variável numerosPares.
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

const array1 = [...numerosPares] = numerosPares;

console.log(array1); // [6, 8, 10, 12];

// [arrayNum, (...arrayNum) => arrayNum % 2 === 0 ? arrayNum] = 

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
