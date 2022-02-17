const { cities, states, regions } = require('./data');

// transforme o array de cidades em um objeto no seguinte formato: 
/*  
  const output = {
  N: [
    { city: 'Manaus', state: 'Amazonas', region: 'Norte' },
    { city: 'Manaus', state: 'Amazonas', region: 'Norte' },
  ],
  NE: [
    { city: 'Feira de Santana', state: 'Bahia', region: 'Nordeste' },
    { city: 'Feira de Santana', state: 'Bahia', region: 'Nordeste' },
    { city: 'Feira de Santana', state: 'Bahia', region: 'Nordeste' },
  ],
  etc...
  };
  cidade
  { state: 'AM', name: 'Manaus', region: 'N' },
  estado
  { short: 'AM', name: 'Amazonas' },
  regiao
  { short: 'N', name: 'Norte' },
*/

const funcaoReducer = (objeto, elemento) => {
  // primeiro verifica se o acumulador(objeto) tem uma chave region do elemento que vem do cities
  // essa condição tb pode ser escrita da seguinte forma (objeto[`${elemento.region}`] === undefined)
  if (!objeto[`${elemento.region}`]) {
    objeto[`${elemento.region}`] = [];
  }
  const objetoRegiao = {
    city: elemento.name,
    state: states.find((estado) => estado.short === elemento.state).name,
    region: regions.find((regiao) => regiao.short === elemento.region).name,
  }
  objeto[`${elemento.region}`].push(objetoRegiao);
  return objeto;
};

const arrayResposta = cities.reduce(funcaoReducer, {});

console.log('O objeto final é ', arrayResposta);