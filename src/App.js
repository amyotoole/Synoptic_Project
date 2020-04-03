import React from 'react';
import './App.css';
import mazes from "./Assets/Components/Mazes.json";
import {Title, Start, Maze, Lose, Quit, Win, Wrapper} from "./Assets/Pages/index";
import {withRouter} from "react-router-dom";

//Constants
//Timer array for countdown clock
const MAX_TIMERS =[500, 1500, 2500, 3500, 6000]

const App = () => {
//States
const [currentMaze, setCurrentMaze]= React.useState(0);
const [timer, setTimer] = React.useState(MAX_TIMERS[0]);
const [score, setScore] = React.useState(0); 


React.useEffect(() =>{
  if (window.location.hash === '#/maze')
    setTimeout(tick, 100); 
},[timer]);
// Starts the countdown timer if maze screen is shown and stops it if the loser page is shown
const tick =() =>{
  if(window.location.hash === "#/maze"){
    setTimer(timer -10); 
    if(timer <=0){
      setTimer(0);
      window.location.hash = "#/loser"
    }
  }
};
/*Determines if the mouse is within the maze boundaries 
Checks if mouse has reached the last rectangle from the maze array */
const handleMouseMove = event => {
  if (window.location.hash === "#/maze"){
    const domMaze = document.getElementById("Maze");
    const offsetLeft =domMaze.offsetLeft; 
    const offsetTop = domMaze.offsetTop; 
    const mouseX = event.clientX; 
    const mouseY = event.clientY; 
    let outsideMaze = true; 
    let winner = false; 
    let lastRect = mazes[currentMaze].length -1; 
  for ( let i=0; i < mazes[currentMaze].length; i++){
    if(
      mouseX >= mazes[currentMaze][i].x +offsetTop &&
      mouseX<=mazes[currentMaze][i].x + mazes[currentMaze][i].width + offsetLeft &&
      mouseY >= mazes[currentMaze][i].y +offsetTop &&
      mouseY <= mazes[currentMaze][i].y +mazes[currentMaze][i].height + offsetTop
    ) {
      outsideMaze = false;
    } else if(
      mouseX >= mazes[currentMaze][lastRect].x +offsetLeft &&
      mouseX <=mazes[currentMaze][lastRect].x + mazes[currentMaze][lastRect].width + offsetLeft &&
      mouseY >= mazes[currentMaze][lastRect].y + offsetTop &&
      mouseY<= mazes[currentMaze][lastRect].y + mazes[currentMaze][lastRect].height +offsetTop
    ){
      outsideMaze= false; 
      winner = true; 
    }
  }
  if (outsideMaze === true){
    window.location.hash ="#/loser";
    setTimer(0);
  }
  if(winner===true){
    setScore(score+timer);
    window.location.hash = currentMaze <4 ? "#/winner" : "#/completed";
  }
  }
};
//Used to load the next maze/timer within maze/timer arrays & load Maze screen
const loadNextMaze =() =>{
  setTimer(MAX_TIMERS[currentMaze +1]); 
  setCurrentMaze(currentMaze +1); 
  window.location.hash = "#/maze";
};
//Resets the game and loads Title screen
const newGameHandler =() =>{
  setTimer(MAX_TIMERS[0]); 
  setScore(0); 
  setCurrentMaze(0);
  window.location.hash = "";
};
//Loads Maze screen and starts timer
const startMaze = () =>{
  window.location.hash = "#/maze"; 
  tick();
};
//Loads Start screen
const start = () => {
  window.location.hash = "#/start";
};
//Switch case used to determine which screen needs to be loaded
  return (
   <Wrapper {... {newGameHandler, handleMouseMove, timer, score}}>
      {(hash =>{
        switch (hash){
          case "#/completed":
          case "#/quit":
            return <Quit {...{score}}/>; 
          case "#/start":
            return <Start onClickHandler = {startMaze}/>; 
          case "#/maze":
            return mazes[currentMaze].map((rect, index)=> (
              <Maze {...rect} index = {index}/>
            ));
          case "#/winner":
            return <Win  level={currentMaze} nextMazeHandler = {loadNextMaze}/>;
          case "#/loser":
            return <Lose {...{score, newGameHandler}}/>
          default:
            return <Title startHandler = {start}/>
        }
      })(window.location.hash)};
   </Wrapper>
  );
};
export default withRouter(App);
