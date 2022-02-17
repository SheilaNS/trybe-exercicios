const resultadoFinal = (resultado) => {
  console.log(resultado);
}

const funcSoma = (num1, num2, callback) => {
  let soma = num1 + num2
  callback(soma);
};

funcSoma(10, 8, resultadoFinal);

// Para fixar
// Definição da função userFullName
const userFullName = ({ firstName, lastName }) => console.log(`Hello! My name is ${firstName} ${lastName}`);

// Definição da função getUser
const getUser = (param) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  // Retornamos nosso parâmetro, que será uma função (callback)
  return param(userToReturn);
};

// Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
getUser(userFullName);
