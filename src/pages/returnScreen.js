import React from "react";

// Import components needed for page
import HomeHeader from "../components/home-header";
import BackFooter from "../components/back-footer";

// Import the css file (stylesheet)
import "./returnScreen.css";
import HomeHeaderLoggedin from "../components/home-header-loggedin";

// rename function to the page name
function returnScreen() {
  return (
    <div>
      <HomeHeaderLoggedin />
      <div class="section-return">
        <div class="return-container">
          <div class="return-title">
            <h1 class="return-message">
              Scan a return item and place it in the slot...
            </h1>
          </div>
          <div class="finish-return">
            <button class="finish-return-button">
              <a href="/HomeLoggedIn">Finish Returns</a>
            </button>
          </div>
        </div>
      </div>
      <BackFooter />
    </div>
  );
}

// export your function, remember to keep name consistent
export default returnScreen;
