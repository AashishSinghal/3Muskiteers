import React from "react";
import Slider from "infinite-react-carousel";
import "./Carousel.style.scss";
import image1 from "./img/slide-1.jpeg";
import image2 from "./img/slide-2.jpeg";
import image3 from "./img/slide-3.jpeg";
// import image4 from '../img/4.jpg'

class CustomSlider extends React.Component {
  render() {
    const settings = {
      autoplay: true,
      wheel: true,
    };
    return (
      <div className="carousel-margin">
        <Slider {...settings}>
          <div>
            <img alt="image1" src={image1} />
          </div>
          <div>
            <img alt="image2" src={image2} />
          </div>
          <div>
            <img alt="image3" src={image3} />
          </div>
        </Slider>
      </div>
    );
  }
}
export default CustomSlider;
