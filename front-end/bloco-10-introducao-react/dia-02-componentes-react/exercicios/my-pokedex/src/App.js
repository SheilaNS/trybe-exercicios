import './App.css';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <div className='title'>
        <h1>My Pokedex</h1>
      </div>
      <div className='cards'>
        <Pokedex />
      </div>
    </div>
  );
}

export default App;
