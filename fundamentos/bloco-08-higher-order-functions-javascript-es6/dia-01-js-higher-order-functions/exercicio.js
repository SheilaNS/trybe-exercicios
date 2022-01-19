/* 
  1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } 
  representando uma nova pessoa contratada. Passe sua função como parâmetro da 
  HOF newEmployees para criar cada pessoa contratada em seu respectivo id.
  A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a 
  partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.
*/

const newStaff = (nome) => {
  const dados = {nomeCompleto: `${nome}`, email: `${nome.replace(' ', '_').toLowerCase()}@trybe.com`};
  return dados;
};

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(newStaff));

/* 
  2 - Desenvolva uma HOF que retorna o resultado de um sorteio.
  Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como 
  parâmetros o número apostado e uma função que checa se o número apostado 
  é igual ao número sorteado. O retorno da sua HOF deve ser uma string
  (Ex: "Tente novamente" ou "Parabéns você ganhou").
*/

const randomNumber = () => Math.ceil(Math.random() * 5);

const checkNumber = (func) => {
  const draw = func();
  if (draw === func()) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
}

console.log(checkNumber(randomNumber));

/* 
  3 - Crie uma HOF que receberá três parâmetros.
  O primeiro será um array de respostas corretas (Gabarito),
  o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante)
  e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da 
  pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total 
  da contagem de respostas certas.
  Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos,
  e quando não houver resposta ("N.A") não altera-se a contagem.
*/

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correct = (array1, array2) => {
  let nota = 0;
  for (let i = 0; i < 10; i +=1) {
    if (array1[i] === array2[i]) {
      nota += 1;
    }
    if (array1[i] !== array2[i] && array2 !== 'N.A') {
      nota -= 0.5;
    }
  }
  return nota;
}

const correction = (gabarito, resposta, funcao) => funcao(gabarito, resposta);

console.log(correction(RIGHT_ANSWERS, STUDENT_ANSWERS, correct));
