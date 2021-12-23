import React from "react";
import "./search.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form">
        <input
          type="search"
          placeholder="Enter a city"
          id="city-search"
          autocomplete="off"
        />
        <input type="submit" value="search" className="searchButton" />
      </form>
    </div>
  );
}
