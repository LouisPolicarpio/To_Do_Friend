import React from 'react'
import {useForm} from 'react-hook-form'
import { useCreateTodo } from '../../hooks/useTodo';
import { toast, ToastContainer, Bounce   } from 'react-toastify';

function AddTodoForm() {
    const {register,handleSubmit, formState:{errors,isSubmitting},reset} = useForm();
    const mutation = useCreateTodo(); // Using the mutation
    
    const onSubmit = (data) =>{
            console.log('Form submitted with data:', data);  // Check if this is logged
            mutation.mutate(data,{
            onSuccess:() =>{
                console.log('todo created')
                toast.success("Todo created successfully!")
                reset(); // Clear the form after submission
            },
            onError: (error) => {
                console.error("Error creating todo:", error);
            },
        });

    };

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}  className="w-full h-full  p-4  flex   justify-center items-center space-y-1"  >
                <div className='flex flex-col items-center justify-center  h-full'>
                    <div className='flex space-x-2 items-center' >
                        <label>
                            Task :
                        </label>
                        <input className='border rounded p-1 '
                            {...register("task",{
                                required: "Please Enter A Task",
                            })} 
                            id='task' 
                            type='text' 
                            placeholder='Create Task'
                        />
                    </div>
                    
                    {errors.task  &&  <div className='text-red-500 ' >{errors.task.message}</div>}

                </div>
                
                
                <button disabled={isSubmitting} type='submit' className='border rounded p-2 m-2 h-full disabled:bg-gray-50' > 
                    {isSubmitting ? "Loading..." : "Submit"}    
                </button>
            </form>
            <ToastContainer
                position="top-center"
                autoClose={3}
                limit={1}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
    </>

    );
    
}

export default AddTodoForm