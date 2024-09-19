import React from 'react'
import { FaLinkedinIn, FaGithub, FaYoutube   } from "react-icons/fa6";


function Contactme() {
  return (
    <div className='w-full h-[35%] max-lg:h-fit flex justify-between px-5  max-lg:flex-col-reverse'>
        <div className='flex items-end  gap-x-2 mb-5 text-[30px] font-bold max-lg:justify-center underline'>
            <a className='hover:text-red-700 transition-all duration-300 cursor-pointer' href="https://www.linkedin.com/in/khaled-akel-98638a250/" target="_blank">LinkedIn</a>
            <a className='hover:text-red-700 transition-all duration-300 cursor-pointer' href="https://github.com/KhaledAkel" target="_blank">Github</a>
            <a className='hover:text-red-700 transition-all duration-300 cursor-pointer' href="https://www.youtube.com/@khaledakel7354" target="_blank">Youtube</a>
        </div>
        <div className='text-[150px] font-bold flex flex-col justify-end text-end max-sm:text-[80px]'>
            <div className='lg:-mt-10'>Contact</div>
            <div className='-mt-9 lg:-mt-20'>Me<span className='text-red-700'>.</span></div>
        </div>
    </div>
  )
}

export default Contactme
