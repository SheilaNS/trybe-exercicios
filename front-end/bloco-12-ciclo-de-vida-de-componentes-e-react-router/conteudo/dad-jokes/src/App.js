import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import DadJoke from './components/DadJoke';

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <Counter />
        </div>
        <div className="App">
          <DadJoke />
        </div>
      </>
);
  }
}

export default App;
