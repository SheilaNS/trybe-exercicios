const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

/* 
┌─────────┬────┬──────────────────────────────┬─────────────────────┬──────────────────────────────────────────────────┬─────────────┐
│ (index) │ id │             name             │        genre        │                      author                      │ releaseYear │
├─────────┼────┼──────────────────────────────┼─────────────────────┼──────────────────────────────────────────────────┼─────────────┤
│    0    │ 1  │ 'As Crônicas de Gelo e Fogo' │     'Fantasia'      │ { name: 'George R. R. Martin', birthYear: 1948 } │    1991     │
│    1    │ 2  │     'O Senhor dos Anéis'     │     'Fantasia'      │  { name: 'J. R. R. Tolkien', birthYear: 1892 }   │    1954     │
│    2    │ 3  │          'Fundação'          │ 'Ficção Científica' │    { name: 'Isaac Asimov', birthYear: 1920 }     │    1951     │
│    3    │ 4  │            'Duna'            │ 'Ficção Científica' │    { name: 'Frank Herbert', birthYear: 1920 }    │    1965     │
│    4    │ 5  │          'A Coisa'           │      'Terror'       │    { name: 'Stephen King', birthYear: 1947 }     │    1986     │
│    5    │ 6  │    'O Chamado de Cthulhu'    │      'Terror'       │   { name: 'H. P. Lovecraft', birthYear: 1890 }   │    1928     │
└─────────┴────┴──────────────────────────────┴─────────────────────┴──────────────────────────────────────────────────┴─────────────┘
*/

// Adicione o código do exercício aqui:
// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.
// O século XX, ele começou no dia 1° de 1901 e vai acabar em 31 de dezembro de 2000. 

const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((writer) => (writer.author.birthYear >= 1901 && writer.author.birthYear <= 2000));
}

console.log(everyoneWasBornOnSecXX());