import React, {useState} from "react";

import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

// Import components needed for page
import HomeHeader from "../components/home-header";
import BackFooter from "../components/back-footer";

// Import the css file (stylesheet)
import "./createReview.css";

// Import images
import hungerGames from "../assets/hunger.jpg";
import HomeHeaderLoggedin from "../components/home-header-loggedin";

// rename function to the page name
function CreateReview() {
  const [reviewer, setReviewerText] = useState('');
  const [review, setReviewText] = useState('');
  const [isKeyboardOn, setKeyboard] = useState(false);
  const [activeInput, setActiveInput] = useState(null);

  const onChangeReviewer = (input) => {
    setReviewerText(input);
  };

  const onChangeReview = (input) => {
    setReviewText(input);
  };

  const toggleKeyboard = (inputId) => {
      setKeyboard(!isKeyboardOn);
      setActiveInput(inputId);
  };

  const closeKeyboard = () => {
    setKeyboard(false);
};

  // const onInputChange = (event) => {
  //     const input = event.target.value
  //     setSearch(input);
  // }

  return (
    // ALter div below to make your html file
    <div>
      <div className="createReviewHomeHeaderLoggedIn"> <HomeHeaderLoggedin /></div>
      <div class="section-create-review">
        <div class="create-review-container">
          <div class="create-review-desc-box">
            <h1 class="create-review-heading">Review</h1>
            <img
              class="create-review-item-image"
              src={hungerGames}
              alt="Hunger Games book Cover"
            />
            <h2 class="create-review-title">
              The Hunger Games - Suzanne Collins
            </h2>
          </div>
          <form class="create-review-form" action="#">
            <div>
              <label for="reviewer">Reviewer:</label>
              <input
                type="text"
                id="reviewer"
                placeholder="Username"
                value={reviewer}
                onClick={() => toggleKeyboard("reviewer")}
                onChange={(e) => setReviewerText(e.target.value)}
                required
              />
              {isKeyboardOn && activeInput === "reviewer" && (
                <div className="keyboard">
                    <Keyboard inputName="reviewer" onChange={onChangeReviewer}/>
                    <button onClick={closeKeyboard}>X</button>
                </div>
              )}
            </div>
            <div>
              <label for="select-stars">Rating:</label>
              <select id="select-stars" required>
                <option value="">Please Choose One Option</option>
                <option value="one-star">&#9733;</option>
                <option value="two-stars">&#9733; &#9733;</option>
                <option value="three-stars">&#9733; &#9733; &#9733;</option>
                <option value="four-stars">
                  &#9733; &#9733; &#9733; &#9733;
                </option>
                <option value="five-stars">
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </option>
              </select>
            </div>
            <div>
              <label for="review">Review</label>
              <input
                type="text"
                id="review"
                placeholder="Write Review Here..."
                value={review}
                onClick={() => toggleKeyboard("review")}
                onChange={(e) => setReviewText(e.target.value)}
                required
              />
              {isKeyboardOn && activeInput === "review" && (
                <div className="keyboard">
                    <Keyboard inputName="review" onChange={onChangeReview}/>
                    <button onClick={closeKeyboard}>X</button>
                </div>
              )}
            </div>
            <div class="create-review-submit-btn-div">
              <button class="create-review-submit-btn">
                <a href="/information">Submit</a>
              </button>
            </div>
          </form>
        </div>
      </div>
      <BackFooter />
    </div>
  );
}

// export your function, remember to keep name consistent
export default CreateReview;
