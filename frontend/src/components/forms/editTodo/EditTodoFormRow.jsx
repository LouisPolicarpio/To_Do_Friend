import React from 'react'
import { useForm } from 'react-hook-form';
import { useDeleteTodo, useEditTodo } from '../../../hooks/useTodo';


function TodoFormRow({todo,  index}) {
    const { register, handleSubmit, formState: { errors  }, reset } = useForm();
    const editMutation = useEditTodo();
    const delMutation = useDeleteTodo();

    const onSubmit =(data)=>{
        console.log(data.task)
        editMutation.mutate({id:todo.id, data:{task:data.task}},{
            onSuccess:() =>{
                console.log('todo created')
                reset(); // Clear the form after submission
            },
            onError: (error) => {
                console.error("Error creating todo:", error);
            },
        });
    }

    const onDelete =()=>{
        console.log('delete : ' + todo.id)
        delMutation.mutate(todo.id,{
            onSuccess:() =>{
                console.log('todo created')
                reset(); // Clear the form after submission
            },
            onError: (error) => {
                console.error("Error deleting todo:", error);
            },
        });
    }

    return (
        <div>
            <form  onSubmit={handleSubmit(onSubmit)}  key={todo.id} >
                <div className='flex w-full items-center text- justify-center p-1 border-t'>
                    
                    <label className='flex-1/15 m-1'>
                        {index +1 }
                    </label>
                    
                    <input 
                        type='text' 
                        defaultValue={todo.task} 
                        className='border rounded p-1  m-1 flex-12/15'
                        {...register(
                            'task',{
                                required:"Task cannot be blank",
                            }
                        )}
                    />     

                    <button type='submit' className='border rounded p-1  m-1 flex-1/15'> update </button>
                    <button type='button' onClick={onDelete} className='border rounded p-1  m-1 flex-1/15'> delete </button>
                    {errors['task']  &&  <div className='text-red-500 ' >{errors.task.message}</div>}
                
                </div>  
            </form>
        </div>
    )
}

export default TodoFormRow
