import React from 'react'

function Modal({Content, close}) {
    const handleClickOut= (e)=>{
        if (e.target === e.currentTarget) {
            close();
        }
    }

    return (
        <div className="absolute inset-0 bg-slate-500/50 flex justify-center items-center z-5 " onClick={handleClickOut}>
            <div className="bg-white rounded-lg shadow-lg relative z-20 w-4/5 items-center">
                <div>
                    <Content className="w-full"/>
                </div>

                <div>
                    <button onClick={close} className="absolute top-2 right-2 text-white bg-gray-700 rounded-full p-1"></button>
                </div>
            </div>
        </div>
            

    )
}

export default Modal
