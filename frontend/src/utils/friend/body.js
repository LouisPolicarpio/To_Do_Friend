import { frames } from "../../../public/characterBodyFrames";
import { state } from "../../../public/characterMouthFrames";

export function character(frame,score) {
  // Make a copy of the grid to avoid mutating the state directly
  const newGrid  = Array.from(Array.from({ length: 16 }, () => Array(16).fill(0)))
    

  let frameData  = frames[frame];

  //if it is a repeated frame 
  if (typeof frameData === "string"){
    frameData = frames[frameData]
  }
  frameData.forEach(([row,col]) => {
    newGrid[row][col] = 1;

  });

  let mouthState = 1;
  if(score <= 0){
    mouthState = 0;
  }else if (score > 0 && score < 3000){
    mouthState = 1;
  }else if (score > 3000){
    mouthState = 2
  }

  console.log(score)

  let mouth = state[mouthState]

  mouth.forEach(([row,col]) => {
    newGrid[row][col] = 1
  })

  return newGrid;
}