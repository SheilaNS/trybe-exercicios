// 2 - Crie uma função sum que dado um número variável de elementos 
// retorna a soma desses elementos.

const sum = (...args) => args.reduce((acumulador, current) => acumulador + current, 0);
console.log(sum(2, 5, 9, 7));