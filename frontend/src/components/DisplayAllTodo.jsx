import React from 'react'
import { useGetTodo } from '../hooks/useTodo'

function DisplayAllTodo() {
    const {data:todos, isLoading, error} = useGetTodo();
    console.log("Todos Data:", todos); // Debugging line
    if (isLoading) return <p>Loading todos...</p>;
    if (error) return <p className='text-red-500'>Error: {error.message}</p>;
    
    return (
        <div>
            <table className='table-auto border rounded'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>task</th>
                    </tr>                    
                </thead>

                <tbody>
                    {todos?.map((todo,index) =>(
                        <tr key={todo.id}>
                            <td>{index+1}</td>
                            <td>{todo.task}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default DisplayAllTodo
