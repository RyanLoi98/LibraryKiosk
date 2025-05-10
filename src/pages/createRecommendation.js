import React, { useState } from "react";

import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

// Import components needed for page
import BackFooter from "../components/back-footer";

// Import the css file (stylesheet)
import "./createRecommendation.css";

import book4 from "../assets/leviathan.jpg";
import book5 from "../assets/memory.jpg";
import book6 from "../assets/mockingjay.jpg";
import book7 from "../assets/songbird.png";

// Import images
import recommendCover from "../assets/recommend.jpg";
import HomeHeaderLoggedin from "../components/home-header-loggedin";
import RecommendationList from "../components/recommendationList";

// rename function to the page name
function CreateRecommendation() {
  const [creater, setCreaterText] = useState("");
  const [description, setDescriptionText] = useState("");

  const [isKeyboardOn, setKeyboard] = useState(false);
  const [activeInput, setActiveInput] = useState(null);

  const onChangeCreater = (input) => {
    setCreaterText(input);
  };

  const onChangeDescription = (input) => {
    setDescriptionText(input);
  };

  const toggleKeyboard = (inputId) => {
    setKeyboard(!isKeyboardOn);
    setActiveInput(inputId);
  };

  const closeKeyboard = () => {
    setKeyboard(false);
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

  const [recommendations, setRecommendations] = useState([]);
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
    // ALter div below to make your html file
    <div>
      <div className="createRecommendationHeader">
        <HomeHeaderLoggedin />
      </div>
      <div class="section-create-recommendation">
        <div class="create-recommendation-container">
          <div class="create-recommendation-desc-box">
            <h1 class="create-recommendation-heading">Recommendation List</h1>
            <img
              class="create-recommendation-item-image"
              src={recommendCover}
              alt="Recommendation Cover"
            />
          </div>
          <form class="create-recommendation-form" action="#">
            <div>
              <label for="creater">Recommendation List Title:</label>
              <input
                type="text"
                id="creater"
                placeholder="List Title Here..."
                value={creater}
                onClick={() => toggleKeyboard("creater")}
                onChange={(e) => setCreaterText(e.target.value)}
                required
              />
              {isKeyboardOn && activeInput === "creater" && (
                <div className="keyboard">
                  <Keyboard inputName="creater" onChange={onChangeCreater} />
                  <button onClick={closeKeyboard}>X</button>
                </div>
              )}
            </div>
            <div>
              <label for="recommendation-description">
                Recommendation List Description:
              </label>
              <input
                type="text"
                id="recommendation-description"
                placeholder="Write Description Here..."
                value={description}
                onClick={() => toggleKeyboard("description")}
                onChange={(e) => setDescriptionText(e.target.value)}
                required
              />
              {isKeyboardOn && activeInput === "description" && (
                <div className="keyboard">
                  <Keyboard
                    inputName="description"
                    onChange={onChangeDescription}
                  />
                  <button onClick={closeKeyboard}>X</button>
                </div>
              )}
            </div>
            {/* <div>
              <label for="recommendation-description">Search:</label>
              <input
                type="text"
                id="recommendation-description"
                placeholder="Search Here..."
                value={search}
                onClick={() => toggleKeyboard("search")}
                onChange={(e) => setDescriptionText(e.target.value)}
                required
              />
              {isKeyboardOn && activeInput === "search" && (
                <div className="keyboard">
                    <Keyboard inputName="search" onChange={onChangeSearch}/>
                    <button onClick={closeKeyboard}>X</button>
                </div>
              )}
            </div> */}
          </form>
          {/*  */}
          <RecommendationList
            recommendations={recommendations}
            removeRecommendation={removeRecommendation}
            addNextRecommendation={addNextRecommendation}
          />
          {/*  */}
          <div class="create-recommendation-submit-btn-div">
            <button class="create-recommendation-submit-btn">
              <a href="/viewRecommendations">Create List</a>
            </button>
          </div>
        </div>
      </div>
      <BackFooter />
    </div>
  );
}

// export your function, remember to keep name consistent
export default CreateRecommendation;
