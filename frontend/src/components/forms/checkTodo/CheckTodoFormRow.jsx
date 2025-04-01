import React from 'react'
import { useEditTodo } from '../../../hooks/useTodo'
import { useForm } from 'react-hook-form';
function CheckTodoFormRow({index,todo}) {
    const {  handleSubmit, formState: reset } = useForm();
    const mutation = useEditTodo();

    const onSubmit =()=>{
        mutation.mutate({id:todo.id, data:{complete:true}},{
            onSuccess:()=>{
                console.log('to do complete: ' + todo.id)
                reset();
            },
            onError:(error) =>{
                console.error("error completing todo: ", error)
            },
            
        })
    }

    return (
        <div>
        <form id={todo.id} onSubmit={handleSubmit(onSubmit)}>   
                    <div className={'flex w-full items-center text-center justify-center p-1 border-t'}>
                    <label className='w-1/15'>{index}</label>
                    <label className={`w-13/15 ${todo.complete ? 'line-through': ''}`}>{todo.task}</label>
                    {todo.complete ?(
                        <div className=' m-1 flex-2/15'></div>

                    ):(
                        <button type='submit' className='border rounded p-1  m-1 flex-2/15'> complete </button>
                    )}
                </div>     
        </form>
        </div>
    )
}

export default CheckTodoFormRow
