import React from "react";
import "./home.css";
import BackFooter from "../components/back-footer";
import HomeHeaderLoggedin from "../components/home-header-loggedin";
import ViewRecommendationsScroll from "../components/viewRecommendations-Scroll";
import HomeRecommendation from "../components/home-recommendation";
import ViewRecommendationScroll from "../components/viewRecommendations-Scroll";

function ViewRecommendations(){
    return(
        <div>
            <HomeHeaderLoggedin />

            <div>
                <ViewRecommendationScroll />
            </div>

            <BackFooter />
        </div>
    )
}

export default ViewRecommendations;