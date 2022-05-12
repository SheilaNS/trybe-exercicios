import React, { Component } from 'react';

class Idade extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        Idade
        <input
          name="idade"
          type="number"
          value={value}
          onChange={handleChange}
        />
      </label>
    );
  }
}

export default Idade;