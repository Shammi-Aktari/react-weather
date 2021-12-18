import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='App-weather'>
          <form>
            <input className="search" type="search" placeholder='enter your city' />
            <input type="submit" value="Search" />
          </form>
          <Weather />
        </div>
        
      </header>
    </div>
  );
}

export default App;
