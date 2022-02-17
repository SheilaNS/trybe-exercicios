const stateOptions = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondânia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
const stateInitials = ['ac', 'al', 'ap', 'am', 'ba', 'ce', 'df', 'es', 'go', 'ma', 'mt', 'ms', 'mg', 'pa', 'pb', 'pr', 'pe', 'pi', 'rj', 'rn', 'rs', 'ro', 'rr', 'sc', 'sp', 'se', 'to'];

function createStateList() {
  const state = document.getElementById('state');
  for (let i = 0; i < stateOptions.length; i += 1) {
    const option = document.createElement('option');
    option.value = stateInitials[i];
    option.innerText = stateOptions[i];
    option.classList.add('state-option');
    state.appendChild(option);
  }
}

window.onload = createStateList;

const homeType = document.getElementsByName('homeType');
const dadosCorretos = document.getElementById('dados-form');

function sendInfo(event) {
  event.preventDefault();
  dadosCorretos.innerHTML = "";
  
  // Campo nome
  const nome = document.getElementById('fullName');
  let nomeOK = true;
  if (nome.value === '') {
    nomeOK = false;
    return alert('O campo Nome deve ser preenchido');
  }
  if (nome.value.length > 40) {
    nomeOK = false;
    return alert(`O campo Nome não pode ter mais que 40 caracteres`);
  }
  
  // Campo e-mail
  const email = document.getElementById('email');
  let emailOK = true;
  if (email.value === '') {
    emailOK = false;
    return alert('O campo E-mail deve ser preenchido');
  }
  if (email.value.length > 50) {
    emailOK = false;
    return alert(`O campo E-mail não pode ter mais que 50 caracteres`);
  }

  // Campo cpf
  const cpf = document.getElementById('cpf');
  let cpfOK = true;
  if (cpf.value === '') {
    cpfOK = false;
    return alert('O campo CPF deve ser preenchido');
  }
  if (cpf.value.length > 11) {
    cpfOK = false;
    return alert(`O campo CPF não pode ter mais que 11 caracteres`);
  }

  // Campo endereço
  const address = document.getElementById('address');
  let addressOK = true;
  if (address.value === '') {
    addressOK = false;
    return alert('O campo Endereço deve ser preenchido');
  }
  if (address.value.length > 200) {
    addressOK = false;
    return alert(`O campo Endereço não pode ter mais que 200 caracteres`);
  }

  // Campo cidade
  const city = document.getElementById('city');
  let cityOK = true;
  if (city.value === '') {
    cityOK = false;
    return alert('O campo Cidade deve ser preenchido');
  }
  if (city.value.length > 28) {
    cityOK = false;
    return alert(`O campo Cidade não pode ter mais que 28 caracteres`);
  }

  // Campo estado
  const estado = document.querySelectorAll('option');
  let estadoOK = true;
  
  // Campo tipo de residência
  let homeOK = true;
  if (!homeType[0].checked && !homeType[1].checked) {
    homeOK = false;
    return alert('Escolha o tipo de residência');
  }

  // Campo resumo
  const resumo = document.getElementById('resume');
  let resumoOK = true;
  if (resumo.value === '') {
    resumoOK = false;
    return alert('O campo Resumo do currículo deve ser preenchido');
  }
  if (resumo.value.length > 1000) {
    resumoOK = false;
    return alert(`O campo Resumo do currículo não pode ter mais que 1000 caracteres`);
  }

  // Campo cargo
  const cargo = document.getElementById('cargo');
  let cargoOK = true;
  if (cargo.value === '') {
    cargoOK = false;
    return alert('O campo Cargo deve ser preenchido');
  }
  if (cargo.value.length > 40) {
    cargoOK = false;
    return alert(`O campo Cargo não pode ter mais que 40 caracteres`);
  }

  // Campo descrição
  const descrip = document.getElementById('descrip');
  let descripOK = true;
  if (descrip.value === '') {
    descripOK = false;
    return alert('O campo Descrição do cargo deve ser preenchido');
  }
  if (descrip.value.length > 500) {
    descripOK = false;
    return alert(`O campo Descrição do cargo não pode ter mais que 500 caracteres`);
  }

  const inputDate = document.getElementById('startDate');
  let dataOK = true;
  const arrayData = inputDate.value.split('/');
  if (arrayData[0] <= 0 || arrayData[0] > 31) {
    dataOK = false;
    alert('Data não pode ser menos que 0 ou maior que 31');
  }
  if (arrayData[1] <= 0 || arrayData[1] > 12) {
    dataOK = false;
    alert('Mês não pode ser menor que 0 ou maior que 12');
  }
  if (arrayData[2] <= 0) {
    dataOK = false;
    alert('Ano não pode ser negativo');
  }


  if (nomeOK && emailOK && cpfOK && addressOK && cityOK && estadoOK && homeOK && resumoOK && cargoOK && dataOK) {
    const pNome = document.createElement('p');
    pNome.innerText = `Nome: ${nome.value}`;
    dadosCorretos.appendChild(pNome);
    const pEmail = document.createElement('p');
    pEmail.innerText = `E-mail: ${email.value}`;
    dadosCorretos.appendChild(pEmail);
    const pCpf = document.createElement('p');
    const numCpf = cpf.value.split("");
    pCpf.innerText = `CPF: ${numCpf[0]}${numCpf[1]}${numCpf[2]}.${numCpf[3]}${numCpf[4]}${numCpf[5]}.${numCpf[6]}${numCpf[7]}${numCpf[8]}-${numCpf[9]}${numCpf[10]}`;
    dadosCorretos.appendChild(pCpf);
    const pAddress = document.createElement('p');
    pAddress.innerText = `Endereço: ${address.value}`;
    dadosCorretos.appendChild(pAddress);
    const pCity = document.createElement('p');
    pCity.innerText = `Cidade: ${city.value}`;
    dadosCorretos.appendChild(pCity);
    for (let i = 0; i < estado.length; i += 1) {
      if (estado[i].selected) {
        const pState = document.createElement('p');
        pState.innerText = `Estado: ${estado[i].innerText}`;
        dadosCorretos.appendChild(pState);
      }
    }
    for (let i = 0; i < homeType.length; i += 1) {
      if (homeType[i].checked) {
        const pResid = document.createElement('p');
        pResid.innerText = `Tipo de residência: ${homeType[i].value}`;
        dadosCorretos.appendChild(pResid);
      } 
    }
    const pResumo = document.createElement('p');
    pResumo.innerText = `Resumo do currículo: ${resumo.value}`;
    dadosCorretos.appendChild(pResumo);
    const pCargo = document.createElement('p');
    pCargo.innerText = `Cargo: ${cargo.value}`;
    dadosCorretos.appendChild(pCargo);
    const pData = document.createElement('p');
    pData.innerText = `Data de início: ${inputDate.value}`;
    dadosCorretos.appendChild(pData);
  }
}

const submitBotton = document.getElementById('submit-button');
submitBotton.addEventListener('click', sendInfo);