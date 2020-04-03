import React from "react";

const Start = ({ currentMaze = 0, onClickHandler }) => (
  <g>
    <svg xmlns="http://www.w3.org/2000/svg">
      <rect className="level-banner" />
      <text className="bannerLarge-text">Level {currentMaze + 1}</text>
      <rect className="load-banner" />
      <text className="bannerSmall-text">Let's Go</text>
      <rect onClick={onClickHandler} className="hidden" />
    </svg>
  </g>
);
export default Start;
