import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Bem Vindo! </h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bem-Vindo!
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
    </div>
  );
}

export default App;
