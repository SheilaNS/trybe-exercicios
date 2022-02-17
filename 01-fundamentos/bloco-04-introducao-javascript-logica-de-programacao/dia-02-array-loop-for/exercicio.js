let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* 01 - percorra o array imprimindo todos os valores nele contidos com a função console.log() */

console.log(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4], numbers[5], numbers[6], numbers[7], numbers[8], numbers[9]);

for ( let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

/* 02 - some todos os valores contidos no array e imprima o resultado */

let soma = 0;
for ( let i = 0; i < numbers.length; i++) {
    soma += numbers[i];
}
console.log("A soma de todos os números da array é: " + soma);

/* 03 - calcule e imprima a média aritmética dos valores contidos no array */

let mediaAr = soma / numbers.length;
console.log("A média aritmética so array é: " + mediaAr);

/* 04 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima 
a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20" */

if (mediaAr > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

/* 05 - Utilizando for , descubra qual o maior valor contido no array e imprima-o */

let maior = 0;
for( let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maior) {
        maior = numbers[i];
    } 
}
console.log("O maior valor da array é: " + maior);

/* 06 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista 
nenhum, imprima a mensagem: "nenhum valor ímpar encontrado" */

let impares = [];
for ( let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
        impares.push(numbers[i]);
    }
}
if (impares.length !== 0) {
    console.log("Os números ímpares são: " + impares);
} else {
    console.log("Nenhum valor ímpar encontrado");
}

/* 07 - Utilizando for , descubra qual o menor valor contido no array e imprima-o */

let menor = numbers[0];
for( let i = 0; i < numbers.length; i++) {
    if (numbers[i] < menor) {
        menor = numbers[i];
    }
}
console.log("O menor valor da array é: " + menor);

/* 08 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado */

let arr = [];
for ( let i = 0 ; i < 25 ; i++ ) {
    arr.push(i + 1);
}
console.log(arr);

/* 09 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada 
um dos elementos por 2 */

for ( let divide2 of arr) {
    divide2 /= 2;
    console.log(divide2);
}