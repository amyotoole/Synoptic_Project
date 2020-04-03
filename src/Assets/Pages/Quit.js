import React from "react";

const Quit = ({ score }) => (
  <svg xmlns="http://www.w3.org/2000/svg">
    <rect className="done-banner" />
    <text className="done-text">Well Done</text>
    <rect className="score-banner" />
    <text className="bannerSmall-text">Score: {score}</text>
  </svg>
);
export default Quit;
