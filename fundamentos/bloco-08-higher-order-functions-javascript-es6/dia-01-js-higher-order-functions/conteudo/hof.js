/* 
  Vamos praticar com os seguintes exercícios:
  1 - Crie uma função que retorne a string 'Acordando!!' ;
  2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
  3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
  4 - Agora desenvolva uma HOF chamada doingThings e configure esta 
  função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores.
  Exemplo:

  Ao chamar a função doingThings:
  doingThings(wakeUp);
  Ela deve retornar o valor do respectivo parâmeto, neste caso:
  Acordando!!
*/

const waking = () => 'Acordando!!';
const coffee = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (func) => console.log(func());

doingThings(waking);
doingThings(coffee);
doingThings(sleep);