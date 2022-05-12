import React, { Component } from 'react';

class File extends Component {
  render() {
    const { fileInput } = this.props;
    return (
      <label>
        Adicione um arquivo:
        <input type="file" ref={fileInput} />
      </label>
    );
  }
}

export default File;