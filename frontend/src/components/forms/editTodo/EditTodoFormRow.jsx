import React from 'react'
import { useForm } from 'react-hook-form';
import { useEditTodo } from '../../../hooks/useTodo';


function TodoFormRow({todo,  index}) {
    const { register, handleSubmit, formState: { errors  }, reset } = useForm();
    const mutation = useEditTodo();

    const onSubmit =(data)=>{
        console.log(data.task)
        mutation.mutate({id:todo.id, data:data.task},{
            onSuccess:() =>{
                console.log('todo created')
                reset(); // Clear the form after submission
            },
            onError: (error) => {
                console.error("Error creating todo:", error);
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
                    <button type='button' className='border rounded p-1  m-1 flex-1/15'> delete </button>
                    {errors['task']  &&  <div className='text-red-500 ' >{errors.task.message}</div>}
                
                </div>  
            </form>
        </div>
    )
}

export default TodoFormRow
