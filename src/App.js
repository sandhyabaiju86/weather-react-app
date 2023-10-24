import React from 'react';
import Weather from './Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
      
      <h1>WEATHER APP</h1>
      <Weather />
      
      <footer >
        This project was coded by <a href='mailto:sandhyacc28@gmail.com' target='_blank' rel='noreferrer'>Sandhya Baiju </a>
         and is open source on <a href='https://github.com/sandhyabaiju86/weather-react-app' target='_blank' rel='noreferrer'>GitHub</a>
        </footer>
        </header>
    </div>
  );
}

export default App;
