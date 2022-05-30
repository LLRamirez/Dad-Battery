import React from 'react';
import Button from 'react-bootstrap/Button';

const About = () => {
    return(
        <div id="#about" className='aboutContainer'>
        <h1 className="getTitle">We Get the Job <br/> Done Right</h1>
        <div className="about1">
            <p className='about2'>Need to replace an electric bike battery for a discontinued model or a company that is out of business? Is your battery no longer covered under warranty and needs some maintenance? Send all your old e-bike batteries to our location and we can make them work like the first day you purchased them!!! </p>
           
            </div>
           <br/>

            {/* <Button variant="primary">Primary</Button> */}
            
            <div className='imgContainer'>
                <div>
                    <img className='iconImg' src='./support.png'/>
                    <p className='iconText'>Quick Repairs</p>
                </div>
                <div>
                    <img className='iconImg' src='./award.png' />
                    <p className='iconText'>Top Quality</p>
                </div>
            </div>
  
        </div>
    );

}

export default About;