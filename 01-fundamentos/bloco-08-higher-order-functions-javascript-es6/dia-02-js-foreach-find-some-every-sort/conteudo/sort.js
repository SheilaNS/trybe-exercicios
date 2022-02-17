const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui
// crescente
people.sort((a,b) => a.age - b.age);

console.log(people);

// descrescente
people.sort((a,b) => b.age - a.age);

console.log(people);