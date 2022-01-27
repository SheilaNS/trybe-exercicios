// some todos os elementos do array numeros
const numeros = [2, 9, 5, 7, 4];

// a soma é o acumulador. O index e o arr são opcionais
const funcaoReducer = (soma, elemento, index, arr) => {
  return soma + elemento;
}

const somaReduce = numeros.reduce(funcaoReducer, 0);

console.log('A soma com reduce é', somaReduce);