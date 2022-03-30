import logo from './logo.svg';
import './App.css';
import { Buttons } from './Components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-headerr">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Buttons/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactttttttttt
        </a>
      </header>
    </div>
  );
}

export default App;
