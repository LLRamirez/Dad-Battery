import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainGallery from './components/MainGallery';
import About from './components/About';
import GetQuote from './components/GetQuote';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Services from './components/Services';

function App() {
  return (
  <section className="App">
<NavBar/>
  
      
               <div className='containER'>
      <div>
      <p className="twhite">
        Your Trusted Repair Experts
        </p>
      </div>

         <MainGallery/>
        
         <About/> 
         <div className='serviceSection'>
         <Services/>
         <Services/>
         
         </div>
         <GetQuote/> 
         <Contact/>
         </div>
  
    </section>
  );
}

export default App;
