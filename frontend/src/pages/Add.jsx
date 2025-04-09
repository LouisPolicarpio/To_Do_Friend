import React from 'react'
import AddTodoForm from '../components/forms/AddTodoForm'
import DisplayPoints from '../components/DisplayScore'

function Add() {
  return (
    <div>
        <div  className='flex justify-center p-10' >
            <AddTodoForm />
        </div>

        <DisplayPoints/>
    </div>
  )
}

export default Add