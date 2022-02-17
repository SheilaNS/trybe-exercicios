/* 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24 
Com base nessas informações, crie um algoritmo que retorne o fatorial de 10. 

RESPOSTA: 
1. Crie uma variável n com o valor de 10;
2. Crie uma variável fat com o valor 1;
3. Crie um loop for que percorra a variável n começanco do 1;
4. Para cada loop, faça com que a variável fat receba o valor dela mesma multiplicado por i;
5. Imprimir a variável fat;
*/

let n = 10;
let fat = 1;
for (let i = 1; i <= n; i++) {
    fat = fat * i;
}
console.log( n + "! = " + fat);

/* 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. 
Por exemplo, a palavra "banana" seria invertida para "ananab". 
Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo 
está funcionando corretamente. 

RESPOSTA:
1. Criar um array letras vazio;
2. Criar uma string inversa vazia;
3. 

 */

let word = 'tryber';
let inverso = "";

for (let i = 0; i < word.length; i++) {
    inverso += word[word.length - 1 - i];
}
console.log(inverso);

let letras = [];
let inversa = "";

for (let palavra of word){
    letras.push(palavra);
}
for (let i = letras.length - 1; i >= 0; i--) {
    inversa += letras[i];
}
console.log(inversa);