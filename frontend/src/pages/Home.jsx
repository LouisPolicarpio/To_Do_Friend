import React from 'react'
import { useEffect, useState } from "react";

import { updateBackground } from '../utils/timedBackground';
import CheckTodoForm from '../components/forms/checkTodo/checkTodoForm';
import AddTodoForm from '../components/forms/AddTodoForm';

import {PlusCircleIcon} from '@heroicons/react/24/outline'
import Modal from '../components/Modal';
import DisplayPoints from '../components/DisplayPoints';
import Screen from '../components/friend/Screen';

function Home() {
  const [timedBg, setTimedBg] = useState(""); 

  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(()=>{
    const refreshBackground = () => setTimedBg(updateBackground());    
    refreshBackground();
    const interval = setInterval( refreshBackground, 3600000); // Update every hour
    return () => clearInterval(interval); // Cleanup on unmount
  },[])


  return (
    <div className={`flex  min-h-full  bg-gradient-to-t   from-cyan-100 to-fuchsia-100 transition-colors duration-500 `}>
      
      <div>
        {showModal && <Modal Content={AddTodoForm} close={closeModal} className="flex w-4/5 h-max-100"/>}
      </div>

      <div className='flex flex-auto   p-10 w-1/2'>
        <div className=' flex  flex-col   w-full items-center border rounded py-3'>
          <CheckTodoForm className=" w-full"/>
          <button onClick={openModal}>
            <PlusCircleIcon className='w-6 h-6 text-black'/>
          </button>
        </div>
      </div>
      

     


      <div className='flex  flex-col  items-center justify-center  w-1/2 p-10'>
        
        <div className={`flex w-4/5 aspect-square border rounded-2xl  bg-gradient-to-t   from-emerald-700 ${timedBg} p-1`}>
          <Screen />
        </div>

        <div className='flex w-full flex-auto p-10'>
            <div className='border  h-20 rounded w-full items-center'>
              <DisplayPoints />
            </div>
        </div>


      </div>

    </div>
  )
}



export default Home