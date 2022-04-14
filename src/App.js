import logo from './logo.svg';
import './App.css';
import React from 'react';

const api = {
  key: "bb96a634ff2bd015cf9b36026247b08a",
  base: "https://api.openweathermap.org/data/2.5/"
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
    </div>
  );
}

export default App;
