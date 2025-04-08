import React from 'react'

function Cell({value})  {

  return (
    <div className={`border transition-colors duration-250 ease-in-out border-neutral-400/10 rounded-2xl ${ value === 1 ? "bg-slate-950/50" : ""} `}>

    </div>
  )
}

export default Cell
