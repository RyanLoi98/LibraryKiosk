import React from "react";
import ".//reviews.css"
import HomeHeader from "../components/home-header";
import BackFooter from "../components/back-footer";
import SearchBar from "../components/searchbar";
import hungerGames from "../assets/hunger.jpg";
import HomeHeaderLoggedin from "../components/home-header-loggedin";
function reviews(){

    return(
            <div className="reviews">
                <div className="reviewsHomeHeaderLoggedIn"> <HomeHeaderLoggedin /></div>
                <SearchBar />
                <div className="reviews-container">
                    <div className="reviews-recommend-reviews">
                        <h1 className="reviews-recommend-review-title">All Reviews</h1>
                        <img
                            className="reviews-image"
                            src={hungerGames}
                            alt="Hunger Games book Cover"
                        />
                        <div className="horizontal-line"/>
                        <div className="reviews-recommend-review-item">
                            <h3 className="reviews-recommend-review-user">Steven_282</h3>
                            <p className="reviews-recommend-review-rating">
                                &#9733; &#9733; &#9733; &#9733; &#9734;
                            </p>
                            <p className="reviews-recommend-review-desc">
                                The books good, I recommend it!
                            </p>
                        </div>
                        <div className="reviews-recommend-review-item">
                            <h3 className="reviews-recommend-review-user">Alice_Reads</h3>
                            <p className="reviews-recommend-review-rating">
                                &#9733; &#9733; &#9733; &#9733; &#9734;
                            </p>
                            <p className="reviews-recommend-review-desc">
                                Good Book! I read it in a day.
                            </p>
                        </div>
                        <div className="reviews-recommend-review-item">
                            <h3 className="reviews-recommend-review-user">Bob_The_Builder</h3>
                            <p className="reviews-recommend-review-rating">
                                &#9733; &#9733; &#9734; &#9734; &#9734;

                            </p>
                            <p className="reviews-recommend-review-desc">
                                There was nothing to do with building!
                            </p>
                        </div>
                        <div className="reviews-recommend-review-item">
                            <h3 className="reviews-recommend-review-user">Linda_Linda</h3>
                            <p className="reviews-recommend-review-rating">
                                &#9733; &#9733; &#9733; &#9733; &#9733;
                            </p>
                            <p className="reviews-recommend-review-desc">
                                Got recommended this for my book club. Overall, was
                                A very good read! Now onto the next book.
                            </p>
                        </div>

                        <h1>
                            There are no more reviews to see...
                        </h1>
                    </div>
                </div>
                <BackFooter />
            </div>
        )
}

export default reviews;