// objeto JSON escrito em string ``
const jsonInfo = `{
  "muitasEmpresasUsam": [
    "Google",
    "Twitter",
    "Facebook",
    "etc..."
  ],
  "temVariasVantagens": [
    "Legível",
    "Fácil de usar",
    "Leve",
    "Popular",
    "Versátil"
  ],
  "muitasLinguagensDaoSuporte": [
    "Python",
    "C",
    "C++",
    "Java",
    "PHP"
  ]
}`;

// JSON.parse() transforma o json string em objeto
const usoJSONPorque = JSON.parse(jsonInfo);

const corporationsList = document.getElementById('corporations-used-by'); // primeira <ul>
const advantagesList = document.getElementById('advantages'); // segunda <ul>
const languagesList = document.getElementById('languages-used-by'); // terceira <ul>

// insere <li> na primeira <ul> usando map pois a chave muitasEmpresasUsam é um array
usoJSONPorque.muitasEmpresasUsam.map((empresa) => {
  const newLi = document.createElement('li');
  newLi.innerText = empresa;
  corporationsList.appendChild(newLi);
});

// insere <li> na segunda <ul> usando map pois a chave temVariasVantagens é um array
usoJSONPorque.temVariasVantagens.map((vantagens) => {
  const newLi = document.createElement('li');
  newLi.innerText = vantagens;
  advantagesList.appendChild(newLi);
});

// insere <li> na terceira <ul> usando map pois a chave muitasLinguagensDaoSuporte é um array
usoJSONPorque.muitasLinguagensDaoSuporte.map((linguagens) => {
  const newLi = document.createElement('li');
  newLi.innerText = linguagens;
  languagesList.appendChild(newLi);
});