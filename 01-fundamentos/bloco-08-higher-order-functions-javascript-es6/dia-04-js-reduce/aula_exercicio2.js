// encontre o maior número do array de numeros
const numeros = [2, 9, 5, 7, 4];

const funcaoReducer = (maior, elem) => {
  if (elem > maior) {
    maior = elem;
  }
  return maior;
}
// sem o valor inicial como parâmetro no reduce,
// tenho a certeza que o valor comparado no if vai ser
// um elemento de demtro do meu array, eliminando um possível 
// problema se o array tiver um número negativo
const maiorReduce = numeros.reduce(funcaoReducers);

console.log('O maior valor com reduce', maiorReduce);