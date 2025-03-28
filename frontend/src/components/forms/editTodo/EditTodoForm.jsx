import React from 'react'
import {  useGetTodo } from '../../../hooks/useTodo';
import TodoFormRow from './EditTodoFormRow';
function EditTodoForm() {
    const {data:todos, isLoading, error} = useGetTodo();

    
    if (isLoading) return <p>Loading todos...</p>;
    if (error) return <p className='text-red-500'>Error: {error.message}</p>;
    
    return (
        <div className='p-2 border rounded m-5 text-center  '>
            <h1> Edit </h1>
              {todos?.map((todo,index) =>( 
                <TodoFormRow key={todo.id} todo={todo} index={index} />

                ))}

        </div>
    )
}

export default EditTodoForm
