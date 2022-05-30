import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Contact = () => {
    return(
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./bat13.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Ebike Battery</h3>
            <p>Refurbished like NEW</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./bat14.jpg"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Battery Life from 8 to 10hrs</h3>
            <p>Ebike Battery Upgrade</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./bat15.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Battery close up</h3>
            <p>Furbuished like New.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./bat16.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Rad Power Ebike</h3>
            <p>Repairs and upgrades.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./bat17.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Rad Power Ebike</h3>
            <p>From 8 to 10 hours of battery life</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    );

}

export default Contact;