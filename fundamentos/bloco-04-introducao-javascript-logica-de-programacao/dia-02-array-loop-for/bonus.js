/* Passo a passo BUBBLE SORT
for (let i = 1; i < array.length; i += 1) {
    for (let l = 0; l < i; l += 1) {
      if (array[i] < array[l]) {
        let position = array[i];
        array[i] = array[l];
        array[l] = position;
      }
    }
  } 
*/

// EXERCÍCIO BONUS

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 - Ordene o array numbers em ordem crescente e imprima seus valores;

for (let i = 0 ; i < numbers.length ; i++ ) {
  for ( let l = 0 ; l < i ; l++ ) {
    if (numbers[i] < numbers[l]) {
      let troca = numbers[i];
      numbers[i] = numbers[l];
      numbers[l] = troca;
    }
  }
}
console.log(numbers)

// 2 - Ordene o array numbers em ordem decrescente e imprima seus valores;

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for ( let i = 0 ; i < numbers.length ; i++ ) {
  for ( let l = 0 ; l < i ; l++ ) {
    if (numbers[i] > numbers[l]) {
      troca = numbers[i];
      numbers[i] = numbers[l];
      numbers[l] = troca;
    }
  }
}
console.log(numbers);

// 3 - Agora crie um novo array a partir do array numbers , sem perdê-lo. 

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Cada valor do novo array deverá ser igual ao valor correspondente no array numbers 
// multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, 
// pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). 
// Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) 
// e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá 
// ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:
// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

let multNumbers = [];
for (let i = 0 ; i < numbers.length ; i++) {
    if (i + 1 === numbers.length){
      multNumbers.push(numbers[i] * 2);
    } else {
      multNumbers.push(numbers[i] * numbers[i+1]);
    }
}
console.log(multNumbers);