import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  render() {
    return (
      <div>
        <h1>Formulário em React</h1>
        <form className="form">
          <label>
            Diga qual seu Estado favorito:
            <textarea name="estadoFavorito" />
          </label>
          <label>
            Email:
            <input name="email" type="email" />
          </label>
          <label>
            Nome:
            <input name="nome" type="text" />
          </label>
        </form>
        <label>
          Idade
          <input name="idade" type="number" />
        </label>
        <label>
          Vai comparecer à conferência?
          <input name="vaiComparecer" type="checkbox" />
        </label>
        <label>
          Escolha a sua palavra chave favorita:
          <select name="palavraChaveFavorita">
            <option value="estado">Estado</option>
            <option value="evento">Evento</option>
            <option value="props">Props</option>
            <option value="hooks">Hooks</option>
          </select>
        </label>
      </div>
    );
  }
}

export default Form;