import React from 'react'

const AcceptTask = () => {
  return (
    <div className=' hover:bg-blue-500 hover:shadow-md hover:shadow-black cursor-pointer    h-full w-[300px] p-5 bg-blue-400 rounded-xl flex-shrink-0'>
        
        <div className='flex justify-between  items-center'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>Category</h3>
        <h4 className='text-sm'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a project</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, iusto.

        </p>
        <div className='flex justify-between mt-7 '>
            <button className='bg-green-700 py-1 px-2 text-sm rounded-md border-2 border-slate-950 hover:bg-white hover:text-black'>Mark as Completed</button>
            <button className='bg-red-700 py-1 px-2 text-sm rounded-lg border-2 border-slate-950 hover:bg-white hover:text-black'>Mark as Failed</button>
        </div>
        </div> 
  )
}

export default AcceptTask