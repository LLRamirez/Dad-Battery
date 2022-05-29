import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainGallery from './components/MainGallery';
import About from './components/About';
import GetQuote from './components/GetQuote';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <section className="App">
      <header className="App-header">
      <p className="text-3xl font-bold color-white">
        Rad Power Battery Repair
        </p>
               <div className='containER'>
        <div className='picContainer'>
         <MainGallery/>
         </div> 
         <About/> 
         <GetQuote/> 
         <Contact/>
         </div>
      </header>
    </section>
  );
}

export default App;
