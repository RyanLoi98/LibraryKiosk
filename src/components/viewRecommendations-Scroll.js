import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ViewRecommendationScroll.css";

import book1 from "../assets/androids.jpg";
import book2 from "../assets/greeneggs.jpg";
import book3 from "../assets/hunger.jpg";
import book4 from "../assets/leviathan.jpg";
import book5 from "../assets/memory.jpg";
import book6 from "../assets/mockingjay.jpg";
import book7 from "../assets/songbird.png";

import RecommendationList from "./recommendationList";

function ViewRecommendationScroll() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  const allRecommendations = [
    {
      id: 1,
      title: "Leviathan Book Cover",
      image: book4,
    },
    {
      id: 2,
      title: "Memory Book Cover",
      image: book5,
    },
    {
      id: 3,
      title: "Mockingjay Book Cover",
      image: book6,
    },
    {
      id: 4,
      title: "Songbird Book Cover",
      image: book7,
    },
  ];

  const [recommendations, setRecommendations] = useState([
    allRecommendations[0],
    allRecommendations[1],
  ]);
  const [nextRecIndex, setNextRecIndex] = useState(2);

  const addNextRecommendation = () => {
    if (nextRecIndex < allRecommendations.length) {
      setRecommendations([
        ...recommendations,
        allRecommendations[nextRecIndex],
      ]);
      setNextRecIndex(nextRecIndex + 1);
    }
  };

  const removeRecommendation = (id) => {
    setRecommendations(recommendations.filter((rec) => rec.id !== id));
  };

  return (
    <div className="section-viewRecommendation">
      <div className="viewRecommendation-container">
        <div className="viewRecommendation-recommendation">
          <h2> Recommended For You </h2>
          <Slider {...settings}>
            <div>
              <img
                className="view-book-rec"
                src={book1}
                alt="Recommendation 1"
              />
            </div>
            <div>
              <img
                className="view-book-rec"
                src={book2}
                alt="Recommendation 2"
              />
            </div>
            <div>
              <a href="/information">
                <img
                  className="view-book-rec"
                  src={book3}
                  alt="Recommendation 3"
                />
              </a>
            </div>
            <div>
              <img
                className="view-book-rec"
                src={book4}
                alt="Recommendation 4"
              />
            </div>
            <div>
              <img
                className="view-book-rec"
                src={book5}
                alt="Recommendation 5"
              />
            </div>
            <div>
              <img
                className="view-book-rec"
                src={book6}
                alt="Recommendation 6"
              />
            </div>
          </Slider>
        </div>
        {/* <div className="viewRecommendation-list-box">
          <h2 className="recommendation-list-title">My Recommendation List:</h2>
          <div className="recommendation-list-item-box">
            {recommendations.map((rec) => (
              <div className="recommendation-list-item" key={rec.id}>
                <img
                  className="view-book-rec rec-item-img"
                  src={rec.image}
                  alt={rec.title}
                />
                <button
                  className="recommendation-item-remv-btn"
                  onClick={() => removeRecommendation(rec.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <button
            className="recommendation-list-add-btn"
            onClick={addNextRecommendation}
          >
            Add Next Recommendation
          </button>
        </div> */}
        <RecommendationList
          recommendations={recommendations}
          removeRecommendation={removeRecommendation}
          addNextRecommendation={addNextRecommendation}
        />
        <div>
          <button className="viewRecommendation-new-list-btn">
            <a href="/createRecommendation">Create a New Recommendation List</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewRecommendationScroll;
