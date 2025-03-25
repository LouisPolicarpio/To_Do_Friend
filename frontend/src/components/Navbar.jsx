import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-center items-center w-full h-13 px-5 bg-amber-100'>
      {/* logo */}
      <div className='flex-1 bg-amber-300 w-10'  >
        <Link to="/">
          <h1>
            home
          </h1>
        </Link>
      </div>

      <div className='flex-1 bg-amber-600 w-10' >
        <Link to="/add">
          <h1>
            add
          </h1>
        </Link>
      </div>


    </div>
  )
}

export default Navbar