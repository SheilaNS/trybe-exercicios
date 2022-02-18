import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const conteudo = (array, numb) => {
  return (
      <>
        <ul key={numb}>
          <li>O conteúdo é: {array.conteudo}</li>
          <li>Status: {array.status}</li>
          <li>Bloco: {array.bloco}</li>
        </ul>
      </>
    )
  }

class Content extends React.Component {
  render() {
    return conteudos.map((cont, index) => conteudo(cont, index))
  }
}

export default Content; 