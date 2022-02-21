import React, { Component } from 'react';
import './App.css';

class App extends Component {
  consoleLog1 = () => console.log('Botão 1 clicado');
  consoleLog2 = () => console.log('Botão 2 clicado');
  consoleLog3 = () => console.log('Botão 3 clicado');
  
  render() {

    return (
      <div className="App">
        <button onClick={this.consoleLog1}>Botão 1</button>
        <button onClick={this.consoleLog2}>Botão 2</button>
        <button onClick={this.consoleLog3}>Botão 3</button>
      </div>
    );
  }
}

export default App;
