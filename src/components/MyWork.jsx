import React from 'react'

function MyWork() {
  return (
    <div className='w-full h-[35%] max-lg:h-fit flex justify-between max-lg:flex-col '>
        <div className='w-[40%] max-lg:w-full h-full text-[150px] max-sm:text-[100px] font-bold flex flex-col justify-end '>
            <div className='lg:-mt-10'>My</div>
            <div className='-mt-12 lg:-mt-20'>Work<span className='text-red-700'>.</span></div>
        </div>
        <div className='w-[60%] max-lg:w-full h-full flex flex-col text-3xl font-bold justify-end gap-y-2'>
            <div className='hover:underline duration-300 cursor-pointer'>Full Stack Projects</div>
            <div className='hover:underline duration-300 cursor-pointer'>Data Analysis</div>
            <div className='hover:underline duration-300 cursor-pointer'>Machine Learning Projects</div>
            <div className='hover:underline duration-300 cursor-pointer'>Deep Learning Projects</div>
            <div className='w-full h-2 bg__dark-blue rounded-full mt-6' />
        </div>
    </div>
  )
}

export default MyWork
