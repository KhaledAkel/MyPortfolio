import React from 'react'
import { FaPencil } from "react-icons/fa6";

function PersonalInfo() {
  return (
    <div className='w-full max-lg:w-1/2 max-sm:w-full font-IBM-Mono text__dark-blue flex flex-col gap-y-1'>
        <div className='flex items-center gap-x-3 mb-4'> 
            < FaPencil className='text__dark-blue text-2xl' />
            <h1 className='text__dark-blue font-bold'>Personal Info</h1>
        </div>
        <p>
            <span className='font-bold'>Name: </span>
             Khaled Akel
        </p>
        <p className='w-full'>
            <span className='font-bold'>Date of birth: </span>
             22.12.2003
        </p>
        <p>
            <span className='font-bold'>Email: </span>
             kakel.ieu2021@student.ie.edu
        </p>
        <p>
            <span className='font-bold'>Phone: </span>
             +34 611 54 55 04
        </p>
        <p>
            <span className='font-bold'>City: </span>
             Madrid
        </p>
      
    </div>
  )
}

export default PersonalInfo
