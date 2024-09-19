import React from 'react'

function Title({title}) {
  return (
    <div className='h-[150px] lg:max-w-[90%] max-lg:h-[160px] '>
        <h1 className='text-[90px] max-xl:text-[130px] max-lg:text-[110px] max-md:text-[90px] max-sm:text-[70px] w-fit border-b-2 border-dashed border-gray-400'>{title}</h1>
    </div>
  )
}

export default Title
