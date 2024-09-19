import React from 'react'
import { FaLinkedinIn, FaGithub, FaYoutube   } from "react-icons/fa6";


function Contactme() {
  return (
    <div className='w-full h-[35%] max-lg:h-fit flex justify-between px-5 underline max-lg:flex-col-reverse'>
        <div className='flex items-end  gap-x-2 mb-5 text-[30px] font-bold max-lg:justify-center'>
            <p className='hover:text-red-700 transition-all duration-300 cursor-pointer'>LinkedIn</p>
            <p className='hover:text-red-700 transition-all duration-300 cursor-pointer'>Github</p>
            <p className='hover:text-red-700 transition-all duration-300 cursor-pointer'>Youtube</p>
        </div>
        <div className='text-[150px] font-bold flex flex-col justify-end text-end max-sm:text-[80px]'>
            <div className='lg:-mt-10'>Contact</div>
            <div className='-mt-9 lg:-mt-20'>Me<span className='text-red-700'>.</span></div>
        </div>
    </div>
  )
}

export default Contactme
