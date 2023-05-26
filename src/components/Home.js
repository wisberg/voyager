import React, { useState, useEffect } from "react";
import "../style/home.css";
import { Link, useNavigate } from "react-router-dom";
import Voyager_Logo_White from "../assets/Voyager_Logo_White.png";

const Home = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [searchOption, setSearchOption] = useState("web");

  useEffect(() => {
    console.log(searchOption, "from useEffect");
    console.log(query);
    if (query === "") {
      return;
    }
    if (searchOption === "web") {
      //navigate to searchWeb component with Query
      navigate(`/search-web/${query}`);
    }
    if (searchOption === "images") {
      //navigate to searchImage component with Query
      navigate(`/search-images/${query}`);
    }
    if (searchOption === "news") {
      //navigate to searchNews component with Query
      navigate(`/search-news/${query}`);
    }
  }, [query]);

  function handleSubmit(e) {
    e.preventDefault();
    let tempString = e.target.elements.search.value;
    // tempString = tempString.replace(/\s/g, "");
    setQuery(tempString);
  }

  const handleOnClick = (e) => {
    setSearchOption(e.target.value);
    console.log("Hi from onClick");
    console.log(searchOption, "from onClick");
  };

  return (
    <div className="homeContainer">
      <img src={Voyager_Logo_White} className="landingLogo" />
      <p className="searchDescriptor">{searchOption}</p>
      <form className="searchWebForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          className="searchField"
        />
        <button className="searchButton" type="submit">
          Search
        </button>
      </form>
      {searchOption === "web" ? (
        <div className="searchOptions">
          <button
            className="optionsButton"
            value="images"
            onClick={handleOnClick}
          >
            Images
          </button>
          <button
            className="optionsButton"
            value="news"
            onClick={handleOnClick}
          >
            News
          </button>
        </div>
      ) : searchOption === "images" ? (
        <div className="searchOptions">
          <button className="optionsButton" value="web" onClick={handleOnClick}>
            Web
          </button>
          <button
            className="optionsButton"
            value="news"
            onClick={handleOnClick}
          >
            News
          </button>
        </div>
      ) : (
        <div className="searchOptions">
          <button className="optionsButton" value="web" onClick={handleOnClick}>
            Web
          </button>
          <button
            className="optionsButton"
            value="images"
            onClick={handleOnClick}
          >
            Images
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
