import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {HomeIcon} from '@heroicons/react/24/outline'

function Navbar() {
    const location = useLocation(); // Get the current route
    const isActive = (path) => location.pathname === path ? "inset-shadow-sm inset-shadow-slate-950/50": "";

  return (

    
    <div className="relative z-10 shadow-sm shadow-slate-950/40 h-10 bg-gradient-to-b  from-indigo-950 to-blue-800 transition-colors duration-500 ">
      <div className=" flex text-xl justify-between font-bold    h-full px-5  text-white">
          <div className={`basis-1/5 flex text-left h-full items-center justify-center ${isActive("/")}  `} >
            <Link to="/"  >
                <HomeIcon className='w-6 h-6  '/>
            </Link>
          </div>


          <div className="flex basis-2/5 h-full text-right ">
            <div className={`basis-2/5 flex h-full items-center justify-center ${isActive("/add")}`} >
              <Link to="/add" >
                <h1>
                  Add
                </h1>
              </Link>
            </div>


            <div className={`basis-2/5 flex h-full items-center justify-center ${isActive("/edit")}`} >
              <Link to="/edit" >
                <h1>
                  Edit
                </h1>
              </Link>
            </div>
          </div>


      </div>
    </div>
  )
}

export default Navbar