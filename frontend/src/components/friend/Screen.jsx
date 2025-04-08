import React, { useEffect, useState } from 'react'
import Cell from './cell';
import { character } from '../../utils/character';

function Screen() {

    
  const [grid, setGrid] = useState(Array.from({ length: 16 }, () => Array(16).fill(0)));
  const [frame, setFrame] = useState(0);

    useEffect(()=>{
        const interval = setInterval(() =>{
            setGrid( character(frame))
            setFrame(PrevFrame =>{ 
              if(PrevFrame === 10){
                return 0
              }else{
                return PrevFrame + 1
              }
            });

        }, 150);

        return () =>  clearInterval(interval)

    }

        
    ,[frame]);


    return (
    <div className=' w-full h-full grid grid-cols-16 p-1.5  '>
        {grid.flat().map((val,id)=>(
            <Cell key={id} value={val}/>
        ))}
        
    </div>
  )
}

export default Screen
