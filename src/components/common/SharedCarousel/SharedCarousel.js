import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import aviater from '../../../assets/crousel/aviater_web.jpg';
import banner from '../../../assets/crousel/Banner_4WEB.png';
import './SharedCarousel.css';

function SharedCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <Carousel
      className="shared-carousel"
      activeIndex={activeIndex}
      onSelect={handleSelect}
      indicators={true} // Enable indicators (bullet paginator)
      nextIcon={null} // Remove the next button
      prevIcon={null} // Remove the previous button
    >
      <Carousel.Item>
        <div className="carousel-item-wrapper">
          <img className="carousel-image d-block w-100" src={aviater} alt="First slide" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-wrapper">
          <img className="carousel-image d-block w-100" src={banner} alt="Second slide" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default SharedCarousel;
