import React, { Component } from 'react';

class PalavraChaveFavorita extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        Escolha a sua palavra chave favorita:
        <select
          name="palavraChaveFavorita"
          value={value}
          onChange={handleChange}
        >
          <option value="estado">Estado</option>
          <option value="evento">Evento</option>
          <option value="props">Props</option>
          <option value="hooks">Hooks</option>
        </select>
      </label>
    );
  }
}

export default PalavraChaveFavorita;