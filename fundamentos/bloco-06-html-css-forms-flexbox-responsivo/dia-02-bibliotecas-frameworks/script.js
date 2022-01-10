// Variável do JustValidade (valida o formulário)
const validate = new window.JustValidate('#form');

// Arrays usadas para criar as <options> de Estado
const stateOptions = ['Estado', 'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondânia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
const stateInitials = ['', 'ac', 'al', 'ap', 'am', 'ba', 'ce', 'df', 'es', 'go', 'ma', 'mt', 'ms', 'mg', 'pa', 'pb', 'pr', 'pe', 'pi', 'rj', 'rn', 'rs', 'ro', 'rr', 'sc', 'sp', 'se', 'to'];

// Variável que valida a data de início (DatePickerX)
const inputDate = document.getElementById('startDate').DatePickerX.init({
  format: 'dd/mm/yyyy'
});

// Variáveis do meu código HTML
const homeType = document.getElementsByName('homeType');
const dadosCorretos = document.getElementById('dados-form');
const nome = document.getElementById('fullName');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const address = document.getElementById('address');
const city = document.getElementById('city');
const estado = document.querySelectorAll('option');
const resumo = document.getElementById('resume');
const cargo = document.getElementById('cargo');
const descrip = document.getElementById('descrip');

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

validate.addField('#fullName', [
      {
        rule: 'required',
        errorMessage: 'Nome é obrigatório',
      },
      {
        rule: 'maxLength',
        value: 40,
        errorMessage: 'Nome não pode ter mais que 40 caracteres',
      }])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'E-mail é origatório',
      },
      {
        rule: 'maxLength',
        value: 50,
        errorMessage: 'E-mail não pode ter mais que 50 caracteres',
      }
    ])
    .addField('#cpf', [
      {
        rule: 'required',
        errorMessage: 'CPF é obrigatório',
      },
      {
        rule: 'maxLength',
        value: 11,
        errorMessage: 'CPF não pode ter mais que 11 caracteres',
      }
    ])
    .addField('#address', [
      {
        rule: 'required',
        errorMessage: 'Endereço é obrigatório',
      },
      {
        rule: 'maxLength',
        value: 200,
        errorMessage: 'Endereço não pode ter mais que 200 caracteres',
      }
    ])
    .addField('#city', [
      {
        rule: 'required',
        errorMessage: 'Cidade é obrigatório',
      },
      {
        rule: 'maxLength',
        value: 28,
        errorMessage: 'Cidade não pode ter mais que 28 caracteres',
      }
    ])
    .addField('#state', [
      {
        rule: 'required',
        errorMessage: 'Estado é obrigatório',
      }
    ])
    .addRequiredGroup(
      '#radio-group',
      'Tipo de residência obrigatório',
    )
    .addField('#resume', [
      {
        rule: 'required',
        errorMessage: 'Resumo do currículo é obrigatório',
      },
      {
        rule: 'maxLength',
        value: 1000,
        errorMessage: 'Resumo do currículo não pode ter mais que 1000 caracteres',
      }
    ])
    .addField('#cargo', [
      {
        rule: 'required',
        errorMessage: 'Cargo é obrigatório',
      },
      {
        rule: 'maxLength',
        value: 40,
        errorMessage: 'Cargo não pode ter mais que 40 caracteres',
      }
    ])
    .addField('#descrip', [
      {
        rule: 'required',
        errorMessage: 'Descrição do cargo é obrigatório',
      },
      {
        rule: 'maxLength',
        value: 500,
        errorMessage: 'Descrição do cargo não pode ter mais que 500 caracteres',
      }
    ])
    .addField('#startDate', [
      {
        rule: 'required',
        errorMessage: 'Data de início é obrigatório',
      }
    ])
    .onSuccess((event) => {
      console.log('Validation passes and form submitted', event);
      imprimeDados();
    });

function imprimeDados() {
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
  const dataImprime = document.getElementById('startDate').DatePickerX.getValue();
  pData.innerText = `Data de início: ${dataImprime}`;
  dadosCorretos.appendChild(pData);

}
