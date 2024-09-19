import React from 'react'
import website1h from '../assets/website1-h.jpeg'
import website1v from '../assets/website1-v.png'
import { DisplayText2, CheckMore } from '../components'

function Projects() {
  return (
    <div className='w-[80%] mx-auto max-lg:w-[86%] h-[90%] flex gap-x-20'>
        <div className='w-[35%] h-full flex flex-col gap-y-11 max-lg:items-center max-lg:w-full'>
            <DisplayText2 />
            <img src={website1v} className='w-[400px] max-sm:w-[300px] rounded-2xl shadow-2xl' />
            <div className='lg:hidden'><CheckMore /></div>
        </div>
        <div className='w-[65%] h-full max-lg:hidden'>
            <img src={website1h} className='w-[900px] rounded-2xl shadow-2xl' />
            <CheckMore />
        </div>
    </div>
  )
}

export default Projects
