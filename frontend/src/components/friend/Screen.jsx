import React, { useEffect, useState } from 'react';
import Cell from './Cell';
import { character } from '../../utils/friend/body';

function Screen({ score }) {
  const [grid, setGrid] = useState(Array.from({ length: 16 }, () => Array(16).fill(0)));
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGrid(character(frame, score));

      setFrame(prev => (prev === 10 ? 0 : prev + 1));
    }, 150);

    return () => clearInterval(interval);
  }, [frame,score]); 
  return (
    <div className='w-full h-full grid grid-cols-16 p-1.5'>
      {grid.flat().map((val, id) => (
        <Cell key={id} value={val} />
      ))}
    </div>
  );
}

export default Screen;
