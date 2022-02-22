import React, { Component } from 'react';
import './App.css';
import CountButton from './components/CountButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CountButton />
        <CountButton />
        <CountButton />
      </div>
    );
  }
}

export default App;
