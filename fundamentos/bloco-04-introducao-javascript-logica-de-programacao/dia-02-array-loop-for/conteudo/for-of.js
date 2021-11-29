
let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

// resultado: 
//1
//2
//3
//4
//5


let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"


let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31


console.log(arrOfNumbers);
// Resultado: [10, 20, 30]

/* EXERCÍCIO 01 - Utilize o for/of para imprimir os elementos da lista names com o console.log(): */
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for( let name of names) {
    console.log(name);
}