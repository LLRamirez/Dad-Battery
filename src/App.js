import React from 'react';
import './App.css';
import MainGallery from './components/MainGallery';
import About from './components/About';
import GetQuote from './components/GetQuote';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Services from './components/Services';
import Carousel from './components/Carousel';

function App() {
  return (
  <section className="App">
<NavBar/>
  
      
               <div className='containER'>
      <div>
      <p className="twhite">
        Rad Power Battery Repair Experts
        </p>
      </div>

         <MainGallery/>
        
         <About/> 
         <div className='serviceSection'>
         <Carousel />
         
         
         </div>
         <GetQuote/> 
         <Contact/>
         </div>
  
    </section>
  );
}

export default App;
