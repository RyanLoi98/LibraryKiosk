import React from "react";

// Import components needed for page
import HomeHeader from "../components/home-header";

// Import the css file (stylesheet)
import "./logout.css";

// rename function to the page name
function logout() {
  return (
    // ALter div below to make your html file
    <div>
      <HomeHeader />
      <div class="section-logout">
        <div class="logout-container">
          <h1 class="logout-title-message">
            Thank you for visiting the Calgary Public Library!
          </h1>
          <p class="logout-return-message">
            Returning to the main screen in 3... 2... 1...
          </p>
        </div>
      </div>
    </div>
  );
}

// export your function, remember to keep name consistent
export default logout;
