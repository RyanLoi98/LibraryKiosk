import React from "react";
import HomeHeader from "../components/home-header";
import BackFooter from "../components/back-footer";
import SearchResults from "../components/search-results";
import SearchBar from "../components/searchbar";
import "./home.css";

function result() {
  return (
    <div>
      <HomeHeader />
      <SearchBar />
      <SearchResults />
      <BackFooter />
    </div>
  );
}

export default result;
