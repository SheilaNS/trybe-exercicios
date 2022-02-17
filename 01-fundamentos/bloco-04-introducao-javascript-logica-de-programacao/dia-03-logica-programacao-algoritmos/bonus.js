// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n

let n = 5;
let ast = "";
if (n > 1 && n % 2 != 0) {
    for (let i = 0; i < n ; i++) {
        for (let l = 0; l < n; l++) {
            ast += "*";
        }
        console.log(ast);
        ast = "";
    }
} else {
    console.log("O número é menor que 1 ou é número par");
}

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

ast = "";
if (n > 1 && n % 2 != 0) {
    for (let i = 0; i < n ; i++) {
        ast += "*";
        console.log(ast);
    }
} else {
    console.log("O número é menor que 1 ou é número par");
}

// 3- Agora inverta o lado do triângulo.

let inv = "";
let pir = "";
if (n > 1 && n % 2 != 0) {
    for (let i = 0; i < n ; i++) {
        for (let l = (n - 1); l > i; l--) {
                inv += " ";
            }
            pir += "*";
            console.log(inv + pir);
            inv = "";
    }
} else {
    console.log("O número é menor que 1 ou é número par");
}

// 4- Depois, faça uma pirâmide com n asteriscos de base


// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:


// 6- Faça um programa que diz se um número definido numa variável é primo ou não.

n = 13;
let div = 0;

for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
        div += 1;
    }
}
 if (div == 2) {
     console.log("O número é primo");
 } else {
     console.log("O numero não é primo");
 }