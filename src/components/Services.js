import React from 'react';

import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Services = () => {
    return(
        <div className='serviceContainer'>
            <Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src="./bat10.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
        </div>
    );

}

export default Services;