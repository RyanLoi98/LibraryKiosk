import React from "react";
import HomeHeader from "../components/home-header";
import HomeFooter from "../components/home-footer";
import SearchBar from "../components/searchbar";
import HomeRecommendation from "../components/home-recommendation";
import "./home.css";
import { useNavigate } from "react-router-dom";

function Home(){

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
            <HomeHeader />
            <SearchBar />
            <div className='buttons'>
                <button className="checkout" onClick={goCheckout}>Checkout</button>
                <button className="return" onClick={goReturn}>Return Book</button>
            </div>
            <div>
                <HomeRecommendation />
            </div>
            <HomeFooter />
        </div>
    )
}

export default Home;