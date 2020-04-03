import React from "react";
const Maze = ({ x, y, width, height, fill }, index) => (
  <rect x={x} y={y} width={width} height={height} fill={fill} key={index} />
);
export default Maze;
