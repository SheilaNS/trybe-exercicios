const stateOptions = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Sul', 'Rondânia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
const stateInitials = ['ac', 'al', 'ap', 'am', 'ba', 'ce', 'df', 'es', 'go', 'ma', 'mt', 'ms', 'mg', 'pa', 'pb', 'pr', 'pe', 'pi', 'rj', 'rn', 'rs', 'ro', 'rr', 'sc', 'sp', 'se', 'to'];

function createStateList() {
  const state = document.getElementById('state');
  for (let i = 0; i < stateOptions.length; i += 1) {
    const option = document.createElement('option');
    option.value = stateInitials[i];
    option.innerText = stateOptions[i];
    state.appendChild(option);
  }
}

window.onload = createStateList;

const inputDate = document.getElementById('startDate');
function checkDate() {
  const array = inputDate.value.split('/');
  if (array[0] <= 0 || array[0] > 31) {
    alert('Data não pode ser menos que 0 ou maior que 31');
  }
  if (array[1] <= 0 || array[1] > 12) {
    alert('Mês não pode ser menor que 0 ou maior que 12');
  }
  if (array[2] <= 0) {
    alert('Ano não pode ser negativo');
  }
}
const tamanhoNome = document.getElementById('fullName').maxLength;
const tamanhoEmail = document.getElementById('email').maxLength;
inputDate.addEventListener('change', checkDate);

function sendInfo(event) {
  const nome = document.getElementById('fullName');
  const email = document.getElementById('email');
  event.preventDefault();
  checkInfo(nome, tamanhoNome);
  checkInfo(email, tamanhoEmail);
}

function checkInfo(valor, tamanho) {
  if (valor === '') {
    alert('Todos os campos devem ser preenchidos');
  }
  console.log(tamanho);
  if (valor.value.length > tamanho) {
    alert(`${valor.parentNode.innerText} não pode ser maior que ${tamanho}`);
  }
}

const submitBotton = document.getElementById('submit-button');
submitBotton.addEventListener('click', sendInfo);