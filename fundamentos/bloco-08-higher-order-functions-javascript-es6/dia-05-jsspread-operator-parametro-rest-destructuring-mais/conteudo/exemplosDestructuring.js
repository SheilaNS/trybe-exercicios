// DESTRUCTURING

// Exemplo 1 e 2
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas

// Exemplo 3
// definindo o objeto
const character = {
  nameC: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

// desestruturando o objeto:
const { nameC, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// imprimindo os valores:
console.log(`Esse é o ${nameC}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

// Exemplo 4
const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekend); // ['Saturday', 'Sunday']

const weekdays = [...workDays, ...weekend];
console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

//Exemplo 5
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: nameS, b: classAssigned, c: subject } = student;

console.log(nameS); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática

// Outra forma de reatribuir o nome de uma propriedade
const nameStu = student.a;
console.log(nameStu); // Maria

// Exemplo 6
const productB = {
  nameP: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ nameP, price, seller }) => {
  console.log(`Promoção! ${nameP} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(productB); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas
