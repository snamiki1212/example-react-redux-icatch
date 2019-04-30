import React from 'react';
import logo from './logo.svg';
import './App.css';
import DemoContainer from './containers/DemoContainer';
import Controller from './containers/Controller'
import Output from './components/Output';

function App() {
  return (
    <div className="App">
      <DemoContainer />
      <Controller />
      <Output />
      <header className="App-header">
        <div id='my-node'>
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
        </div>
      </header>
    </div>
  );
}

export default App;
