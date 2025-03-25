import React from 'react'
import { useEffect, useState } from "react";

import { updateBackground } from '../utils/timedBackground';

function Home() {
  const [timedBg, setTimedBg] = useState(""); 



  useEffect(()=>{
    const refreshBackground = () => setTimedBg(updateBackground());    
    refreshBackground();
    const interval = setInterval( refreshBackground, 3600000); // Update every hour
    return () => clearInterval(interval); // Cleanup on unmount
  },[])


  return (
    <div className={`min-h-full bg-gradient-to-t   from-green-200 ${timedBg}   transition-colors duration-500`}>
      <div className='p-10'>
        Home

      </div>

    </div>
  )
}

export default Home