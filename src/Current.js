import React from "react";
import "./current.css";

export default function Current() {
  return (
    <div>
      <h1 className="Current">
        <span className="currentCity">Brisbane</span>
      </h1>
      <p className="tempSentence">
        It is currently <span className="currentTemp">25</span>°C
      </p>
    </div>
  );
}
