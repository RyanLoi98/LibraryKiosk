import React from "react";
import "./search-results.css";

import book1 from "../assets/hunger.jpg";

function searchResults() {
  return (
    <div className="results-container">
      <div className="filter-results">
        <h2>Refine Results</h2>
      </div>
      <div className="card-container">
        <div className="results-card">
          <img className="book-image" src={book1} alt="Hunger" />
          <div className="book-info">
            <h1>The Hunger Games</h1>
            <br />
            <p>
              <strong>Year:&nbsp;</strong>
              2008
            </p>
            <p>
              car
              <strong>Genre:&nbsp;</strong>
              Action, Adventure
            </p>
            <p>
              <strong>Language:&nbsp;</strong>
              English
            </p>
            <p>
              <strong>Location:&nbsp;</strong>
              Floor 3 YA COL
            </p>
          </div>
          <div className="book-locations">
            <strong>Available Locations:</strong>
            <br></br>
            <br></br>
            Central Public Library
            <br></br>
            Shawnessy Library
            <br></br>
            Southwood Library
          </div>
          <div className="book-buttons">
            <button className="show-map">Show On Map</button>
            <br></br>
            <button className="hold">Place On Hold</button>
            <br></br>
            Available Copies: 85
          </div>
        </div>
        <div className="results-card">
          <img className="book-image" src={book1} alt="Hunger" />
          <div className="book-info">
            <h1>The Hunger Games</h1>
            <br />
            <p>
              <strong>Year:&nbsp;</strong>
              2008
            </p>
            <p>
              <strong>Genre:&nbsp;</strong>
              Action, Adventure
            </p>
            <p>
              <strong>Language:&nbsp;</strong>
              English
            </p>
            <p>
              <strong>Location:&nbsp;</strong>
              Floor 3 YA COL
            </p>
          </div>
          <div className="book-locations">
            <strong>Available Locations:</strong>
            <br></br>
            <br></br>
            Central Public Library
            <br></br>
            Shawnessy Library
            <br></br>
            Southwood Library
          </div>
          <div className="book-buttons">
            <button className="show-map">Show On Map</button>
            <br></br>
            <button className="hold">Place On Hold</button>
            <br></br>
            Available Copies: 85
          </div>
        </div>
      </div>
    </div>
  );
}

export default searchResults;
