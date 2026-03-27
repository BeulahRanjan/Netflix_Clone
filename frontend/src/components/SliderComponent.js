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





 
const movies= [
     { id:1, img:pic1},
     { id:2, img:pic2},
     { id:3, img:pic3},
     { id:4, img:pic4},
     { id:5, img:pic5},
     { id:6, img:pic6},
     { id:7, img:pic7},
     { id:8, img:pic8},
     { id:9, img:pic9},
     { id:10, img:pic10}

 

];


 
function SliderComponent() {
 var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4.1,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive:[
      {
        breakpoint: 1280,
        settings:{
           infinite: false,
           speed: 400,
           slidesToShow: 3.5,
           slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1024,
        settings:{
           infinite: false,
           speed: 400,
           slidesToShow: 2.5,
           slidesToScroll: 2,
        }
      },
      {
        breakpoint: 640,
        settings:{
          dots:true,
          infinite:false,
          speed:200,
          slidesToScroll:1,
          slidesToShow:1.1
        }
      },
      {
        breakpoint:480,
        settings:{
          dots:true,
          infinite:false,
          speed:200,
          slidesToShow:1,
          slidesToScroll:1
        }
      }
    ]}
  return (
   <div className="movie_container">
   <p className="text">Trending Now</p>
 
   <Slider {...settings}>
  {movies.map((movie, id) => (
    <div className="movie_image" key={id}>
      <img src={movie.img} alt="image" />

      <span className="rank">{movie.id}</span>
     

    </div>
  ))}
</Slider>
  
    
  
   
   </div>
  );
}

export default SliderComponent;
