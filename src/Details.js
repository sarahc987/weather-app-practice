import React from "react";
import "./details.css";

export default function Details() {
  return (
    <div className="Details tempDetails">
      <div className="currentWeather">Few Clouds</div>
      Wind: <span id="windSpeed">5km/h</span> | Humidity:
      <span id="humidity">50% </span>
    </div>
  );
}
