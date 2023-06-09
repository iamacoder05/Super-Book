import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import aviater from '../../../assets/carousel/carousel1.jpg';
import banner from '../../../assets/carousel/carousel2.jpg';
import carousel3 from '../../../assets/carousel/carousel3.jpg';
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
      <Carousel.Item>
        <div className="carousel-item-wrapper">
          <img className="carousel-image d-block w-100" src={carousel3} alt="Second slide" />
        </div>
      </Carousel.Item>

    </Carousel>
  );
}

export default SharedCarousel;
