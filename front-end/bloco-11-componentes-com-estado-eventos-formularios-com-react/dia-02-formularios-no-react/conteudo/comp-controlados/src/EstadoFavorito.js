import React, { Component } from 'react';

class EstadoFavorito extends Component {
render() {
  const { value, handleChange } = this.props;
  return (
    <label>
      Diga qual seu Estado favorito:
      <textarea
        name="estadoFavorito"
        value={value}
        onChange={handleChange}
      />
    </label>

  );
}
}

export default EstadoFavorito;