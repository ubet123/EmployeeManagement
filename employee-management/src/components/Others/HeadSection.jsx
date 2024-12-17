import React from 'react'

const HeadSection = ({data}) => {
  return (
    <div className='flex items-end justify-between mx-20 mt-12 '>
        <h1 className='text-2xl font-medium text-white'>Hello <br/><span className='text-3xl text-white font-semibold'>{data.name} 👋</span></h1>
        <button className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-md hover:bg-red-800'>Log Out</button>


    </div>
  )
}

export default HeadSection