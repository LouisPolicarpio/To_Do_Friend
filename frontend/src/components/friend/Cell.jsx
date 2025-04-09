import React from 'react'

function Cell({value})  {
  const baseOpacity = 0.5;
  const maxOpacity = 1;
  const multiplier = 0.2;
  
  let opacity = 0;
  if (value > 0 ) {
    opacity = Math.min(baseOpacity + (  multiplier * (value - 1)), maxOpacity);
  }

  return (
    <div
      className={`border transition-colors duration-250 ease-in-out border-neutral-400/10 rounded-2xl`}
      style={{ backgroundColor: `rgba(15, 23, 42, ${opacity})` }}
    />
  )
}

export default Cell
