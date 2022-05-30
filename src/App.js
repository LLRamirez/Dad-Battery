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
        Your Trusted Ebike Repair Experts
        </p>
      </div>

         <MainGallery/>
        
         <About/> 
         <div className='serviceSection'>
         <Carousel />
         </div>
         <div className='infoContainer'>
         <p className='about2'>Does your battery not power on? No worries! Our battery repair service will bring new life to your eBike and is cost efficient.  Send your defective battery to us and we will take care of the rest. You will be back on the saddle with that eGrin everyone is talking about in no time.</p>
         </div>

         <GetQuote/> 
         <Contact/>
         </div>
  
    </section>
  );
}

export default App;
