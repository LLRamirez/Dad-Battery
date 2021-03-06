import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const MainGallery = props => {

    const slider = (
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={6000}
        >
          <div data-src="https://electrek.co/wp-content/uploads/sites/3/2021/07/radrover-6-plus-header.png?w=1600" />
          <div data-src="https://electrek.co/wp-content/uploads/sites/3/2022/02/radrunner2-header.jpg?quality=82&strip=all&w=1600" />
          <div data-src="./bat1.jpg" />
          <div data-src="./bat2.jpg" />
          <div data-src="./bat3.jpg" />
          <div data-src="./bat4.jpg" />
          <div data-src="./bat5.jpg" />
        </AutoplaySlider>
      );

    return (
      <div className='picContainer'>
        <div className="flex justify-center">
            {slider}
        </div>
      </div>
    );
}

export default MainGallery;