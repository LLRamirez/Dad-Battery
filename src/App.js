import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainGallery from './components/MainGallery';

function App() {
  return (
  <section className="App">
      <header className="App-header">
      <p>
        Rad Power Battery Repair
        </p>
               
        <div className='picContainer'>
         <MainGallery/>
         </div>   
      </header>
    </section>
  );
}

export default App;
