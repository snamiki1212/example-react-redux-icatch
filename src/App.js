import React from 'react';
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
    </div>
  );
}

export default App;
