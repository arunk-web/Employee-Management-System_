import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex mt-10 justify-between gap-5  screen'>
        <div className='p-10 rounded-xl w-[45%] py-6 px-9 bg-red-400 ' >
        <h2 className='text-3xl font-semibold text-white'>4</h2>
        <h3 className='text-xl font-medium text-white'>New Task</h3>
        </div>

        <div className='p-10 rounded-xl w-[45%] py-6 px-9 bg-blue-400 ' >
        <h2 className='text-3xl font-semibold text-white'>2</h2>
        <h3 className='text-xl font-medium text-white'>Completed Task</h3>
        </div>

        <div className='p-10 rounded-xl w-[45%] py-6 px-9 bg-green-400 ' >
        <h2 className='text-3xl font-semibold text-white'>3</h2>
        <h3 className='text-xl font-medium text-white'>Accepted Task</h3>
        </div>

        <div className='p-10 rounded-xl w-[45%] py-6 px-9 bg-yellow-400 ' >
        <h2 className='text-3xl font-semibold text-white'>0</h2>
        <h3 className='text-xl font-medium text-white'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers;
