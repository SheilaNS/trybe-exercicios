const fetch = require('./conteudo/node_modules/node-fetch');

// o fetchJoke chama o .fetch na url. Caso essa requisição seja bem sucedida, o fetch chama o primeiro .then()
const fetchJoke = () => {
  const url = 'api.chucknorris.io/jokes/random?category=dev'; // para forçar o erro, basta apagar o https://

  // console.log(fetch(url)); retorna o estado da promise => Promise { <pending> }
  fetch(url) // pega o retorno da url e envia para o primeiro .then()
    .then((response) => response.json()) // transforma o retorno da URL do fetch em um JSON e manda para o segundo .then()
    .then((data) => console.log(data.value)) // imprime o conteúdo do campo .value do JSON recebido do primeiro .then()
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
    // caso algo dê errado na função e no prosesso do promise, o .catch( ) captura esse erro e imprime no console a mensagem desejada.
}

fetchJoke();