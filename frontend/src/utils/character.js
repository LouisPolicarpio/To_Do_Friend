import { frames } from "../../public/characterFrames";
import Cell from "../components/friend/cell";
export function character(frame) {
  // Make a copy of the grid to avoid mutating the state directly
  const newGrid  = Array.from(Array.from({ length: 16 }, () => Array(16).fill(0)))

  //bot
  

  let frameData  = frames[frame];

  //if it is a repeated frame 
  if (typeof frameData === "string"){
    frameData = frames[frameData]
  }
  frameData.forEach(([row,col]) => {
      newGrid[row][col] = 1;

    });
  

  return newGrid;
}