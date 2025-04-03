
import React from 'react'
import { useGetPoints } from '../hooks/usePoints'

function DisplayPoints() {
  const { data, isLoading, isError,error } = useGetPoints(); 

    // Handle loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className='items-center text-center'>
        <h1>score</h1>
        <h1> {data?.score}</h1>
    </div>
  )
}

export default DisplayPoints
