import React from "react";

const Lose = ({ score = 0, newGameHandler }) => (
  <g>
    <svg xmlns="http://www.w3.org/2000/svg">
      <text className="game-over">Game Over</text>
    </svg>
  </g>
);
export default Lose;
