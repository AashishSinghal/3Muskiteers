import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import "./Carousel.style.css";
import image1 from './img/slide-1.jpeg'
import image2 from './img/slide-2.jpeg'
import image3 from './img/slide-3.jpeg'
// import image4 from '../img/4.jpg'

function Carousel() {
  return (
    <div className = "carousel">
      <AliceCarousel autoPlay autoPlayInterval="3000" dotsDisabled={true}
          buttonsDisabled={true}>
      <img src={image1} alt='image1' className="sliderimg"/>
      <img src={image2} alt='image2' className="sliderimg"/>
      <img src={image3} alt='image3' className="sliderimg"/>
      {/* <img src={image4} className="sliderimg"/> */}
      </AliceCarousel>
    </div>
  );
}

export default Carousel;
