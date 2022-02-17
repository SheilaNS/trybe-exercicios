const button = document.getElementById('buttonSubmit');
let inputNameUser = document.getElementById('inputNameUser');
const nameUser = document.getElementById('nameUser');

function getUserValue(event) {
  event.preventDefault();
  console.log(inputNameUser.value);
  nameUser.innerHTML = inputNameUser.value;
}

button.addEventListener('click', getUserValue);