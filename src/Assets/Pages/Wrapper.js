import React from "react";
import { withRouter } from "react-router-dom";

const Wrapper = ({
  children,
  handleMouseMove,
  newGameHandler,
  currentMaze = 0,
  timer,
  time,
  score
}) => {
  //Used to display time remaining in seconds
  time = Math.round(timer / 100, 2);
  return (
    <div className="App">
      <div id="Maze" onMouseMove={handleMouseMove}>
        <svg width="700" height="540">
          {children}
        </svg>{" "}
      </div>
      <div>
        <div className="score-text">
          <h1>Time Left: {time}s</h1>
          <h1>Total Score: {score}</h1>

          <a
            disabled={window.location.hash === "#/"}
            href="#/"
            onClick={newGameHandler}
            className="button"
          >
            {" "}
            New Game{" "}
          </a>

          <a className="button" href="#quit">
            Quit Game
          </a>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Wrapper);
