import React from 'react'
import { useGetTodo } from '../../../hooks/useTodo'
import CheckTodoFormRow from './CheckTodoFormRow';


function CheckTodoForm() {
    const {data:todos, isLoading, error} = useGetTodo();

    if (isLoading) return <p>Loading todos...</p>;
    if (error) return <p className='text-red-500'>Error: {error.message}</p>;
    
    return (
        <div className='p-2 border rounded m-5 text-center  '>
            {todos?.map((todo,index) =>(
                <CheckTodoFormRow key={todo.id} index={index+1} todo={todo}/>
            ))}
        </div>
    )
}

export default CheckTodoForm
