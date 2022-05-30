import React from 'react';

const Mailto = ({ email, subject, body, ...props }) => {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }

const Contact = () => {
    return(
        <div>
            <div className='termsContainer'>
                <div className='term1'>
                    <p className='termsText'>Terms and Conditions</p>
                    <a>
            
                    <Mailto email="gemalika3@hotmail.com" subject="EBIKE BATTERY INQUIRY" body="">
                    <p className='termsText1'>Contact us</p>
            
            </Mailto>
                    
                    </a>
                </div>
                <div>              
                    <a className='term2' href="#about">Back to top ^</a>
                </div>
            </div>
            <div className='contactText'>
                <p>All rights reserved</p>
                <p><a href='www.therealllr.com' target='_blank' className='sigLink'>Made by LLR</a></p>
                </div>
            </div>
    );

}

export default Contact;