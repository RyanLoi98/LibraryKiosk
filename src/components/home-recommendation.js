import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home-recommendation.css";

import book1 from "../assets/androids.jpg";
import book2 from "../assets/greeneggs.jpg";
import book3 from "../assets/hunger.jpg";
import book4 from "../assets/leviathan.jpg";
import book5 from "../assets/memory.jpg";
import book6 from "../assets/mockingjay.jpg";

function homeRecommendation() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="recommendation">
      <h2> This Weeks Recommendations </h2>
      <Slider {...settings}>
        <div>
          <img className="home-book-rec" src={book1} alt="Recommendation 1" />
        </div>
        <div>
          <img className="home-book-rec" src={book2} alt="Recommendation 2" />
        </div>
        <div>
          <a href="/Information">
            <img className="home-book-rec" src={book3} alt="Recommendation 3" />
          </a>
        </div>
        <div>
          <img className="home-book-rec" src={book4} alt="Recommendation 4" />
        </div>
        <div>
          <img className="home-book-rec" src={book5} alt="Recommendation 5" />
        </div>
        <div>
          <img className="home-book-rec" src={book6} alt="Recommendation 6" />
        </div>
      </Slider>
    </div>
  );
}

export default homeRecommendation;
