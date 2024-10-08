import React from 'react'
import { FaLinkedinIn, FaGithub, FaYoutube   } from "react-icons/fa6";

function SocialLinks() {
  return (
    <div className='flex flex-col items-center absolute top-10 right-0 gap-y-4 max-sm:hidden '>
      <div className='bg__dark-blue w-[1px] h-28 rounded-full mb-2' />
      <a href="https://www.linkedin.com/in/khaled-akel-98638a250/" target="_blank"><FaLinkedinIn className='text-[28px] text__dark-blue' /></a>
      <a href="https://github.com/KhaledAkel" target="_blank"><FaGithub className='text-[28px] text__dark-blue ' /></a>
      <a href="https://www.youtube.com/@khaledakel7354" target="_blank"><FaYoutube className='text-[28px] text__dark-blue' /></a>
      <p className='text__dark-blue -rotate-90 mt-5'>Follow me</p>
    </div>
  )
}

export default SocialLinks
