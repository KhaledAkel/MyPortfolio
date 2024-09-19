import React from 'react'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function ScrollDown() {
  return (
    <div className='absolute right-0 bottom-0 max-sm:hidden flex'>
      <a href="#biography"><MdKeyboardDoubleArrowDown className='text-[70px] text__dark-blue animate-bounce mb-12' /></a>
    </div>
  )
}

export default ScrollDown
