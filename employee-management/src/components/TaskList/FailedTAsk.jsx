import React from 'react'

const FailedTAsk = () => {
  return (
    <div className=' hover:bg-red-500 hover:shadow-md hover:shadow-black cursor-pointer    h-full w-[300px] p-5 bg-red-400 rounded-xl flex-shrink-0'>
        
        <div className='flex justify-between  items-center'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>Category</h3>
        <h4 className='text-sm'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a project</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, iusto.

        </p>
        <div className='flex justify-between mt-7 '>
            <button className='bg-red-900  px-4 text-sm rounded-xl py-2  cursor-not-allowed'>Failed</button>
            
        </div>
        </div> 
  )
}

export default FailedTAsk