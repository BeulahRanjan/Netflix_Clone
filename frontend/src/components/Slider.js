import React from "react";
import Slider from "react-slick";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import pic1 from "../assets/pic1.webp";
import pic2 from "../assets/pic2.webp";
import pic3 from "../assets/pic3.webp";
import pic4 from "../assets/pic4.webp"; 
import pic5 from "../assets/pic5.webp";
import pic6 from "../assets/pic6.webp";
import pic7 from "../assets/pic7.webp";
import pic8 from "../assets/pic8.webp";
import pic9 from "../assets/pic9.webp";
import pic10 from "../assets/pic10.webp";

/* ---------- Custom Arrows ---------- */

function NextArrow(props) {
  return (
    <div className="arrow next"
   
      onClick={props.onClick}
    >
      <ChevronRightIcon />
    </div>
  );
}

function PrevArrow(props) {
  return (
    <div className="arrow prev"
      onClick={props.onClick}
    >
      <ChevronLeftIcon />
    </div>
  );
}

/* ---------- Dummy Slider Data ---------- */

const movies= [
     { id: 1, img: pic1 },
    { id: 2, img: pic2 },
    { id: 3, img: pic3 },
    { id: 4, img: pic4 },
    { id: 5, img: pic5 },
    { id: 6, img: pic6 },
    { id: 7, img: pic7 },
    { id: 8, img: pic8 },
    { id: 9, img: pic9 },
    { id: 10, img: pic10 },

];

/* ---------- Main Component ---------- */

function SliderComponent() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div >


       <div className="slider-container">
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <div className="card" key={movie.id}>
            <img src={movie.img} alt={`movie-${index}`} />
            <p> {movie.id}</p>
            <span className="number">{movie.id}</span>
          </div>
        ))}
      </Slider>
    </div>
      
    </div>
  );
}

export default SliderComponent;
