import React from "react";

import HomeHeader from "../components/home-header";
import BackFooter from "../components/back-footer";
import SearchBar from "../components/searchbar";
import DropdownFilter from "../components/dropdownFilter";
import ResultItem from "../components/resultItem";

import book1 from "../assets/hunger.jpg";
import book2 from "../assets/HungerGamesQuizBook.jpg";
import book3 from "../assets/hungerGamesFrench.jpg";
import movie1 from "../assets/hunger-games-movie-set.jpg";
import sound1 from "../assets/hungerGameSoundtrack.jpg";

import "./resultTwo.css";
import HomeHeaderLoggedin from "../components/home-header-loggedin";

function resultThree() {
  const items = [
    {
      id: 1,
      title: "The Hunger Games",
      image: book1,
      author: "Collins Suzanne",
      release: "2008",
      genre: "Action; Adventure",
      language: "English",
      location: "Floor 3 YA COL",
      central: true,
      shawnessy: true,
      southwood: true,
      louise: true,
      seton: true,
      copies: "85",
    },
    {
      id: 2,
      title: "The Hunger Games: The Ultimate Quiz Book",
      image: book2,
      author: "Jack Goldsten",
      release: "2014",
      genre: "Action; Adventure",
      language: "English",
      location: "Floor 3 YA COL",
      central: true,
      shawnessy: false,
      southwood: false,
      louise: false,
      seton: true,
      copies: "5",
    },
    {
      id: 3,
      title: "The Hunger Games: La Ballade Du Serpent Et De L'oiseau Chanteur",
      image: book3,
      author: "Collins Suzanne",
      release: "2020",
      genre: "Action; Adventure",
      language: "French",
      location: "Floor 3 YA COL",
      central: true,
      shawnessy: true,
      southwood: true,
      louise: true,
      seton: true,
      copies: "13",
    },
    // {
    //   id: 4,
    //   title: "The Hunger Games: The Complete 4-Film Collection",
    //   image: movie1,
    //   author: "Gary Ross and Francis Lawrence",
    //   release: "2019",
    //   genre: "Action; Adventure",
    //   language: "English, French",
    //   location: "Floor 3 YA COL",
    //   central: true,
    //   shawnessy: true,
    //   southwood: true,
    //   louise: true,
    //   seton: true,
    //   copies: "7",
    // },
    // {
    //   id: 5,
    //   title: "The Hunger Games: Mockingjay Part 1 Soundtrack",
    //   image: sound1,
    //   author: "Howard, James Newton",
    //   release: "2014",
    //   genre: "",
    //   language: "",
    //   location: "Floor 3 YA COL",
    //   central: true,
    //   shawnessy: false,
    //   southwood: false,
    //   louise: false,
    //   seton: false,
    //   copies: "3",
    // },
  ];

  return (
    <div>
     <div className="resultTwoHomeHeaderLoggedIn"> <HomeHeaderLoggedin /></div>
      <SearchBar />
      <div class="section-result">
        <div class="search-result-container">
          <div class="refine-results-container">
            <p class="results-shown">Results 1-5 of 312</p>
            <div class="refine-results-options">
              <p class="refine-results-options-title">Refine Results</p>
              <ul>
                <DropdownFilter
                  title="&#43; Author"
                  options={[
                    { text: "Alphabetical", link: "#" },
                    { text: "Popular", link: "#" },
                  ]}
                />
                <DropdownFilter
                  title="&#43; Date"
                  options={[
                    { text: "This Year", link: "#" },
                    { text: "Last 2 Years", link: "#" },
                    { text: "Last 5 Years", link: "#" },
                    { text: "More Than 5 Years", link: "#" },
                  ]}
                />
                <DropdownFilter
                  title="&#43; Demographic"
                  options={[
                    { text: "Children", link: "#" },
                    { text: "Youth", link: "#" },
                    { text: "Young-Adult", link: "#" },
                    { text: "Adult", link: "#" },
                  ]}
                />
                <DropdownFilter
                  title="&#43; Format"
                  options={[
                    { text: "Book", link: "#" },
                    { text: "eBook", link: "#" },
                    { text: "Audiobook", link: "#" },
                    { text: "eAudiobook", link: "#" },
                  ]}
                />
                <DropdownFilter
                  title="&#43; Genre"
                  options={[
                    { text: "Action", link: "#" },
                    { text: "Drama", link: "#" },
                    { text: "Fantasy", link: "#" },
                    { text: "Non-Fiction", link: "#" },
                  ]}
                />
                {/* <DropdownFilter title="&#43; ISBN" options={[]} /> */}
                <DropdownFilter
                  title="&#43; Language"
                  options={[
                    { text: "English", link: "#" },
                    { text: "French", link: "#" },
                    { text: "Japanese", link: "#" },
                  ]}
                />
                <DropdownFilter
                  title="&#43; Rating"
                  options={[
                    { text: "1 Star", link: "#" },
                    { text: "2 Star", link: "#" },
                    { text: "3 Star", link: "#" },
                    { text: "4 Star", link: "#" },
                    { text: "5 Star", link: "#" },
                  ]}
                />
                {/* <DropdownFilter title="&#43; Year" options={[]} /> */}
              </ul>
            </div>
          </div>
          <div class="results-shown-container">
            {items.map((item) => (
              <ResultItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <BackFooter />
    </div>
  );
}

export default resultThree;
