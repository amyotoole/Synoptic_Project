import React from "react";

const Win = ({ nextMazeHandler, level = 0 }) => (
  <g>
    <svg xmlns="http://www.w3.org/2000/svg">
      <rect className="level-comp-banner" />
      <text className="comp-text">Level {level + 1} Completed</text>
      <rect className="next-level-banner" />
      <text className="bannerSmall-text">Next Level</text>
      <rect onClick={nextMazeHandler} className="hidden" />
    </svg>
  </g>
);
export default Win;
