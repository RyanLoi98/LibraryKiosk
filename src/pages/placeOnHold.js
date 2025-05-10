import React from "react";

import HomeHeader from "../components/home-header";
import BackFooter from "../components/back-footer";
import SearchBar from "../components/searchbar";

import book1 from "../assets/hunger.jpg";
import movie1 from "../assets/hunger-games-movie-set.jpg";

import "./placeOnHold.css";
import HomeHeaderLoggedin from "../components/home-header-loggedin";

function placeOnHold() {
  return (
    <div>
      <div className="placeOnHoldHomeHeaderLoggedIn"> <HomeHeaderLoggedin /></div>
      <SearchBar />
      <div class="section-result">
        <div class="search-result-container">
          <div class="refine-results-container">
            <p class="results-shown">Results 1-10 of 312</p>
            <div class="refine-results-options">
              <p class="refine-results-options-title">Refine Results</p>
              <ul>
                <li class="refine-list-option">&#43; Author</li>
                <li class="refine-list-option">&#43; Date</li>
                <li class="refine-list-option">&#43; Demographic</li>
                <li class="refine-list-option">&#43; Format</li>
                <li class="refine-list-option">&#43; Genre</li>
                <li class="refine-list-option">&#43; ISBN</li>
                <li class="refine-list-option">&#43; Language</li>
                <li class="refine-list-option">&#43; Rating</li>
                <li class="refine-list-option">&#43; Year</li>
              </ul>
            </div>
          </div>
          <div class="results-shown-container">
            <div class="result-item-box">
              <div class="result-item-image-box">
                <img
                  class="result-item-image"
                  src={book1}
                  alt="Hunger Games Book Cover"
                />
              </div>
              <div class="result-item-detail-box">
                <div class="result-item-details">
                  <ul>
                    <li class="result-item-details-list result-item-details-title">
                      The Hunger Games
                    </li>
                    <li class="result-item-details-list result-item-details-rating">
                      &#9733; &#9733; &#9733; &#9733; &#9734;
                    </li>
                    <li class="result-item-details-list result-item-details-author">
                      Author: Collins Suzanne
                    </li>
                    <li class="result-item-details-list result-item-details-year">
                      Year: 2008
                    </li>
                    <li class="result-item-details-list result-item-details-genre">
                      Genre: Action; Adventure
                    </li>
                    <li class="result-item-details-list result-item-details-language">
                      Language: English
                    </li>
                    <li class="result-item-details-list result-item-details-location">
                      Location: Floor 3 YA COL
                    </li>
                  </ul>
                </div>
                <div class="result-item-locations">
                  <ul>
                    <p class="result-item-location-title">
                      Avaliable Locations:
                    </p>
                    <li class="result-item-location-list">
                      &#10004; Central Library
                    </li>
                    <li class="result-item-location-list">
                      &#10004; Shawnessy Library
                    </li>
                    <li class="result-item-location-list">
                      &#10004; Southwood Library
                    </li>
                    <li class="result-item-location-list">
                      &#10004; Louise Riley Library
                    </li>
                    <li class="result-item-location-list">
                      &#10004; Seton Library
                    </li>
                  </ul>
                </div>
                <div class="result-item-interactions">
                  <p class="result-item-heart-btn">&#9825;</p>
                  <button class="result-item-interact-btn">Show on Map</button>
                  <button class="result-item-interact-btn place-on-hold-check">
                    &#10004; Place on Hold
                  </button>
                  <p class="result-item-available-copies">
                    Avaliable Copies: 85
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
            <div class="result-item-box">
              <div class="result-item-image-box">
                <img
                  class="result-item-image"
                  src={movie1}
                  alt="Hunger Games Movie Cover"
                />
              </div>
              <div class="result-item-detail-box">
                <div class="result-item-details">
                  <ul>
                    <li class="result-item-details-list result-item-details-title">
                      The Hunger Games: The Complete 4-Film Collection
                    </li>
                    <li class="result-item-details-list result-item-details-rating">
                      &#9733; &#9733; &#9733; &#9733; &#9734;
                    </li>
                    <li class="result-item-details-list result-item-details-dvd">
                      DVD, 2019
                    </li>
                    <li class="result-item-details-list result-item-details-year">
                      Year: 2019
                    </li>
                    <li class="result-item-details-list result-item-details-genre">
                      Genre: Action; Adventure
                    </li>
                    <li class="result-item-details-list result-item-details-language">
                      Language: English, French
                    </li>
                    <li class="result-item-details-list result-item-details-location">
                      Location: Floor 3 YA COL
                    </li>
                  </ul>
                </div>
                <div class="result-item-locations">
                  <ul>
                    <p class="result-item-location-title">
                      Avaliable Locations:
                    </p>
                    <li class="result-item-location-list">
                      &#10004; Central Library
                    </li>
                    <li class="result-item-location-list">
                      &#10004; Shawnessy Library
                    </li>
                    <li class="result-item-location-list">
                      &#10004; Southwood Library
                    </li>
                    <li class="result-item-location-list">
                      &#10004; Louise Riley Library
                    </li>
                    <li class="result-item-location-list">
                      &#10004; Seton Library
                    </li>
                  </ul>
                </div>
                <div class="result-item-interactions">
                  <p class="result-item-heart-btn">&#9825;</p>
                  <button class="result-item-interact-btn">Show on Map</button>
                  <button class="result-item-interact-btn">
                    Place on Hold
                  </button>
                  <p class="result-item-available-copies">
                    Avaliable Copies: 85
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      <BackFooter />
    </div>
  );
}

export default placeOnHold;
