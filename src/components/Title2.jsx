import React from 'react'


function Title2({line1, line2}) {
  return (
    <div className='text-[95px] max-xl:text-[70px] max-lg:text-[70px] max-md:text-[60px] max-sm:text-[50px] text-end '>
      <div>{line1}</div>
      <div className='-mt-16 max-lg:-mt-12 max-xl:-mt-10'>{line2}</div>
    </div>
  )
  
}

export default Title2
