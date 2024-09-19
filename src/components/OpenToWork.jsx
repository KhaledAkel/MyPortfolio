import React from 'react'
import { RiRadioButtonLine } from "react-icons/ri";

function OpenToWork() {
  return (
    <div className='flex items-center h-full gap-x-1'>
      <RiRadioButtonLine className='text-green-500 text-2xl max-lg:text-xl'/>
      <p className='text__dark-blue text-xl max-lg:text-lg '>Open to work</p>
    </div>

  )
}

export default OpenToWork
