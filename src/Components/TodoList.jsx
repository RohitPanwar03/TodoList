import React, { useEffect } from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ Tasks, setTasks }) => {

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem('todo')) || [])
    }, [])

    return (
        <div className='w-1/2'>
            <div className='bg-purple-500 flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white'>
                <p className='text-lg'>Todo List</p>
                <div className='ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center'>
                    {Tasks.length}
                </div>
            </div>

            <TodoItem Tasks={Tasks} setTasks={setTasks} />

        </div >
    )
}

export default TodoList
