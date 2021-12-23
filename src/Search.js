import React, { useState } from "react";
import "./search.css";

export default function Search() {
  const [city, setCity] = useState("Brisbane");
  function handleSubmit(event) {
    event.preventDefault();
    alert(`${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form id="search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city"
          id="city-search"
          autocomplete="off"
          onChange={updateCity}
        />
        <input type="submit" value="search" className="searchButton" />
      </form>
    </div>
  );
}
