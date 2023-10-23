import React from 'react';
import Weather from './Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
      <h1>Hello Everyone</h1>
      <Weather cities="Kannur"/>
      </header>
    </div>
  );
}

export default App;
