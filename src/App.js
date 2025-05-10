import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Home from "./pages/home";
import Login from "./pages/login";
import Logout from "./pages/logout";
import EnterPin from "./pages/enterpin";
import Result from "./pages/result";
import Checkout from "./pages/checkout";
import FinishCheckout from "./pages/finishCheckout";
import ReturnScreen from "./pages/returnScreen";
import AccountScreenUpdated from "./pages/accountscreenupdated";
import HomeLoggedIn from "./pages/homeLoggedIn";
import AccountScreen from "./pages/accountscreen";
import EditDetails from "./pages/editDetails";

import ViewRecommendations from "./pages/viewRecommendations";

import ViewMap from "./pages/viewMap";
import ResultTwo from "./pages/resultTwo";
import ResultThree from "./pages/resultThree";
import OldTimeout from "./pages/timeout";
import PlaceOnHold from "./pages/placeOnHold";
import Information from "./pages/information";
import CreateReview from "./pages/createReview";
import CreateRecommendation from "./pages/createRecommendation";
import PageNotFound from "./pages/pageNotFound";
import Timeout from "./components/timeout";
import Reviews from "./pages/reviews";
import HungerGameViewMap from "./pages/hungerGameViewMap";
// import { useEffect } from "react";

import MoreRecommendations from "./pages/moreRecommendations";
import StevenRecList from "./pages/stevenRecList";
import ViewMoreLists from "./pages/viewMoreLists";

function App() {

  const [showTimeout, setShowTimeout] = useState(false);
  let timeoutId;
  
  useEffect(() => {
    const timeoutDuration = 30000;
    let isUserThere = false;
    const userThere = () => {
      if (!isUserThere) {
        clearTimeout(timeoutId);
        setShowTimeout(false);
        isUserThere = true;

        timeoutId = setTimeout(() => {
          setShowTimeout(true);
          isUserThere = false;
        }, timeoutDuration);
      }
    };
    document.addEventListener("mousemove", userThere);
    document.addEventListener("keydown", userThere);

    timeoutId = setTimeout(() => {
      setShowTimeout(true);
    }, timeoutDuration);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mousemove", userThere);
      document.removeEventListener("keydown", userThere);
    };
  }, []);

  return (
    <BrowserRouter>
      {showTimeout && <Timeout onClose={() => setShowTimeout(false)} />}
      <Routes>
        {/* <Route path="/used" element={<Used />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login/enterpin" element={<EnterPin />} />
        <Route path="/result" element={<Result />} />
        <Route path="/viewRecommendations" element={<ViewRecommendations />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/finishCheckout" element={<FinishCheckout />} />
        <Route path="/returnScreen" element={<ReturnScreen />} />
        <Route path="/HomeLoggedIn" element={<HomeLoggedIn />} />
        <Route path="/accountScreen" element={<AccountScreen />} />
        <Route path="/accountScreen/editdetails" element={<EditDetails />} />
        <Route path="/accountscreenupdated" element={<AccountScreenUpdated/>} />
        <Route path="/viewMap" element={<ViewMap />} />
        <Route path="/resultTwo" element={<ResultTwo />} />
        <Route path="/resultThree" element={<ResultThree />} />
        <Route path="/OldTimeout" element={<OldTimeout />} />
        <Route path="/placeOnHold" element={<PlaceOnHold />} />
        <Route path="/information" element={<Information />} />
        <Route path="/createReview" element={<CreateReview />} />
        <Route path="/createRecommendation" element={<CreateRecommendation />} />
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/hungerGamesViewMap" element={<HungerGameViewMap />}/>
        <Route path="/moreRecommendations" element={<MoreRecommendations />}/>
        <Route path="/stevenList" element={<StevenRecList />}/>
        <Route path="/viewMoreLists" element={<ViewMoreLists />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
