
import React from 'react'
import { useGetPoints } from '../hooks/usePoints'
import { useEffect,useState} from 'react';


function DisplayPoints() {
  const { data, isLoading, isError,error } = useGetPoints(); 
  const UpdatePeriod = 60000 //1min in ms 
  const [score, setScore] = useState(0)
  const scoreDecrease = 100

  useEffect(()=>{
    if(data){
        setScore(data.score);
    }
  },[data]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setScore((prevScore) => prevScore - scoreDecrease);
    }, UpdatePeriod);

    return () =>  clearInterval(interval)
  }), [scoreDecrease];

    // Handle loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className='items-center text-center'>
        <h1>score</h1>
        <h1> {score}</h1>
    </div>
  )
}

export default DisplayPoints
