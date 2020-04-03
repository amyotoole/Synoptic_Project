import React from "react";

const Title = ({ startHandler }) => (
  <svg xmlns="http://www.w3.org/2000/svg">
    <rect x="40" y="35" width="620" height="460" fill="black" />
    <rect x="80" y="70" width="540" height="380" fill="rgba(29, 29, 29)" />
    <rect x="120" y="110" width="460" height="300" fill="black" />
    <rect x="160" y="150" width="380" height="220" fill="rgba(29, 29, 29)" />
    <text x="185" y="280">
      Maze Game
    </text>
    <rect className="start-banner" />
    <text href="#start" className="start-text" onClick={startHandler}>
      Start Game
    </text>
  </svg>
);
export default Title;
