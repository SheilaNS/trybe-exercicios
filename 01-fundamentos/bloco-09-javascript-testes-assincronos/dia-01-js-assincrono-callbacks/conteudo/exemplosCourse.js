//  OPERAÇOES ASSINCRONAS
//  Exemplo 1 - codependencia de códigos: um nãoroda enquanto o anterior não for finalizado
console.log('1 - Receber roda');
console.log('2 - Encaixar parafusos');
console.log('3 - Fixar roda no carro');
// ---------------------------
console.log('1 - Comprar parafusos');
console.log('2 - Adicionar ao estoque');
console.log('3 - Receber roda');
console.log('4 - Encaixar parafusos');
console.log('5 - Fixar roda no carro');
console.log('---------------------------');

// Exemplo 2 - assincronicidade de execução: a função setTimeout é chamada antes dos consoles e é imprimida depois
setTimeout(() => {
  console.log('Comprar parafusos') // Comprar parafusos
  console.log('Adicionar ao estoque') // Adicionar ao estoque
}, 2000);

console.log('1 - Receber roda'); // 1 - Receber roda
console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro
console.log('---------------------------');

// Exemplo 3 - 
const pushNumber = (list, number) => list.push(number);

let numbers = [];

// pushNumber(numbers, 1);
setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

// console.log(numbers);
setTimeout(() => console.log(numbers), 3000);
console.log('---------------------------');

//  CALLBACKS (funções parâmetros)

// Exemplo 1
// Declaramos nossa variável de despesas
const despesas = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];
// Declaramos nossa renda
const renda = 1000;

const despesaMensal = (renda, despesas, callback) => {
  // Definimos que a despesa total é igual ao valor retornado pela função callback (que é o parâmetro da nossa função)
  // que vai receber nosso parâmetro/variável "despesas"
  const despesaTotal = callback(despesas);
  // Definimos nosso saldo final, que é nossa renda - nossa despesa total
  const saldoFinal = renda - despesaTotal;
  
  console.log(`Balanço do mês:
  Recebido: R$${renda},00
    Gasto: R$${despesaTotal},00
    Saldo: R$${saldoFinal},00 `);
  };
  
  // Definimos nossa função que será passada como parâmetro
  // essa função recebe o parâmetro despesas a partir da função principal despesaMensal
  const somaDespesas = (despesas) => {
    // Separamos cada item do nosso array de despesas
  // e fazemos um reduce para somar os valores
  const custoItem = despesas.map((item) => Object.values(item));
  const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
  return despesaTotal;
  // acc é a sigla para accumulator (acumulador)
  // curr é a sigla para current (valor atual)
};

// Executamos a função principal com as variáveis renda, despesas
// e a nossa função somaDespesas
// callback = somaDespesas
despesaMensal(renda, despesas, somaDespesas);

// Balanço do mês:
//     Recebido: R$1000,00
//     Gasto: R$459,00
//     Saldo: R$541,00
console.log('---------------------------');

// Exemplo 2
const resultadoFinal = (resultado) => {
  console.log(resultado);
}

const funcSoma = (num1, num2, callback) => {
  let soma = num1 + num2;
  callback(soma);
}

funcSoma(10, 8, resultadoFinal);