const regions = [
  { short: 'N', name: 'Norte' },
  { short: 'NE', name: 'Nordeste' },
  { short: 'CW', name: 'Centroeste' },
  { short: 'SE', name: 'Sudeste' },
  { short: 'S', name: 'Sul' },
];

const states = [
  { short: 'AM', name: 'Amazonas' },
  { short: 'PA', name: 'Pará' },
  { short: 'TO', name: 'Tocantins' },
  { short: 'MG', name: 'Minas Gerais' },
  { short: 'BA', name: 'Bahia' },
  { short: 'PR', name: 'Paraná' },
  { short: 'SP', name: 'São Paulo' },
  { short: 'RN', name: 'Rio Grande do Norte' },
  { short: 'CE', name: 'Ceará' },
];

const cities = [
  { state: 'AM', name: 'Amazonas', region: 'N' },
  { state: 'PA', name: 'Belém', region: 'N' },
  { state: 'TO', name: 'Porto Nacional', region: 'N' },
  { state: 'MG', name: 'Lavras', region: 'SE' },
  { state: 'BA', name: 'Feira de Santana', region: 'NE' },
  { state: 'PR', name: 'Cascavel', region: 'S' },
  { state: 'SP', name: 'Presidente Prudente', region: 'SE' },
  { state: 'RN', name: 'Touros', region: 'NE' },
  { state: 'CE', name: 'Jericoacoara', region: 'NE' },
];

const pedidos = [
  { id: 345, codigoCerveja: 122, quantidade: 30},
  { id: 765, codigoCerveja: 176, quantidade: 50},
  { id: 234, codigoCerveja: 183, quantidade: 70},
  { id: 980, codigoCerveja: 451, quantidade: 20},
  { id: 211, codigoCerveja: 323, quantidade: 100},
];

const entregas = [
  { placaVeiculo: 'XPL0912', pedidoId: 345},
  { placaVeiculo: 'TRP1242', pedidoId: 765},
  { placaVeiculo: 'FOL1122', pedidoId: 234},
  { placaVeiculo: 'DQE0459', pedidoId: 980},
  { placaVeiculo: 'RTP0809', pedidoId: 211},
];

const cervejas = [
  {
    codigo: 123,
    fabricante: 'Urquell',
    descricao: 'Pilsner Urquell 500ML',
    valor: 20,
    estoque: 200,
  },
  {
    codigo: 176,
    fabricante: 'Schornstein',
    descricao: 'Schornstein Imperial 500ML',
    valor: 35.99,
    estoque: 150,
  },
  {
    codigo: 122,
    fabricante: 'Schornstein',
    descricao: 'Schornstein IPA 500ML',
    valor: 18.99,
    estoque: 300,
  },
  {
    codigo: 323,
    fabricante: 'Maniacs',
    descricao: 'Maniacs Craft Lager 355ML',
    valor: 19.99,
    estoque: 500,
  },
  {
    codigo: 183,
    fabricante: 'Leuven',
    descricao: 'Leuven Red ALE Knight 600ML',
    valor: 25.99,
    estoque: 100,
  },
  {
    codigo: 129,
    fabricante: 'Leuven',
    descricao: 'Leuven Witbier The Witch 500ML',
    valor: 19.99,
    estoque: 200,
  },
  {
    codigo: 451,
    fabricante: 'Lupulus',
    descricao: 'Lupulus Blanche 330ML',
    valor: 29.99,
    estoque: 0,
  },
];

module.exports = {
  regions,
  states, 
  cities,
  cervejas,
  pedidos,
  entregas,
};
