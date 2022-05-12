import React, { Component } from 'react';

class VaiComparecer extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        Vai comparecer à conferência?
        <input
          name="vaiComparecer"
          type="checkbox"
          checked={value}
          onChange={handleChange}
        />
      </label>
    );
  }
}

export default VaiComparecer;