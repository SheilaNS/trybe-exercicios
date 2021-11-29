let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3

tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

// para adicionar um item no início da array usamos .unshift()
tasksList.unshift('Tomar banho');
console.log(tasksList);

tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.pop();  // remove a última tarefa
console.log(tasksList);

// [ 'Tomar café', 'Reunião' ]

// para remover o primiero item da array usamos .shift()
tasksList.shift();
console.log(tasksList);

tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);
// 1

/* EXERCÍCIO 01 - Obtenha o valor "Serviços" do array menu: */
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

/* EXERCÍCIO 02 - Procure o índice do valor "Portfólio" do array menu: */
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

/* EXERCÍCIO 03 - Adicione o valor "Contato" no final do array menu: */
menu.push('Contato');

console.log(menu);