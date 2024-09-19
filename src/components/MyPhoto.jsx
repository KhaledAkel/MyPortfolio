import React from 'react'
import img1 from '../assets/img1.jpg'

function MyPhoto() {
  return (
    <div className='w-full flex justify-center items-center pt-24 '>
        <div>
            <div className='relative w-[450px] max-sm:w-[350px] h-[280px] bg-[#D9E2C6]' >
                <div className=' w-[320px] max-sm:w-[280px] h-[420px] translate-x-12 -translate-y-12 shadow-lg'>
                    <img  src={img1} className='w-full h-full absolute  object-cover' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyPhoto
