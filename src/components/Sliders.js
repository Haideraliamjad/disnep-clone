import React from "react";
import "./Slider.css";
import Slider from "react-slick";
const Sliders = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="images/slider-badag.jpg" className="img-width" />
      </div>
      <div>
        <img src="images/slider-scale.jpg" className="img-width" />
      </div>
      <div>
        <img src="images/slider-badging.jpg" className="img-width" />
      </div>
      <div>
        <img src="images/slider-scales.jpg" className="img-width" />
      </div>
    </Slider>
  );
};

export default Sliders;
