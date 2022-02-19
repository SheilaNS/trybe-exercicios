import React from 'react';
import './App.css';

function App() {
  const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
  const items = shoppingList.map((item, index) => <li key={ index }>{item}</li>);

  return (
    <div className="App">
      <h2>Lista de compras</h2>
      <ul>
        { items }
      </ul>
    </div>
  );
}

export default App;
