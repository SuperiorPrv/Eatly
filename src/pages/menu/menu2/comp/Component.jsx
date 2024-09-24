import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "./img/Star.png"
import img3 from "./img/Food Image.png"
import img4 from "./img/Icon (2).png"
import img5 from "./img/Add.png"
import img6 from "./img/Food Image (1).png"
import img7 from "./img/Food Image (2).png"

function PLAY() {
  const settings = {
    
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  
  return (
    <div className="slider-container">
      <Slider {...settings} >
            
      
      </Slider>
    </div>
  );
}

export default PLAY;
