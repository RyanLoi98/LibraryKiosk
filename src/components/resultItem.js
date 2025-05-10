import React from "react";
import StarRating from "./starRating";
import HeartButton from "./heartButton";
import PlaceOnHold from "./placeOnHold";

const ResultItem = ({ item }) => {
  return (
    <div className="result-item-box">
      <div className="result-item-image-box">
        <img className="result-item-image" src={item.image} alt={item.title} />
      </div>

      <div className="result-item-detail-box">
        <div className="result-item-details">
          <ul>
            <li className="result-item-details-list result-item-details-title">
              <a href="/Information">{item.title}</a>
            </li>
            <li className="result-item-details-list result-item-details-rating">
              <StarRating />
            </li>
            <li className="result-item-details-list result-item-details-author">
              Author: {item.author}
            </li>
            <li className="result-item-details-list result-item-details-year">
              Relase Date: {item.release}
            </li>
            <li className="result-item-details-list result-item-details-genre">
              Genre: {item.genre}
            </li>
            <li className="result-item-details-list result-item-details-language">
              Language: {item.language}
            </li>
            <li className="result-item-details-list result-item-details-location">
              Location: {item.location}
            </li>
          </ul>
        </div>
        <div className="result-item-locations">
          <ul>
            <p className="result-item-location-title">Avaliable Locations:</p>
            <li className="result-item-location-list">
              {item.central ? "✓" : "✗"} Central Library
            </li>
            <li className="result-item-location-list">
              {item.shawnessy ? "✓" : "✗"} Shawnessy Library
            </li>
            <li className="result-item-location-list">
              {item.southwood ? "✓" : "✗"} Southwood Library
            </li>
            <li className="result-item-location-list">
              {item.louise ? "✓" : "✗"} Louise Riley Library
            </li>
            <li className="result-item-location-list">
              {item.seton ? "✓" : "✗"} Seton Library
            </li>
          </ul>
        </div>
        <div className="result-item-interactions">
          <HeartButton />
          <button className="result-item-interact-btn">
            <a href="/hungerGamesViewMap">Show on Map</a>
          </button>
          <PlaceOnHold />
          <p class="result-item-available-copies">
            Avaliable Copies: {item.copies}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultItem;
