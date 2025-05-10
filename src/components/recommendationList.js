import React, { useState } from "react";

import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const RecommendationList = ({
  recommendations,
  removeRecommendation,
  addNextRecommendation,
}) => {
  const [search, setSearchText] = useState("");

  const [isKeyboardOn, setKeyboard] = useState(false);
  const [activeInput, setActiveInput] = useState(null);

  const onChangeSearch = (input) => {
    setSearchText(input);
  };

  const toggleKeyboard = (inputId) => {
    setKeyboard(!isKeyboardOn);
    setActiveInput(inputId);
  };

  const closeKeyboard = () => {
    setKeyboard(false);
  };

  return (
    <div className="viewRecommendation-list-box">
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
      <form>
        <div>
          <label for="recommendation-description">Search:</label>
          <input
            type="text"
            id="recommendation-description"
            placeholder="Search Here..."
            value={search}
            onClick={() => toggleKeyboard("search")}
            onChange={(e) => setSearchText(e.target.value)}
            required
          />
          {isKeyboardOn && activeInput === "search" && (
            <div className="keyboard">
              <Keyboard inputName="search" onChange={onChangeSearch} />
              <button onClick={closeKeyboard}>X</button>
            </div>
          )}
        </div>
      </form>
      {addNextRecommendation && (
        <button
          className="recommendation-list-add-btn"
          onClick={addNextRecommendation}
        >
          Add Next Recommendation
        </button>
      )}
    </div>
  );
};

export default RecommendationList;
