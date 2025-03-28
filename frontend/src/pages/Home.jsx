import React from 'react'
import { useEffect, useState } from "react";

import { updateBackground } from '../utils/timedBackground';
import DisplayAllTodo from '../components/DisplayAllTodo';
import EditTodoForm from '../components/forms/editTodo/EditTodoForm'
import CheckTodoForm from '../components/forms/checkTodo/checkTodoForm';

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
        <DisplayAllTodo/>
        <CheckTodoForm/>
      </div>
    </div>
  )
}



export default Home