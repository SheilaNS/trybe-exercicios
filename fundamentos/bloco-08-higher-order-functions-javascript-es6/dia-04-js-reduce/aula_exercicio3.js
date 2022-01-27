const { cervejas, pedidos, entregas } = require('./data');
// crie um array de objetos com as seguintes informações
// 
// 1 - id do pedido => origem: pedidos
// 2 - descrição da cerveja => origem: cervejas
// 3 - quantidade de cervejas do pedido => origem: pedidos
// 4 - placa do veículo que vai fazer a entrega => origem: entregas

// para esse exercício, usamos como base o array de pedidos pq ele tem 2 das 4 informações que precisamos
const funcaoReducer = (objetoResposta, elemento) => {
  // o elemento do funcaoReducer é o array de pedidos
  // para acessar os valores o array pedidos, primeiro desestruturamos ele
  // const { id, codigoCerveja, quantidade } = elemento;
  // ou podemos acessar os objetos diretamente da seguinte forma
  const objeto = {
    id: elemento.id,
    // para acessar o elemento descrição do array de cervejas, podemos usar o find, pq ele vai retornar o primeiro objeto encontrado no array de cervejas contendo o códigoCerveja no pedidos
    descricao: cervejas.find((codigo) => codigo.codigo === elemento.codigoCerveja).descricao,
    quantidade: elemento.quantidade,
    // usamos o mesmo procedimento para encontrar a placa do veículo usando o find no array de entregas
    placa: entregas.find((id) => id.pedidoId === elemento.id).placaVeiculo,
  }
  objetoResposta.push(objeto);
  return objetoResposta;
};

const arrayResposta = pedidos.reduce(funcaoReducer, []);

console.log('O array resposta é: ', arrayResposta);