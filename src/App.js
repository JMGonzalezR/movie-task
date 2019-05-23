import React from 'react';
import './App.css';
import HeaderMovie from './components/HeaderMovie'
import data from './utils/data'
import Slider from './components/Slider'

function App() {
  return (
    <div className="App">
      <HeaderMovie data={data.headerMovieInfo}/>
      <div className="body-app">
        <Slider/>
      </div>
      
    </div>
  );
}

export default App;
