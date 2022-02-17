const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
];

// mande um e-mail para todos os usuários que podem dirigir

// usando filter e map
const eMail = users.filter((user) => user.isDriver).map((mail) => `E-mail to: ${mail.firstName}`);
console.log(eMail);

// criando uma função
const sendEmail = (arr) => {
  return arr.filter((user) => user.isDriver).map((user) => `E-mail to: ${user.firstName}`);
}
console.log(sendEmail(users));

// usando forEach
const eMailForEach = users.forEach((user) => {
  if (user.isDriver) {
    console.log('E-mail to: ', user.firstName);
  }
});
eMailForEach;

// criando uma função
const sendMailWithForEach = (arr) => {
  arr.forEach((user) => {
    if (user.isDriver) {
      console.log('E-mail to: ', user.firstName);
    }
  });
};
sendMailWithForEach(users);

// agora o mesmo desafio com um array um pouco mais complexo
const users2 = [
  { user: {firstName: 'Homer', lastName: 'Simpson'}, isDriver: true },
  { user: {firstName: 'Marge', lastName: 'Simpson'}, isDriver: true },
  { user: {firstName: 'Bart', lastName: 'Simpson'}, isDriver: false },
  { user: {firstName: 'Lisa', lastName: 'Simpson'}, isDriver: false },
  { user: {firstName: 'Maggie', lastName: 'Simpson'}, isDriver: false },
];

const sendMail2 = (arr) => {
  const nomes = arr.filter((user) => user.isDriver).map((userMap) => userMap.user.firstName).forEach((userForEach) => console.log(`${userForEach} você pode dirigir`));
  return nomes;
}
console.log('email com user 2 ', sendMail2(users2));
// usando o forEach, não é necessário usar uma variável com o return, pois ele não retorna nada

const sendMailCorreto = (arr) => {
  arr.filter((user) => user.isDriver).map((userMap) => userMap.user.firstName).forEach((userForEach) => console.log(`${userForEach} você pode dirigir`));
}
sendMailCorreto(users2);

// uma função mostrando todos os elementos que cada passo percorre
const cadaElemento = (arr) => {
  arr.filter((userFilter) => {
    console.log('user do filter', userFilter);
    return userFilter.isDriver;
  }).map((userMap) => {
    console.log('user do map', userMap);
    return userMap.user.firstName;
  }).forEach((userForEach) => console.log(`${userForEach} você pode dirigir`));
}
cadaElemento(users2);