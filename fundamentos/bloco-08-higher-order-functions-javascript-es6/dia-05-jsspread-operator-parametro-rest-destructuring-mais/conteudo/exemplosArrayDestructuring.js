// ARRAY DESTRUCTURING

// Exemplo 1
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

// Sem destructuring
const firstCountry = arrayCountries[0];
const secondCountry = arrayCountries[1];
const thirdCountry = arrayCountries[2];
const fourthCountry = arrayCountries[3];

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

// Com destructuring
const [firstCountry1, secondCountry1, thirdCountry1, fourthCountry1] = arrayCountries;

console.log(firstCountry1); // Brazil
console.log(secondCountry1); // Japan
console.log(thirdCountry1); // China
console.log(fourthCountry1); // Canada