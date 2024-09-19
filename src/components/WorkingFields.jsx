import React from 'react'
import { FaBagShopping } from "react-icons/fa6";

function WorkingFields() {
  return (
    <div className='w-full max-lg:w-1/2 max-sm:w-full font-IBM-Mono text__dark-blue flex flex-col gap-y-1 '>
        <div className='flex items-center gap-x-3 mb-4'> 
            < FaBagShopping className='text__dark-blue text-2xl' />
            <h1 className='text__dark-blue font-bold'>Working Fields</h1>
        </div>
        <p>
            <span className='font-bold'>- </span>
             Web Development
        </p>
        <p>
            <span className='font-bold'>- </span>
             Mobile Development
        </p>
        <p>
            <span className='font-bold'>- </span>
                UI/UX Design
        </p>
        <p>
            <span className='font-bold'>- </span>
             Natural Language Processing
        </p>
        <p>
            <span className='font-bold'>- </span>
             Cloud Computing
        </p>
      
    </div>
  )
}

export default WorkingFields
