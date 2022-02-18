import logo from './logo.svg';
import './App.css';

const tasks = ['Estudar React', 'Fazer o primeiro projeto: Sistema Solar', 'Acalmar o gato da Sheila'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        {tasks.map((task) => Task(task))}
      </div>
    </div>
  );
}

export default App;
