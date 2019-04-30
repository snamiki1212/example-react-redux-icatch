import React from 'react';
import logo from './logo.svg';
import './App.css';
import creater from './components/creater';
import Demo from './components/Demo';
import Controller from './components/Controller'
import Output from './components/Output';

function App() {
  return (
    <div className="App">
      <Demo />
      <Controller />
      <Output />
      <header className="App-header">
      
        <div id='my-node'>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={() => creater()}>CREATE</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
