import React from 'react'
import {  useGetTodo } from '../../../hooks/useTodo';
import TodoFormRow from './EditTodoFormRow';
function EditTodoForm() {
    const {data:todos, isLoading, error} = useGetTodo();
    // const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
    // const mutation = useEditTodo();

    // const onSubmit = (todoId, formData) => {
    //     console.log('Form submitted with id:', todoId, 'and data:', `task-${todoId}` ,formData);
    //     // mutation.mutate( 
    //     //     {id:todoId,data:formData},
    //     //     {
    //     //         onSuccess:()=>{
    //     //             console.log('todo edited')
    //     //             reset({ task: formData.task} );
    //     //         },
    //     //         onError:()=>{
    //     //             console.log("error editing todo", error)
    //     //         }
    //     //     })
    //     }

    
    if (isLoading) return <p>Loading todos...</p>;
    if (error) return <p className='text-red-500'>Error: {error.message}</p>;
    
    return (
        <div className='p-2 border rounded m-5 text-center  '>
            <h1> Edit </h1>
              {todos?.map((todo,index) =>( 
                <TodoFormRow todo={todo} index={index} />

                ))}

        </div>
    )
}

export default EditTodoForm
