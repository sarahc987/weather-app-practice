import React from "react";
import "./current.css";

export default function Current() {
  return (
    <container>
      <row>
        <h1 className="Current col-8">
          <span className="currentCity">Brisbane</span> |
          <span className="currentTemp">25</span>°C
        </h1>
        <h2 className="time col" id="current-time">
          2:15pm
        </h2>
      </row>
    </container>
  );
}
