import React, { useState } from "react";
import "./information.css";

import ballad from "../assets/ballad.jpg";
import catchingFire from "../assets/catchingfire.jpg";
import divergent from "../assets/divergent.avif";
import endersGame from "../assets/endersgame.avif";
import hungerGames from "../assets/hunger.jpg";
import mockingjay from "../assets/mockingjay.jpg";
import mazeRunner from "../assets/mazerunner.avif";
import neuromancer from "../assets/neuromancer.avif";
import readyPlayerOne from "../assets/readyplayerone.avif";
import snowCrash from "../assets/snowcrash.avif";
import recommend from "../assets/recommend.jpg";

import HomeHeader from "../components/home-header";
import SearchBar from "../components/searchbar";
import BackFooter from "../components/back-footer";
import HeartButton from "../components/heartButton";
import PlaceOnHold from "../components/placeOnHold";
import AddToListBtn from "../components/addToListBtn";
import ToggleButton from "../components/toggleButton";
import StarRating from "../components/starRating";
import HomeHeaderLoggedin from "../components/home-header-loggedin";
import FindAnotherLibrary from "../components/FindAnotherLibrary";
import Button from "react-bootstrap/Button";
import { FaCheckCircle } from "react-icons/fa";

function Information() {
  const [activeButtonType, setActiveButtonType] = useState(null);

  const handleButtonClick = (buttonType) => {
    setActiveButtonType(buttonType);
  };

  // template from https://react-bootstrap.netlify.app/docs/components/modal/
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <div className="informationHomeHeaderLoggedIn">
        {" "}
        <HomeHeaderLoggedin />
      </div>
      <SearchBar />

      <div class="section-information">
        <div class="information-container">
          <div class="information-image-container">
            <img
              class="information-item-image"
              src={hungerGames}
              alt="Hunger Games book Cover"
            />
          </div>
          <div class="information-summary-container">
            <div class="information-summary-title">
              <h1 class="information-item-title">The Hunger Games</h1>
              <div className="result-item-details-rating">
                <StarRating />
              </div>

              {/* <p class="information-item-star-rating">
                &#9733; &#9733; &#9733; &#9733; &#9734;
              </p> */}
              <p class="information-item-number-rating">(586 ratings)</p>
              <button class="information-summary-title-btn">
                <a href="/createReview">Create Review</a>
              </button>
              <AddToListBtn />
              {/* <button class="information-summary-title-btn">Add to List</button> */}
              <HeartButton />
              {/* <button class="information-summary-title-btn">&#9825;</button> */}
            </div>
            <div class="information-summary-author-location">
              <p class="information-summary-item-loaction-title">Details:</p>
              <ul>
                <li class="information-summary-detail-list">
                  Author: Collins, Suzanne
                </li>
                <li class="information-summary-detail-list">Year: 2008</li>
                <li class="information-summary-detail-list">
                  Collection: YA Fiction
                </li>
                <li class="information-summary-detail-list">
                  Genre: Action, Adventure
                </li>
                <li class="information-summary-detail-list">
                  Language: English
                </li>
                <li class="information-summary-detail-list">
                  Location: Floor 3 YA COL
                </li>
              </ul>
              <div class="information-summary-locations">
                <p class="information-summary-item-loaction-title">
                  Avaliable Locations:
                </p>
                <ul>
                  <li class="information-summary-detail-list">
                    <FaCheckCircle style={{ color: 'green' }}/> Central Public Library
                  </li>
                  <li class="information-summary-detail-list">
                    <FaCheckCircle style={{ color: 'green' }}/> Shawnessy Library
                  </li>
                  <li class="information-summary-detail-list">
                    <FaCheckCircle style={{ color: 'green' }}/> Southwood Library
                  </li>
                  <li class="information-summary-detail-list">
                    <FaCheckCircle style={{ color: 'green' }}/> Louise Riley Library
                  </li>
                  <li class="information-summary-detail-list">
                    <FaCheckCircle style={{ color: 'green' }}/> Seton Library
                  </li>
                  <li class="information-summary-detail-list">
                    <>
                      {/*Template from https://react-bootstrap.netlify.app/docs/components/modal/*/}
                      <Button className="mt-2 find-another-lib" variant="primary" onClick={() => setModalShow(true)}>
                        Find Another Library
                      </Button>

                      <FindAnotherLibrary
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                      />
                    </>
                  </li>
                </ul>
              </div>
            </div>
            <div class="information-summary-description">
              <p class="information-summary-description-details">
                {" "}
                The first novel in the worldwide bestselling series by Suzanne
                Collins! Winning means fame and fortune. Losing means certain
                death. The Hunger Games have begun. . . . In the ruins of a
                place once known as North America lies the nation of Panem, a
                shining Capitol surrounded by twelve outlying districts. The
                Capitol is harsh and cruel and keeps the districts in line by
                forcing them all to send one boy and one girl between the ages
                of twelve and eighteen to participate in the annual Hunger
                Games, a fight to the death on live TV. Sixteen-year-old Katniss
                Everdeen regards it as a death sentence when she steps forward
                to take her sister's place in the Games. But Katniss has been
                close to dead before-and survival, for her, is second nature.
                Without really meaning to, she becomes a contender. But if she
                is to win, she will have to start making choices that weigh
                survival against humanity and life against love.
              </p>
            </div>
            <div class="information-summary-item-types">
              {["Book", "eBook", "AudioBook", "eAudioBook"].map((type) => (
                <ToggleButton
                  key={type}
                  text={type}
                  isActive={activeButtonType === type}
                  onClick={() => handleButtonClick(type)}
                />
              ))}
              {/* <ToggleButton text="Book" />
              <ToggleButton text="eBook" />
              <ToggleButton text="Audiobook" />
              <ToggleButton text="eAudiobook" /> */}
              {/* <button class="information-summary-item-type-btn">Book</button>
              <button class="information-summary-item-type-btn">eBook</button>
              <button class="information-summary-item-type-btn">
                Audiobook
              </button>
              <button class="information-summary-item-type-btn">
                eAudioBook
              </button> */}
            </div>
            <div class="information-summary-cta">
              <PlaceOnHold />
              {/* <button class="information-summary-cta-btn">Place On Hold</button> */}
              <button class="information-summary-cta-btn">
                <a href="/hungerGamesViewMap">View Map</a>
              </button>
            </div>
          </div>
          <div class="information-related-container">
            <div class="information-related-books">
              <div class="information-related-books-title">
                <h2 className="information-related-books-series">
                  Books in this Series
                </h2>
              </div>
              <div class="information-related-books-images">
                <img
                  class="information-related-image"
                  src={catchingFire}
                  alt="Catching Fire"
                />
                <img
                  class="information-related-image"
                  src={mockingjay}
                  alt="Mockingjay"
                />
                <img
                  class="information-related-image"
                  src={ballad}
                  alt="The Ballad of Songbirds and Snakes"
                />
              </div>
            </div>
            <div class="information-related-recommendations">
              <div class="information-related-recommendations-title">
                <h2>Recommendations</h2>
              </div>
              <div class="information-related-recommendations-images">
                <img
                  class="information-related-image"
                  src={divergent}
                  alt="Divergent"
                />
                <img
                  class="information-related-image"
                  src={mazeRunner}
                  alt="The Maze Runner"
                />
                <img
                  class="information-related-image"
                  src={endersGame}
                  alt="Ender's Game"
                />
                <img
                  class="information-related-image"
                  src={readyPlayerOne}
                  alt="Ready Player One"
                />
                <img
                  class="information-related-image"
                  src={snowCrash}
                  alt="Snow Crash"
                />
                <img
                  class="information-related-image"
                  src={neuromancer}
                  alt="Neuromancer"
                />
              </div>
              <div class="information-related-recommendations-btn-div">
                <button class="information-related-recommendations-btn">
                  <a href="/moreRecommendations">View more recommendations</a>
                </button>
              </div>
            </div>
          </div>
          <div class="information-recommend-list-container">
            <div class="information-recommend-list-options">
              <h2 class="information-recommend-list-title">
                Lists With The Hunger Games
              </h2>
              <div class="information-recommend-list-option-item">
                <div>
                  <a
                    className="information-recommend-list-option-anchor"
                    href="/stevenList"
                  >
                    <img
                      className="information-recommend-list-option-image"
                      src={recommend}
                      alt="multiple book covers"
                    />
                  </a>
                </div>
                <p class="information-recommend-list-option-description">
                  Title: Steven YA Books
                </p>
                <p class="information-recommend-list-option-description">
                  User: Steven_282
                </p>
              </div>
              <div class="information-recommend-list-option-item">
                <img
                  class="information-recommend-list-option-image"
                  src={recommend}
                  alt="multiple book covers"
                />
                <p class="information-recommend-list-option-description">
                  Title: Teen Books
                </p>
                <p class="information-recommend-list-option-description">
                  User: Alice_Reads
                </p>
              </div>
              <div class="information-recommend-list-option-item">
                <img
                  class="information-recommend-list-option-image"
                  src={recommend}
                  alt="multiple book covers"
                />
                <p class="information-recommend-list-option-description">
                  Title: Similar to The Hunger Games
                </p>
                <p class="information-recommend-list-option-description">
                  User: CPL_Librarians
                </p>
              </div>
              <div class="information-recommend-list-option-item information-recommend-list-option-item-last">
                <img
                  class="information-recommend-list-option-image"
                  src={recommend}
                  alt="multiple book covers"
                />
                <p class="information-recommend-list-option-description">
                  Title: Teen/YA Books
                </p>
                <p class="information-recommend-list-option-description">
                  User: Ryan309547
                </p>
              </div>
              <div class="information-recommend-list-btn-div">
                <button class="information-recommend-list-btn">
                  <a href="/viewMoreLists">View More Lists</a>
                </button>
              </div>
            </div>
            <div class="information-recommend-author-review">
              <div class="information-recommend-author">
                <h2 class="information-recommend-author-title">
                  Author Information
                </h2>
                <p class="information-recommend-author-desc">
                  Suzanne Collins has had a successful and prolific career
                  writing for children's television. She has worked on the
                  staffs of several Nickelodeon shows, including the
                  Emmy-nominated hit Clarissa Explains It All and The Mystery
                  Files of Shelby Woo. Collins made her mark in children's
                  literature with the New York Times bestselling five-book
                  series for middle-grade readers The Underland Chronicles,
                  which has received numerous accolades in both the United
                  States and abroad. In the award-winning The Hunger Games
                  trilogy, Collins continues to explore the effects of war and
                  violence on those coming of age. Collins lives with her family
                  in Connecticut.
                </p>
              </div>
              <div class="information-recommend-reviews">
                <h2 class="information-recommend-review-title">Reviews</h2>
                <div class="information-recommend-review-item">
                  <h3 class="information-recommend-review-user">Steven_282</h3>
                  <p class="information-recommend-review-rating">
                    &#9733; &#9733; &#9733; &#9733; &#9734;
                  </p>
                  <p class="information-recommend-review-desc">
                    The books good, I recommend it!
                  </p>
                </div>
                <div class="information-recommend-review-item">
                  <h3 class="information-recommend-review-user">Alice_Reads</h3>
                  <p class="information-recommend-review-rating">
                    &#9733; &#9733; &#9733; &#9733; &#9734;
                  </p>
                  <p class="information-recommend-review-desc">
                    Good Book! I read it in a day.
                  </p>
                </div>
              </div>
              <div class="information-recommend-review-btn-div">
                <button class="information-recommend-review-btn">
                  <a href="/reviews">View More Reviews</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackFooter />
    </div>
  );
}

export default Information;
