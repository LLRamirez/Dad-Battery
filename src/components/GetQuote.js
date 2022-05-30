import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import QuoteForm from '../components/QuoteForm';

const GetQuote = () => {
    return(
        <div className='getQuoteContainer'>
    
        <h1 id="#getTitle"className="getTitle">Get in Touch</h1>
           <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header className='accordHeader'>Request a Quote</Accordion.Header>
                <Accordion.Body>
                <QuoteForm/>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
    );

}

export default GetQuote;