import React from "react";
import HomeHeader from "../components/home-header";
import HomeFooter from "../components/home-footer";
import SearchBar from "../components/searchbar";
import HomeRecommendation from "../components/home-recommendation";
import "./homeLoggedIn.css";
import { useNavigate } from "react-router-dom";
import HomeHeaderLoggedin from "../components/home-header-loggedin";

function HomeLoggedIn(){

    // rename useNavigate function to navigate
    let navigate = useNavigate();

    // make our navigate to return book function
    const goReturn = () => {
        let returnPath = '/returnScreen';
        navigate(returnPath);
    }

    // navigate to checkout
    const goCheckout = () => {
        let checkoutPath = '/checkout';
        navigate(checkoutPath);
    }


    return(
        <div>
            <div className="loggedinHeader">
                <HomeHeaderLoggedin/>
            </div>

            <div className="loggedinsearchbar">
                <SearchBar />
            </div>

            <div className='loggedinButtons'>
                <button className="loggedinCheckout" onClick={goCheckout}>Checkout</button>
                <button className="loggedinReturn" onClick={goReturn}>Return Book</button>
            </div>
            <div>
                <HomeRecommendation />
            </div>
            <HomeFooter />
        </div>
    )
}

export default HomeLoggedIn;