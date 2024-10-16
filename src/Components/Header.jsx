import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from "uuid"

const Header = ({ Tasks, setTasks }) => {

    const [todo, settodo] = useState({
        id: '',
        title: '',
    })


    const handlesubmit = (e) => {
        e.preventDefault();
        if (todo.title.length < 1) {
            toast.error("Please Enter Something")
        }
        else {

            setTasks([...Tasks, todo])
            localStorage.setItem('todo', JSON.stringify([...Tasks, todo]))
            toast.success("Todo Created")
        }

    }

    return (
        <>
            <form onSubmit={handlesubmit} className='w-1/2'>
                <div className='flex justify-center gap-2 '>

                    <input className='border-2 mt-4 p-4 rounded-md outline-none w-full'
                        placeholder="Enter a title..."
                        type="text"
                        onChange={(e) => { settodo({ ...todo, id: uuidv4(), title: e.target.value }) }} />
                    <button className=' rounded-md bg-white text-blue-600 border-blue-600 border-2  hover:bg-blue-600 hover:text-white cursor-pointer w-40'>Add</button>
                </div>
            </form>
        </>
    )
}

export default Header
